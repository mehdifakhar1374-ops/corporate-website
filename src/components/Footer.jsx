import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../content/site.js'
import { services } from '../content/services.js'
import { ArrowRight } from './Icons.jsx'
import { faDigits } from '../lib/images.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

export function NewsletterForm() {
  const inputId = useId()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (status !== 'done') return undefined
    const timer = setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 9000)
    return () => clearTimeout(timer)
  }, [status])

  async function onSubmit(event) {
    event.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setError(true)
      setMessage('لطفاً یک نشانی ایمیل معتبر وارد کنید.')
      return
    }

    setStatus('sending')
    setError(false)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        setStatus('idle')
        setError(true)
        setMessage(data.message || 'عضویت انجام نشد. لطفاً دوباره تلاش کنید.')
        return
      }

      setStatus('done')
      setEmail('')
      setMessage(
        data.alreadySubscribed
          ? 'شما پیش‌تر در فهرست هستید — سپاسگزاریم.'
          : 'سپاسگزاریم. عضویت شما در خبرنامه افق ثبت شد.',
      )
    } catch {
      setStatus('idle')
      setError(true)
      setMessage('ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید.')
    }
  }

  return (
    <form className="newsletter__form" onSubmit={onSubmit} noValidate>
      <label className="sr-only" htmlFor={inputId}>
        نشانی ایمیل برای خبرنامه افق
      </label>
      <input
        id={inputId}
        className="newsletter__input"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="نشانی ایمیل"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        aria-invalid={error}
        aria-describedby={message ? `${inputId}-message` : undefined}
        required
      />
      <button
        type="submit"
        className="newsletter__submit"
        aria-label="عضویت در خبرنامه"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? <span className="spinner" aria-hidden="true" /> : <ArrowRight size={16} />}
      </button>
      {message && (
        <p
          id={`${inputId}-message`}
          className={`newsletter__message${error ? ' newsletter__message--error' : ''}`}
          role={error ? 'alert' : 'status'}
        >
          {message}
        </p>
      )}
    </form>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="newsletter">
            <p className="newsletter__label">خبرنامه</p>
            <p className="newsletter__text">
              بینش‌های کاربردی مالی و تازه‌ترین اخبار کسب‌وکار را دریافت کنید.
            </p>
            <NewsletterForm />
          </div>

          <ul className="footer-social" aria-label="افق در شبکه‌های اجتماعی">
            {site.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} (در برگه جدید باز می‌شود)`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <p className="footer-col__title">{site.name}</p>
            <p>{site.description}</p>
          </div>

          <nav aria-label="ناوبری پانوشت">
            <p className="footer-col__title">ناوبری</p>
            <ul className="footer-links">
              {site.footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="خدمات">
            <p className="footer-col__title">خدمات</p>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer-col__title">تماس</p>
            <div className="footer-contact">
              <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <address>
                {site.contact.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="site-footer__bottom">
          <p>
            © {faDigits(year)} {site.legalName}. تمامی حقوق محفوظ است.
          </p>
          <div className="site-footer__legal">
            {site.legalNav.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <span className="site-footer__watermark" aria-hidden="true">
        افق
      </span>
    </footer>
  )
}
