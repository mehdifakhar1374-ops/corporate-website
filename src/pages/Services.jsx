import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand.jsx'
import PageHero from '../components/PageHero.jsx'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArrowRight } from '../components/Icons.jsx'
import { services } from '../content/services.js'
import usePageMeta from '../lib/usePageMeta.js'

export default function Services() {
  usePageMeta(
    'Services — Horizon Financial Services',
    'Accounting and bookkeeping, financial management, tax consulting, payroll, financial reporting and business consulting services.',
  )

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Financial Services"
        text="From daily accounting operations to strategic financial consulting, we provide the expertise businesses need to manage their finances with confidence."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        image={{ id: '11861957', alt: 'Curved glass façade of a modern office building' }}
      />

      <section className="section section--white" aria-label="Service catalogue">
        <div className="container">
          <div className="service-cards">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 50}>
                <Link className="service-card" to={`/services/${service.slug}`}>
                  <div className="card-media service-card__media">
                    <Photo
                      image={service.image}
                      width={900}
                      sizes="(max-width: 1023px) 90vw, 45vw"
                    />
                  </div>
                  <div className="service-card__body">
                    <p className="service-card__index">{service.index}</p>
                    <h2 className="service-card__title">{service.title}</h2>
                    <p className="service-card__text">{service.short}</p>
                    <span className="link-arrow">
                      Explore Service
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory" aria-label="Start a conversation">
        <div className="container">
          <CtaBand
            title="Not Sure Which Service You Need?"
            text="Tell us about your business and current situation. We will recommend an appropriate scope — or say honestly if we are not the right fit."
          />
        </div>
      </section>
    </>
  )
}
