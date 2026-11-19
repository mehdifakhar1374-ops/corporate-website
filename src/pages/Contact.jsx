import ContactForm from '../components/ContactForm.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { Clock, Mail, Phone, Pin } from '../components/Icons.jsx'
import { site } from '../content/site.js'
import usePageMeta from '../lib/usePageMeta.js'

export default function Contact() {
  usePageMeta(
    'تماس — خدمات مالی افق',
    'درباره کسب‌وکار و خدمات مالی مورد نیاز خود به ما بگویید. درخواست مشاوره با خدمات مالی افق.',
  )

  return (
    <>
      <PageHero
        eyebrow="تماس"
        title="درباره امور مالی کسب‌وکارتان صحبت کنیم"
        text="درباره کسب‌وکار و خدمات مالی مورد نیاز خود به ما بگویید. تیم ما برای گفت‌وگو درباره گام‌های بعدی با شما تماس خواهد گرفت."
        breadcrumb={[{ label: 'خانه', to: '/' }, { label: 'تماس' }]}
        image={{ id: '7534232', alt: 'فضای داخلی دفتر کار مدرن با نور طبیعی روز' }}
      />

      <section className="section section--ivory" aria-label="اطلاعات تماس و فرم مشاوره">
        <div className="container contact-grid">
          <Reveal className="contact-details">
            <div className="contact-detail">
              <p className="contact-detail__label">
                <Pin size={14} style={{ display: 'inline', marginInlineEnd: '0.5rem' }} />
                دفتر
              </p>
              <address>
                {site.contact.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>

            <div className="contact-detail">
              <p className="contact-detail__label">
                <Phone size={14} style={{ display: 'inline', marginInlineEnd: '0.5rem' }} />
                تلفن
              </p>
              <p>
                <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
              </p>
            </div>

            <div className="contact-detail">
              <p className="contact-detail__label">
                <Mail size={14} style={{ display: 'inline', marginInlineEnd: '0.5rem' }} />
                ایمیل
              </p>
              <p>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </p>
            </div>

            <div className="contact-detail">
              <p className="contact-detail__label">
                <Clock size={14} style={{ display: 'inline', marginInlineEnd: '0.5rem' }} />
                ساعات کاری
              </p>
              <ul className="hours-list">
                {site.contact.hours.map((entry) => (
                  <li key={entry.days}>
                    <span>{entry.days}</span>
                    <span>{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-detail">
              <p className="contact-detail__label">ما را دنبال کنید</p>
              <ul className="contact-social">
                {site.social.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="contact-panel" delay={100}>
            <h2 className="contact-panel__title">درخواست مشاوره</h2>
            <p className="contact-panel__intro">
              فرم زیر را تکمیل کنید؛ ظرف یک روز کاری پاسخ می‌دهیم. تمام اطلاعات محرمانه تلقی می‌شود.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--white section--tight" aria-label="تعهد پاسخ‌گویی">
        <div className="container">
          <div className="contact-assurance">
            <div>
              <p className="eyebrow">بعد از این چه می‌شود</p>
              <h2 style={{ marginTop: '1rem', fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)' }}>
                یک گفت‌وگوی اولیه کوتاه و ساختاریافته.
              </h2>
            </div>
            <div className="contact-assurance__body">
              <p>
                ظرف یک روز کاری پاسخ می‌دهیم تا دریافت درخواست را تأیید کنیم و زمانی برای گفت‌وگو
                هماهنگ کنیم. گفت‌وگوی اولیه حدود سی دقیقه طول می‌کشد: درباره کسب‌وکار، سوابق فعلی و
                آنچه از یک شریک مالی انتظار دارید می‌پرسیم. اگر گزینه مناسبی باشیم، پیش از شروع هر
                کاری، دامنه و پیشنهاد هزینه به‌صورت مکتوب دریافت می‌کنید.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
