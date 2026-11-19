import { Link } from 'react-router-dom'
import { industries } from '../../content/industries.js'
import SectionHead from '../SectionHead.jsx'
import Photo from '../Photo.jsx'
import Reveal from '../Reveal.jsx'

export default function IndustriesSection() {
  return (
    <section className="section section--white" id="industries" aria-labelledby="industries-title">
      <div className="container">
        <SectionHead
          id="industries-title"
          label="به چه کسانی کمک می‌کنیم"
          title="تخصص مالی در صنایع مختلف"
          text="هر بخش اقتصاد ریتم خاص خود را در درآمد، هزینه و انطباق دارد. کار خود را با نحوه واقعی فعالیت کسب‌وکار شما سازگار می‌کنیم."
        />

        <div className="industries-grid" style={{ marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 45}>
              <Link
                className="industry"
                to={`/services/${industry.services[0]}`}
                aria-label={`${industry.name} — مشاهده خدمات مرتبط`}
              >
                <Photo
                  image={industry.image}
                  width={640}
                  sizes="(max-width: 640px) 50vw, (max-width: 1023px) 50vw, 25vw"
                />
                <div className="industry__body">
                  <p className="industry__index">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="industry__name">{industry.name}</h3>
                  <p className="industry__text">{industry.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
