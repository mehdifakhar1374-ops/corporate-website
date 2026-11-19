import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from './Icons.jsx'
import Photo from './Photo.jsx'

/**
 * The "Service Monolith": an interconnected list where hovering a row reveals
 * the matching image in the preview column.
 */
export default function ServiceList({ services }) {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug)
  const active = services.find((service) => service.slug === activeSlug) || services[0]

  return (
    <div className="services">
      <div className="service-list">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="service-row"
            onMouseEnter={() => setActiveSlug(service.slug)}
            onFocus={() => setActiveSlug(service.slug)}
          >
            <span className="service-row__index" aria-hidden="true">
              {service.index}
            </span>
            <span className="service-row__title">{service.title}</span>
            <span className="service-row__desc">{service.short}</span>
            <span className="service-row__arrow" aria-hidden="true">
              <ArrowUpRight size={20} />
            </span>
          </Link>
        ))}
      </div>

      <div className="service-preview" aria-hidden="true">
        {services.map((service) => (
          <Photo
            key={service.slug}
            image={service.image}
            width={900}
            sizes="(max-width: 1023px) 0px, 40vw"
            className={service.slug === active?.slug ? 'is-active' : undefined}
          />
        ))}
        <p className="service-preview__caption">{active?.title}</p>
      </div>
    </div>
  )
}
