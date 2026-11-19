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
    'خدمات — خدمات مالی افق',
    'خدمات حسابداری و دفترداری، مدیریت مالی، مشاوره مالیاتی، حقوق و دستمزد، گزارشگری مالی و مشاوره کسب‌وکار.',
  )

  return (
    <>
      <PageHero
        eyebrow="خدمات ما"
        title="خدمات مالی جامع"
        text="از عملیات روزانه حسابداری تا مشاوره مالی راهبردی؛ تخصصی را فراهم می‌کنیم که کسب‌وکارها برای مدیریت مطمئن امور مالی خود نیاز دارند."
        breadcrumb={[{ label: 'خانه', to: '/' }, { label: 'خدمات' }]}
        image={{ id: '11861957', alt: 'نمای شیشه‌ای منحنی یک ساختمان اداری مدرن' }}
      />

      <section className="section section--white" aria-label="فهرست خدمات">
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
                      مشاهده خدمت
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory" aria-label="شروع گفت‌وگو">
        <div className="container">
          <CtaBand
            title="مطمئن نیستید کدام خدمت را نیاز دارید؟"
            text="درباره کسب‌وکار و وضعیت فعلی خود بگویید. دامنه مناسب را پیشنهاد می‌دهیم — یا صادقانه می‌گوییم اگر گزینه مناسبی نیستیم."
          />
        </div>
      </section>
    </>
  )
}
