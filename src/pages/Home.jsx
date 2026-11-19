import CtaBand from '../components/CtaBand.jsx'
import Hero from '../components/sections/Hero.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import ServicesSection from '../components/sections/ServicesSection.jsx'
import IndustriesSection from '../components/sections/IndustriesSection.jsx'
import WhySection from '../components/sections/WhySection.jsx'
import ApproachSection from '../components/sections/ApproachSection.jsx'
import TeamSection from '../components/sections/TeamSection.jsx'
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx'
import InsightsSection from '../components/sections/InsightsSection.jsx'
import usePageMeta from '../lib/usePageMeta.js'

export default function Home() {
  usePageMeta(
    'Horizon Financial Services — Accounting, Tax & Financial Management',
    'Professional accounting, tax and financial management services helping businesses build clarity, confidence and sustainable growth.',
  )

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <WhySection />
      <ApproachSection />
      <TeamSection />
      <TestimonialsSection />
      <InsightsSection />

      <section className="section section--ivory" aria-label="Start a conversation">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  )
}
