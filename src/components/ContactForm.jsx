import { useState } from 'react'
import { Link } from 'react-router-dom'
import { companySizes, contactMethods, industriesOptions } from '../content/site.js'
import { services } from '../content/services.js'
import { ArrowRight, Check } from './Icons.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i
const PHONE_RE = /^[+()\d][\d\s().-]{6,24}$/

const EMPTY = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  service: '',
  companySize: '',
  contactMethod: 'Email',
  message: '',
  website: '', // honeypot
}

function validate(values) {
  const errors = {}
  if (values.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!PHONE_RE.test(values.phone.trim()) || values.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!values.service) errors.service = 'Please select the service you need.'
  if (values.message.trim().length < 10) {
    errors.message = 'Please tell us a little about your requirements.'
  }
  return errors
}

function Field({ id, label, required = false, error, children }) {
  return (
    <div className={`field${error ? ' field--invalid' : ''}`}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required && (
          <abbr title="required" aria-label="required">
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
        body: JSON.stringify(values),
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        setStatus('idle')
        if (data.errors) {
          setErrors(data.errors)
          const firstField = Object.keys(data.errors)[0]
          document.getElementById(firstField)?.focus()
        }
        setFormError(data.message || 'We could not submit your request. Please try again.')
        return
      }

      setReference(data.reference || '')
      setStatus('success')
      setValues(EMPTY)
    } catch {
      setStatus('idle')
      setFormError('We could not reach the server. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <span className="form-success__icon" aria-hidden="true">
          <Check size={26} />
        </span>
        <h3>Request received</h3>
        <p>
          Thank you — your consultation request has been recorded. A member of our team will contact
          you within one business day using your preferred contact method.
        </p>
        {reference && <p className="form-success__ref">Reference {reference}</p>}
        <div>
          <button
            type="button"
            className="link-arrow"
            onClick={() => {
              setStatus('idle')
              setReference('')
            }}
          >
            Send another request
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <Field id="fullName" label="Full Name" required error={errors.fullName}>
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
            placeholder="Your name"
          />
        </Field>

        <Field id="company" label="Company Name" error={errors.company}>
          <input
            id="company"
            name="company"
            className="input"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={update('company')}
            placeholder="Business name"
          />
        </Field>
      </div>

      <div className="form__row">
        <Field id="email" label="Email Address" required error={errors.email}>
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

        <Field id="phone" label="Phone Number" required error={errors.phone}>
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
            placeholder="+1 000 000 0000"
          />
        </Field>
      </div>

      <div className="form__row">
        <Field id="industry" label="Industry" error={errors.industry}>
          <select
            id="industry"
            name="industry"
            className="select"
            value={values.industry}
            onChange={update('industry')}
          >
            <option value="">Select an industry</option>
            {industriesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="service" label="Service Required" required error={errors.service}>
          <select
            id="service"
            name="service"
            className="select"
            value={values.service}
            onChange={update('service')}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy('service')}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </Field>
      </div>

      <div className="form__row">
        <Field id="companySize" label="Company Size" error={errors.companySize}>
          <select
            id="companySize"
            name="companySize"
            className="select"
            value={values.companySize}
            onChange={update('companySize')}
          >
            <option value="">Select company size</option>
            {companySizes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="contactMethod" label="Preferred Contact Method" error={errors.contactMethod}>
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

      <Field id="message" label="Message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          className="textarea"
          rows={5}
          value={values.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
          placeholder="Tell us about your business and the support you are looking for."
        />
      </Field>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
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
              Sending
            </>
          ) : (
            <>
              Request a Consultation
              <ArrowRight size={16} />
            </>
          )}
        </button>
        <p className="form__note">
          Your details are used only to respond to this enquiry. See our{' '}
          <Link to="/privacy">privacy policy</Link>.
        </p>
      </div>
    </form>
  )
}
