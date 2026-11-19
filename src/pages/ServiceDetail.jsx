import { Link, useParams } from 'react-router-dom'
import CtaBand from '../components/CtaBand.jsx'
import PageHero from '../components/PageHero.jsx'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ApproachSection from '../components/sections/ApproachSection.jsx'
import { Check } from '../components/Icons.jsx'
import { getService, services } from '../content/services.js'
import usePageMeta from '../lib/usePageMeta.js'
import NotFound from './NotFound.jsx'

const CTA_LABELS = {
  'accounting-bookkeeping': 'Discuss Your Accounting Needs',
  'financial-management': 'Discuss Your Financial Management Needs',
  'tax-consulting': 'Discuss Your Tax Requirements',
  'payroll-services': 'Discuss Your Payroll Needs',
  'financial-reporting': 'Discuss Your Reporting Needs',
  'business-consulting': 'Discuss Your Business Plans',
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  usePageMeta(
    service ? `${service.title} — Horizon Financial Services` : 'Service not found',
    service?.short,
  )

  if (!service) return <NotFound />

  const related = service.related.map(getService).filter(Boolean)

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.index}`}
        title={service.headline}
        text={service.intro}
        image={service.image}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />

      <section className="section section--white" aria-labelledby="overview-title">
        <div className="container detail-cols">
          <Reveal>
            <p className="eyebrow">Overview</p>
            <h2 id="overview-title" style={{ marginTop: '1.1rem' }}>
              {service.title}
            </h2>
          </Reveal>
          <Reveal className="detail-body" delay={90}>
            {service.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="scope-title">
        <div className="container">
          <SectionHead
            id="scope-title"
            label="Scope of Services"
            title="What the Engagement Covers"
            text="The specific scope is agreed in writing before work begins, so responsibilities and deliverables are clear on both sides."
          />

          <div className="scope-grid">
            {service.scope.map((item, index) => (
              <Reveal key={item.title} className="scope-item" delay={index * 45}>
                <p className="scope-item__index">{String(index + 1).padStart(2, '0')}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="benefits-title">
        <div className="container detail-cols">
          <Reveal>
            <p className="eyebrow">Benefits</p>
            <h2 id="benefits-title" style={{ marginTop: '1.1rem' }}>
              What It Changes
            </h2>
            <ul className="check-list">
              {service.benefits.map((benefit) => (
                <li key={benefit}>
                  <span className="check-list__icon" aria-hidden="true">
                    <Check size={14} />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <p className="eyebrow">Typical Requirements</p>
            <h2 style={{ marginTop: '1.1rem' }}>What We Need From You</h2>
            <ul className="check-list check-list--quiet">
              {service.clientNeeds.map((need) => (
                <li key={need}>
                  <span className="check-list__icon" aria-hidden="true">
                    <Check size={14} />
                  </span>
                  {need}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ApproachSection id="process" tone="ivory" />

      <section className="section section--white" aria-labelledby="faq-title">
        <div className="container detail-cols">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title" style={{ marginTop: '1.1rem' }}>
              Common Questions
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Anything else you would like to ask? We are happy to talk it through.
            </p>
          </Reveal>

          <Reveal className="faq" delay={90}>
            {service.faqs.map((faq, index) => (
              <details className="faq__item" key={faq.q} open={index === 0}>
                <summary>
                  {faq.q}
                  <span className="faq__icon" aria-hidden="true" />
                </summary>
                <p className="faq__answer">{faq.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="related-title">
        <div className="container">
          <SectionHead id="related-title" label="Related Services" title="Continue Exploring" />

          <div className="related-grid">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60}>
                <Link className="related-card" to={`/services/${item.slug}`}>
                  <div className="card-media related-card__media">
                    <Photo
                      image={item.image}
                      width={720}
                      sizes="(max-width: 1023px) 90vw, 45vw"
                    />
                  </div>
                  <div className="related-card__body">
                    <p className="related-card__index">{item.index}</p>
                    <h3>{item.title}</h3>
                    <p>{item.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <p style={{ marginTop: '2rem' }}>
            <Link className="link-arrow" to="/services">
              View all services
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--white" aria-label="Start a conversation">
        <div className="container">
          <CtaBand
            title={CTA_LABELS[service.slug] || 'Discuss Your Requirements'}
            text="Share a little about your business and we will come back with a clear, written scope and next steps."
          />
        </div>
      </section>
    </>
  )
}
