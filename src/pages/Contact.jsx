import ContactForm from '../components/ContactForm.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { Clock, Mail, Phone, Pin } from '../components/Icons.jsx'
import { site } from '../content/site.js'
import usePageMeta from '../lib/usePageMeta.js'

export default function Contact() {
  usePageMeta(
    'Contact — Horizon Financial Services',
    'Tell us about your business and the financial services you need. Request a consultation with Horizon Financial Services.',
  )

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s Talk About Your Business Finances"
        text="Tell us about your business and the financial services you need. Our team will get in touch to discuss the next steps."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        image={{ id: '7534232', alt: 'Contemporary office interior with natural daylight' }}
      />

      <section className="section section--ivory" aria-label="Contact details and consultation form">
        <div className="container contact-grid">
          <Reveal className="contact-details">
            <div className="contact-detail">
              <p className="contact-detail__label">
                <Pin size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                Office
              </p>
              <address>
                {site.contact.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>

            <div className="contact-detail">
              <p className="contact-detail__label">
                <Phone size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                Phone
              </p>
              <p>
                <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
              </p>
            </div>

            <div className="contact-detail">
              <p className="contact-detail__label">
                <Mail size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                Email
              </p>
              <p>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </p>
            </div>

            <div className="contact-detail">
              <p className="contact-detail__label">
                <Clock size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                Business Hours
              </p>
              <ul className="hours-list">
                {site.contact.hours.map((entry) => (
                  <li key={entry.days}>
                    <span>{entry.days}</span>
                    <span>{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-detail">
              <p className="contact-detail__label">Follow</p>
              <ul className="contact-social">
                {site.social.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="contact-panel" delay={100}>
            <h2 className="contact-panel__title">Request a Consultation</h2>
            <p className="contact-panel__intro">
              Complete the form below and we will respond within one business day. All information is
              treated confidentially.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--white section--tight" aria-label="Response commitment">
        <div className="container">
          <div className="contact-assurance">
            <div>
              <p className="eyebrow">What Happens Next</p>
              <h2 style={{ marginTop: '1rem', fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)' }}>
                A short, structured first conversation.
              </h2>
            </div>
            <div className="contact-assurance__body">
              <p>
                We reply within one business day to confirm receipt and arrange a time to talk. The
                first conversation takes about thirty minutes: we ask about your business, your current
                records and what you need from a financial partner. If we are a good fit, you receive a
                written scope and fee proposal before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
