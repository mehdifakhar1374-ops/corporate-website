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
import { faDigits } from '../lib/images.js'
import NotFound from './NotFound.jsx'

const CTA_LABELS = {
  'accounting-bookkeeping': 'درباره نیازهای حسابداری خود صحبت کنیم',
  'financial-management': 'درباره نیازهای مدیریت مالی خود صحبت کنیم',
  'tax-consulting': 'درباره نیازهای مالیاتی خود صحبت کنیم',
  'payroll-services': 'درباره نیازهای حقوق و دستمزد صحبت کنیم',
  'financial-reporting': 'درباره نیازهای گزارشگری خود صحبت کنیم',
  'business-consulting': 'درباره برنامه‌های کسب‌وکار خود صحبت کنیم',
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  usePageMeta(
    service ? `${service.title} — خدمات مالی افق` : 'خدمت یافت نشد',
    service?.short,
  )

  if (!service) return <NotFound />

  const related = service.related.map(getService).filter(Boolean)

  return (
    <>
      <PageHero
        eyebrow={`خدمت ${service.index}`}
        title={service.headline}
        text={service.intro}
        image={service.image}
        breadcrumb={[
          { label: 'خانه', to: '/' },
          { label: 'خدمات', to: '/services' },
          { label: service.title },
        ]}
      />

      <section className="section section--white" aria-labelledby="overview-title">
        <div className="container detail-cols">
          <Reveal>
            <p className="eyebrow">مرور کلی</p>
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
            label="دامنه خدمات"
            title="همکاری چه چیزهایی را پوشش می‌دهد"
            text="دامنه دقیق پیش از شروع کار به‌صورت مکتوب توافق می‌شود تا مسئولیت‌ها و خروجی‌ها برای هر دو طرف روشن باشد."
          />

          <div className="scope-grid">
            {service.scope.map((item, index) => (
              <Reveal key={item.title} className="scope-item" delay={index * 45}>
                <p className="scope-item__index">{faDigits(String(index + 1).padStart(2, '0'))}</p>
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
            <p className="eyebrow">مزایا</p>
            <h2 id="benefits-title" style={{ marginTop: '1.1rem' }}>
              چه چیزی تغییر می‌کند
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
            <p className="eyebrow">نیازمندی‌های معمول</p>
            <h2 style={{ marginTop: '1.1rem' }}>آنچه از شما نیاز داریم</h2>
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
            <p className="eyebrow">پرسش‌های متداول</p>
            <h2 id="faq-title" style={{ marginTop: '1.1rem' }}>
              پرسش‌های رایج
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              پرسش دیگری دارید؟ خوشحال می‌شویم درباره آن گفت‌وگو کنیم.
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
          <SectionHead id="related-title" label="خدمات مرتبط" title="ادامه کاوش" />

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
              مشاهده همه خدمات
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--white" aria-label="شروع گفت‌وگو">
        <div className="container">
          <CtaBand
            title={CTA_LABELS[service.slug] || 'درباره نیازهای خود صحبت کنیم'}
            text="کمی درباره کسب‌وکار خود بگویید تا با دامنه و گام‌های بعدی روشن و مکتوب بازگردیم."
          />
        </div>
      </section>
    </>
  )
}
