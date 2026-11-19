import { approach } from '../../content/company.js'
import Reveal from '../Reveal.jsx'
import SectionHead from '../SectionHead.jsx'

export default function ApproachSection({ id = 'approach', tone = 'ivory' }) {
  return (
    <section
      className={`section section--${tone}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <SectionHead id={`${id}-title`} label={approach.label} title={approach.title} text={approach.text} />

        <ol className="approach-steps">
          {approach.steps.map((step, index) => (
            <Reveal as="li" className="approach-step" key={step.number} delay={index * 70}>
              <p className="approach-step__number">{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
