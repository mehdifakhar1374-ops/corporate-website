import { Link } from 'react-router-dom'
import { photoUrl } from '../lib/images.js'

export default function PageHero({ eyebrow, title, text, image, breadcrumb, meta, children }) {
  const style = image ? { '--hero-image': `url(${photoUrl(image.id, 1600)})` } : undefined

  return (
    <header className={`page-hero${image ? ' page-hero--image' : ''}`} style={style}>
      <div className="container">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="breadcrumb" aria-label="مسیر صفحه">
            {breadcrumb.map((item, index) => (
              <span key={`${item.label}-${index}`}>
                {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
                {index < breadcrumb.length - 1 && <span aria-hidden="true"> / </span>}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="page-hero__text">{text}</p>}
        {meta && <div className="page-hero__meta">{meta}</div>}
        {children}
      </div>
    </header>
  )
}
