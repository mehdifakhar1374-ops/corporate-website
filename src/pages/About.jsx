import CtaBand from '../components/CtaBand.jsx'
import PageHero from '../components/PageHero.jsx'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ApproachSection from '../components/sections/ApproachSection.jsx'
import TeamSection from '../components/sections/TeamSection.jsx'
import { about, expertise, mission, values, vision } from '../content/company.js'
import usePageMeta from '../lib/usePageMeta.js'
import { faDigits } from '../lib/images.js'

export default function About() {
  usePageMeta(
    'درباره ما — خدمات مالی افق',
    'خدمات مالی افق، خدمات حسابداری، مشاوره مالی و مدیریت کسب‌وکار را بر پایه دقت، شفافیت و روابط بلندمدت با مشتری ارائه می‌کند.',
  )

  return (
    <>
      <PageHero
        eyebrow="درباره ما"
        title="شریک مالی‌ای بر پایه شفافیت و نظم"
        text="ما یک شرکت حسابداری و مدیریت مالی هستیم که با صاحبان کسب‌وکاری کار می‌کند که می‌خواهند ارقامشان قابل اعتماد، به‌روز و کاربردی باشد."
        breadcrumb={[{ label: 'خانه', to: '/' }, { label: 'درباره ما' }]}
        image={{ id: '14527417', alt: 'نمای از پایین برج‌های شیشه‌ای مدرن اداری' }}
      />

      <section className="section section--white" aria-labelledby="who-title">
        <div className="container about-intro">
          <Reveal className="about-intro__body">
            <p className="eyebrow">داستان ما</p>
            <h2 id="who-title" style={{ marginTop: '1.1rem' }}>
              ما که هستیم
            </h2>
            <p>{about.lead}</p>
            <p>{about.body}</p>
            <p>
              ما با کسب‌وکارهای کوچک و متوسط، کارآفرینان، شرکت‌های خدمات حرفه‌ای و سازمان‌های
              شرکتی تثبیت‌شده کار می‌کنیم. هر همکاری توسط یک متخصص مشخص رهبری می‌شود که در قبال
              کیفیت و به‌موقع بودن کار پاسخگو است.
            </p>
          </Reveal>

          <Reveal className="about-intro__media" delay={120}>
            <Photo
              image={about.imageMain}
              width={900}
              sizes="(max-width: 1023px) 90vw, 38vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="mission-title">
        <div className="container">
          <SectionHead
            id="mission-title"
            label="هدف"
            title="برای چه تلاش می‌کنیم"
            text="دو تعهد شکل‌دهنده نحوه اداره شرکت و نحوه خدمت به هر مشتری است."
          />

          <div className="mv-grid" style={{ marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
            <Reveal className="mv-card">
              <p className="eyebrow eyebrow--plain">مأموریت</p>
              <h3 style={{ marginTop: '0.85rem' }}>{mission.title}</h3>
              <p>{mission.text}</p>
            </Reveal>
            <Reveal className="mv-card" delay={90}>
              <p className="eyebrow eyebrow--plain">چشم‌انداز</p>
              <h3 style={{ marginTop: '0.85rem' }}>{vision.title}</h3>
              <p>{vision.text}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="values-title">
        <div className="container">
          <SectionHead
            id="values-title"
            label="ارزش‌های بنیادین"
            title="اصولی که پشت هر همکاری است"
            text="این‌ها استانداردهایی هستند که فارغ از اندازه همکاری به آن پایبندیم."
          />

          <div className="values-grid">
            {values.map((value, index) => (
              <Reveal key={value.title} className="value-card" delay={index * 50}>
                <p className="value-card__index">{faDigits(String(index + 1).padStart(2, '0'))}</p>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="expertise-title">
        <div className="container">
          <SectionHead
            id="expertise-title"
            label="تخصص ما"
            title="جایی که بیشترین ارزش را می‌آفرینیم"
            text="عمق تخصص در رشته‌هایی که تعیین می‌کنند اطلاعات مالی قابل استفاده است یا نه."
          />

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <Reveal key={item.title} className="expertise-item" delay={index * 55}>
                <p className="expertise-item__index">{faDigits(String(index + 1).padStart(2, '0'))}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ApproachSection tone="white" />
      <TeamSection tone="ivory" />

      <section className="section section--white" aria-label="شروع گفت‌وگو">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  )
}
