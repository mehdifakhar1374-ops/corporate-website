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
            label="What We Do"
            title="Comprehensive Financial Services"
            text="From daily accounting operations to strategic financial consulting, we provide the expertise businesses need to manage their finances with confidence."
          />
          <Link className="link-arrow" to="/services">
            All Services
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
