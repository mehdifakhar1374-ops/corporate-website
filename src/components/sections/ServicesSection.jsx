import { Link } from 'react-router-dom'
import { services } from '../../content/services.js'
import SectionHead from '../SectionHead.jsx'
import ServiceList from '../ServiceList.jsx'
import Reveal from '../Reveal.jsx'
import { ArrowRight } from '../Icons.jsx'

export default function ServicesSection() {
  return (
    <section className="section section--ivory" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-topline">
          <SectionHead
            id="services-title"
            label="آنچه انجام می‌دهیم"
            title="خدمات مالی جامع"
            text="از عملیات روزانه حسابداری تا مشاوره مالی راهبردی؛ تخصصی را فراهم می‌کنیم که کسب‌وکارها برای مدیریت مطمئن امور مالی خود نیاز دارند."
          />
          <Link className="link-arrow" to="/services">
            همه خدمات
            <ArrowRight size={16} />
          </Link>
        </div>

        <Reveal>
          <ServiceList services={services} />
        </Reveal>
      </div>
    </section>
  )
}
