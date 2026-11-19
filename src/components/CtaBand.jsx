import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { ArrowRight, Trend } from './Icons.jsx'

export default function CtaBand({
  title = 'Ready to Bring More Clarity to Your Business Finances?',
  text = "Let's discuss your accounting and financial management needs and find the right way forward.",
  actionLabel = 'Book a Consultation',
  actionTo = '/contact',
}) {
  return (
    <Reveal className="cta-band">
      <span className="cta-band__mark" aria-hidden="true">
        <Trend size={30} />
      </span>
      <div className="cta-band__body">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-band__action">
        <Button to={actionTo} variant="primary" icon={<ArrowRight size={16} />}>
          {actionLabel}
        </Button>
      </div>
    </Reveal>
  )
}
