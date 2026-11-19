import { hero } from '../../content/site.js'
import Button from '../Button.jsx'
import Photo from '../Photo.jsx'
import { ArrowRight } from '../Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <Photo image={hero.image} width={1800} sizes="100vw" priority />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>

        <h1 className="hero__title" id="hero-title">
          {hero.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <p className="hero__text">{hero.text}</p>

        <div className="hero__actions">
          <Button to={hero.primary.to} variant="light" icon={<ArrowRight size={16} />}>
            {hero.primary.label}
          </Button>
          <Button to={hero.secondary.to} variant="outline-light">
            {hero.secondary.label}
          </Button>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="رفتن به بخش درباره ما">
        ادامه
        <span aria-hidden="true" />
      </a>
    </section>
  )
}
