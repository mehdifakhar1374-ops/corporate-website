import Reveal from '../Reveal.jsx'
import SectionHead from '../SectionHead.jsx'
import Testimonials from '../Testimonials.jsx'

export default function TestimonialsSection() {
  return (
    <section className="section section--alt" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHead
          id="testimonials-title"
          label="تجربه مشتریان"
          title="بر پایه اعتماد. تقویت‌شده با نتایج."
          align="center"
        />
        <Reveal style={{ marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          <Testimonials />
        </Reveal>
      </div>
    </section>
  )
}
