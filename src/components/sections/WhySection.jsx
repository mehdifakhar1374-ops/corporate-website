import { why } from '../../content/company.js'
import Button from '../Button.jsx'
import Reveal from '../Reveal.jsx'
import { ArrowRight } from '../Icons.jsx'

export default function WhySection() {
  return (
    <section className="section section--navy" id="why" aria-labelledby="why-title">
      <div className="container why-grid">
        <Reveal className="why-grid__intro">
          <p className="eyebrow">{why.label}</p>
          <h2 id="why-title" style={{ marginTop: '1.1rem' }}>
            {why.title}
          </h2>
          <p>{why.text}</p>
          <Button to="/contact" variant="gold" icon={<ArrowRight size={16} />}>
            مشاوره رزرو کنید
          </Button>
        </Reveal>

        <div className="why-items">
          {why.items.map((item, index) => (
            <Reveal key={item.title} className="why-item" delay={index * 55}>
              <p className="why-item__index">{String(index + 1).padStart(2, '0')}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
