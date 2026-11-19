import { Link } from 'react-router-dom'
import { about } from '../../content/company.js'
import Photo from '../Photo.jsx'
import Reveal from '../Reveal.jsx'
import { ArrowRight, ArrowUpRight } from '../Icons.jsx'

export default function AboutSection() {
  return (
    <section className="section section--white" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-grid__text">
          <p className="eyebrow">{about.label}</p>
          <h2 id="about-title">{about.title}</h2>
          <p>{about.lead}</p>
          <p>{about.body}</p>
          <Link className="link-arrow" to="/about">
            Learn More
            <ArrowRight size={16} />
          </Link>
        </Reveal>

        <Reveal className="about-grid__media" delay={120}>
          <Photo
            image={about.imageMain}
            className="about-media__main"
            width={1000}
            sizes="(max-width: 1023px) 90vw, 42vw"
          />
          <Photo
            image={about.imageDetail}
            className="about-media__detail"
            width={520}
            sizes="(max-width: 1023px) 40vw, 18vw"
          />
          <Link to="/about" className="about-media__badge" aria-label="More about Horizon Financial Services">
            <ArrowUpRight size={22} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
