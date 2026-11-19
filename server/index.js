import express from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = Number(process.env.API_PORT || 4000)
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, '..', 'data')
const DIST_DIR = path.join(__dirname, '..', 'dist')

const FILES = {
  consultations: 'consultations.json',
  subscribers: 'subscribers.json',
}

app.disable('x-powered-by')
app.set('trust proxy', true)
app.use(express.json({ limit: '32kb' }))
app.use(express.urlencoded({ extended: false, limit: '32kb' }))

/* ------------------------------------------------------------------ *
 * Storage: append-only JSON documents inside a dedicated data volume.
 * Writes are serialised and atomic (write temp file, then rename).
 * ------------------------------------------------------------------ */
let writeQueue = Promise.resolve()

async function readList(file) {
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, file), 'utf8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }
}

function append(file, record) {
  writeQueue = writeQueue.then(async () => {
    await fs.mkdir(DATA_DIR, { recursive: true })
    const list = await readList(file)
    list.push(record)
    const target = path.join(DATA_DIR, file)
    const temp = `${target}.${process.pid}.tmp`
    await fs.writeFile(temp, JSON.stringify(list, null, 2), 'utf8')
    await fs.rename(temp, target)
  })
  return writeQueue
}

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i
const PHONE_RE = /^[+()\d][\d\s().-]{6,24}$/

const clean = (value, max = 400) =>
  typeof value === 'string' ? value.trim().slice(0, max) : ''

// Persian/Arabic-Indic digits become ASCII so phone validation is consistent.
const normalizeDigits = (value) =>
  value
    .replace(/[۰-۹]/g, (digit) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)))

function reference() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5)
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5)
  return `HZN-${stamp}${rand}`
}

// Lightweight in-memory throttle: a submission is allowed every 20s per IP.
const lastSubmission = new Map()
const THROTTLE_MS = 20_000

function throttled(ip) {
  const now = Date.now()
  const previous = lastSubmission.get(ip) || 0
  if (now - previous < THROTTLE_MS) return true
  lastSubmission.set(ip, now)
  if (lastSubmission.size > 5000) lastSubmission.clear()
  return false
}

/* ------------------------------------------------------------------ *
 * API
 * ------------------------------------------------------------------ */
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'horizon-api', time: new Date().toISOString() })
})

app.post('/api/consultations', async (req, res) => {
  const body = req.body || {}

  // Honeypot: a real visitor never fills this hidden field.
  if (clean(body.website, 200)) {
    return res.status(202).json({ ok: true, reference: reference() })
  }

  if (throttled(req.ip)) {
    return res.status(429).json({
      ok: false,
      message: 'همین حالا درخواستی از این اتصال دریافت کرده‌ایم. لطفاً کمی بعد دوباره تلاش کنید.',
    })
  }

  const payload = {
    fullName: clean(body.fullName, 120),
    company: clean(body.company, 160),
    email: clean(body.email, 160),
    phone: normalizeDigits(clean(body.phone, 40)),
    industry: clean(body.industry, 80),
    service: clean(body.service, 80),
    companySize: clean(body.companySize, 40),
    contactMethod: clean(body.contactMethod, 40),
    message: clean(body.message, 3000),
  }

  const errors = {}
  if (payload.fullName.length < 2) errors.fullName = 'لطفاً نام و نام خانوادگی خود را وارد کنید.'
  if (!EMAIL_RE.test(payload.email)) errors.email = 'لطفاً یک نشانی ایمیل معتبر وارد کنید.'
  if (!PHONE_RE.test(payload.phone) || payload.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'لطفاً یک شماره تلفن معتبر وارد کنید.'
  }
  if (!payload.service) errors.service = 'لطفاً خدمت مورد نیاز خود را انتخاب کنید.'
  if (payload.message.length < 10) {
    errors.message = 'لطفاً کمی درباره نیازهای خود توضیح دهید.'
  }

  if (Object.keys(errors).length) {
    return res.status(422).json({ ok: false, errors, message: 'لطفاً فیلدهای مشخص‌شده را بررسی کنید.' })
  }

  const record = {
    id: reference(),
    receivedAt: new Date().toISOString(),
    ...payload,
  }

  try {
    await append(FILES.consultations, record)
  } catch (error) {
    console.error('[consultations] failed to persist request', error)
    return res.status(500).json({
      ok: false,
      message: 'درخواست شما ثبت نشد. لطفاً دوباره تلاش کنید یا مستقیماً برای ما ایمیل بفرستید.',
    })
  }

  console.log(`[consultations] new request ${record.id}`)
  return res.status(201).json({ ok: true, reference: record.id })
})

app.post('/api/newsletter', async (req, res) => {
  const email = clean((req.body || {}).email, 160).toLowerCase()
  if (!EMAIL_RE.test(email)) {
    return res.status(422).json({ ok: false, message: 'لطفاً یک نشانی ایمیل معتبر وارد کنید.' })
  }

  try {
    const existing = await readList(FILES.subscribers)
    if (existing.some((entry) => entry.email === email)) {
      return res.json({ ok: true, alreadySubscribed: true })
    }
    await append(FILES.subscribers, {
      id: reference(),
      email,
      subscribedAt: new Date().toISOString(),
    })
    console.log('[newsletter] new subscriber')
    return res.status(201).json({ ok: true })
  } catch (error) {
    console.error('[newsletter] failed to persist subscriber', error)
    return res.status(500).json({ ok: false, message: 'عضویت انجام نشد. لطفاً دوباره تلاش کنید.' })
  }
})

app.use('/api', (_req, res) => {
  res.status(404).json({ ok: false, message: 'یافت نشد' })
})

/* Optional: serve the production build when one exists. */
try {
  await fs.access(path.join(DIST_DIR, 'index.html'))
  app.use(express.static(DIST_DIR))
  app.get('*', (_req, res) => res.sendFile(path.join(DIST_DIR, 'index.html')))
} catch {
  /* development: Vite serves the frontend */
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[horizon-api] listening on http://0.0.0.0:${PORT}`)
})
