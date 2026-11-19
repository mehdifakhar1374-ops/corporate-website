import { useState } from 'react'
import { testimonials, testimonialsPlaceholder } from '../content/testimonials.js'
import { ArrowLeft, ArrowRight, Quote } from './Icons.jsx'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const current = testimonials[index]

  const go = (direction) => {
    setIndex((value) => (value + direction + total) % total)
  }

  return (
    <div className="testimonial">
      <Quote className="testimonial__mark" aria-hidden="true" />

      <div aria-live="polite">
        <blockquote className="testimonial__quote">“{current.quote}”</blockquote>
        <footer className="testimonial__person">
          <span className="testimonial__name">{current.name}</span>
          {current.role} · {current.company}
        </footer>
      </div>

      <div className="testimonial__controls">
        <button type="button" className="control-btn" onClick={() => go(-1)} aria-label="Previous testimonial">
          <ArrowLeft size={16} />
        </button>

        <div className="testimonial__dots" role="group" aria-label="Choose a testimonial">
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.quote.slice(0, 24)}
              type="button"
              className="testimonial__dot"
              aria-current={dotIndex === index}
              aria-label={`Testimonial ${dotIndex + 1} of ${total}`}
              onClick={() => setIndex(dotIndex)}
            >
              <span />
            </button>
          ))}
        </div>

        <button type="button" className="control-btn" onClick={() => go(1)} aria-label="Next testimonial">
          <ArrowRight size={16} />
        </button>
      </div>

      {testimonialsPlaceholder && (
        <p className="placeholder-note">
          Sample testimonials shown for layout — replace with approved client statements before launch.
        </p>
      )}
    </div>
  )
}
