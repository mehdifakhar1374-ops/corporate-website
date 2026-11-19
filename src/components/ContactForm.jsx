import { useState } from 'react'
import { Link } from 'react-router-dom'
import { companySizes, contactMethods, industriesOptions } from '../content/site.js'
import { services } from '../content/services.js'
import { ArrowRight, Check } from './Icons.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i
const PHONE_RE = /^[+()\d][\d\s().-]{6,24}$/

/** Persian/Arabic-Indic digits typed into the phone field become ASCII digits. */
function normalizeDigits(value) {
  return value
    .replace(/[۰-۹]/g, (digit) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)))
}

const EMPTY = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  service: '',
  companySize: '',
  contactMethod: 'ایمیل',
  message: '',
  website: '', // honeypot
}

function validate(values) {
  const errors = {}
  if (values.fullName.trim().length < 2) errors.fullName = 'لطفاً نام و نام خانوادگی خود را وارد کنید.'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'لطفاً یک نشانی ایمیل معتبر وارد کنید.'
  const phone = normalizeDigits(values.phone.trim())
  if (!PHONE_RE.test(phone) || phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'لطفاً یک شماره تلفن معتبر وارد کنید.'
  }
  if (!values.service) errors.service = 'لطفاً خدمت مورد نیاز خود را انتخاب کنید.'
  if (values.message.trim().length < 10) {
    errors.message = 'لطفاً کمی درباره نیازهای خود توضیح دهید.'
  }
  return errors
}

function Field({ id, label, required = false, error, children }) {
  return (
    <div className={`field${error ? ' field--invalid' : ''}`}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required && (
          <abbr title="الزامی" aria-label="الزامی">
            {' '}
            *
          </abbr>
        )}
      </label>
      {children}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [formError, setFormError] = useState('')
  const [reference, setReference] = useState('')

  const update = (field) => (event) => {
    const { value } = event.target
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const describedBy = (field) => (errors[field] ? `${field}-error` : undefined)

  async function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setFormError('')

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0]
      document.getElementById(firstField)?.focus()
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, phone: normalizeDigits(values.phone) }),
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        setStatus('idle')
        if (data.errors) {
          setErrors(data.errors)
          const firstField = Object.keys(data.errors)[0]
          document.getElementById(firstField)?.focus()
        }
        setFormError(data.message || 'درخواست شما ثبت نشد. لطفاً دوباره تلاش کنید.')
        return
      }

      setReference(data.reference || '')
      setStatus('success')
      setValues(EMPTY)
    } catch {
      setStatus('idle')
      setFormError('ارتباط با سرور برقرار نشد. لطفاً اتصال خود را بررسی و دوباره تلاش کنید.')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <span className="form-success__icon" aria-hidden="true">
          <Check size={26} />
        </span>
        <h3>درخواست دریافت شد</h3>
        <p>
          سپاسگزاریم — درخواست مشاوره شما ثبت شد. یکی از اعضای تیم ما ظرف یک روز کاری، از طریق
          روش تماس ترجیحی شما با شما تماس خواهد گرفت.
        </p>
        {reference && <p className="form-success__ref">شماره پیگیری {reference}</p>}
        <div>
          <button
            type="button"
            className="link-arrow"
            onClick={() => {
              setStatus('idle')
              setReference('')
            }}
          >
            ارسال درخواست دیگر
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <Field id="fullName" label="نام و نام خانوادگی" required error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            className="input"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={update('fullName')}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={describedBy('fullName')}
            placeholder="نام شما"
          />
        </Field>

        <Field id="company" label="نام شرکت" error={errors.company}>
          <input
            id="company"
            name="company"
            className="input"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={update('company')}
            placeholder="نام کسب‌وکار"
          />
        </Field>
      </div>

      <div className="form__row">
        <Field id="email" label="نشانی ایمیل" required error={errors.email}>
          <input
            id="email"
            name="email"
            className="input"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
            placeholder="name@company.com"
          />
        </Field>

        <Field id="phone" label="شماره تلفن" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            className="input"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy('phone')}
            placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
          />
        </Field>
      </div>

      <div className="form__row">
        <Field id="industry" label="صنعت" error={errors.industry}>
          <select
            id="industry"
            name="industry"
            className="select"
            value={values.industry}
            onChange={update('industry')}
          >
            <option value="">یک صنعت را انتخاب کنید</option>
            {industriesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="service" label="خدمت مورد نیاز" required error={errors.service}>
          <select
            id="service"
            name="service"
            className="select"
            value={values.service}
            onChange={update('service')}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy('service')}
          >
            <option value="">یک خدمت را انتخاب کنید</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="سایر">سایر</option>
          </select>
        </Field>
      </div>

      <div className="form__row">
        <Field id="companySize" label="اندازه شرکت" error={errors.companySize}>
          <select
            id="companySize"
            name="companySize"
            className="select"
            value={values.companySize}
            onChange={update('companySize')}
          >
            <option value="">اندازه شرکت را انتخاب کنید</option>
            {companySizes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="contactMethod" label="روش تماس ترجیحی" error={errors.contactMethod}>
          <select
            id="contactMethod"
            name="contactMethod"
            className="select"
            value={values.contactMethod}
            onChange={update('contactMethod')}
          >
            {contactMethods.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="پیام" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          className="textarea"
          rows={5}
          value={values.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
          placeholder="درباره کسب‌وکار خود و پشتیبانی‌ای که به دنبال آن هستید بنویسید."
        />
      </Field>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="website">وب‌سایت</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={update('website')}
        />
      </div>

      {formError && (
        <p className="form-alert" role="alert">
          {formError}
        </p>
      )}

      <div className="form__footer">
        <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <span className="spinner" aria-hidden="true" />
              در حال ارسال
            </>
          ) : (
            <>
              درخواست مشاوره
              <ArrowRight size={16} />
            </>
          )}
        </button>
        <p className="form__note">
          اطلاعات شما فقط برای پاسخ به این درخواست استفاده می‌شود. <Link to="/privacy">حریم خصوصی</Link> ما
          را ببینید.
        </p>
      </div>
    </form>
  )
}
