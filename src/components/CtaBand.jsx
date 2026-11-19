import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { ArrowRight, Trend } from './Icons.jsx'

export default function CtaBand({
  title = 'آماده‌اید شفافیت بیشتری به امور مالی کسب‌وکارتان بیاورید؟',
  text = 'درباره نیازهای حسابداری و مدیریت مالی خود صحبت کنیم و مسیر درست را پیدا کنیم.',
  actionLabel = 'مشاوره رزرو کنید',
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
