import CtaBand from '../components/CtaBand.jsx'
import PageHero from '../components/PageHero.jsx'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ApproachSection from '../components/sections/ApproachSection.jsx'
import TeamSection from '../components/sections/TeamSection.jsx'
import { about, expertise, mission, values, vision } from '../content/company.js'
import usePageMeta from '../lib/usePageMeta.js'

export default function About() {
  usePageMeta(
    'About Us — Horizon Financial Services',
    'Horizon Financial Services provides accounting, financial consulting and business management services built on accuracy, transparency and long-term client relationships.',
  )

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Financial Partner Built on Clarity and Discipline"
        text="We are an accounting and financial management firm working with business owners who want their numbers to be reliable, current and useful."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        image={{ id: '14527417', alt: 'Low-angle view of modern glass office towers' }}
      />

      <section className="section section--white" aria-labelledby="who-title">
        <div className="container about-intro">
          <Reveal className="about-intro__body">
            <p className="eyebrow">Our Story</p>
            <h2 id="who-title" style={{ marginTop: '1.1rem' }}>
              Who We Are
            </h2>
            <p>{about.lead}</p>
            <p>{about.body}</p>
            <p>
              We work with small and medium-sized businesses, entrepreneurs, professional service
              firms and established corporate organizations. Each engagement is led by a named
              professional who is accountable for the quality and timeliness of the work.
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
            label="Purpose"
            title="What We Work Toward"
            text="Two commitments shape how we run the firm and how we serve every client."
          />

          <div className="mv-grid" style={{ marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
            <Reveal className="mv-card">
              <p className="eyebrow eyebrow--plain">Mission</p>
              <h3 style={{ marginTop: '0.85rem' }}>{mission.title}</h3>
              <p>{mission.text}</p>
            </Reveal>
            <Reveal className="mv-card" delay={90}>
              <p className="eyebrow eyebrow--plain">Vision</p>
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
            label="Core Values"
            title="The Principles Behind Every Engagement"
            text="These are the standards we hold ourselves to, regardless of the size of the engagement."
          />

          <div className="values-grid">
            {values.map((value, index) => (
              <Reveal key={value.title} className="value-card" delay={index * 50}>
                <p className="value-card__index">{String(index + 1).padStart(2, '0')}</p>
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
            label="Our Expertise"
            title="Where We Add the Most Value"
            text="Depth in the disciplines that determine whether financial information is usable."
          />

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <Reveal key={item.title} className="expertise-item" delay={index * 55}>
                <p className="expertise-item__index">{String(index + 1).padStart(2, '0')}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ApproachSection tone="white" />
      <TeamSection tone="ivory" />

      <section className="section section--white" aria-label="Start a conversation">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  )
}
