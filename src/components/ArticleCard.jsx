import { Link } from 'react-router-dom'
import { formatDate } from '../lib/images.js'
import { ArrowRight } from './Icons.jsx'
import Photo from './Photo.jsx'

export default function ArticleCard({ article, featured = false }) {
  return (
    <Link
      to={`/insights/${article.slug}`}
      className={`article-card${featured ? ' article-card--featured' : ''}`}
    >
      <div className="card-media article-card__media">
        <Photo
          image={article.image}
          width={featured ? 1100 : 720}
          sizes={featured ? '(max-width: 1023px) 100vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw'}
        />
      </div>
      <div className="article-card__body">
        <div className="article-card__meta">
          <span className="article-card__category">{article.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__excerpt">{article.excerpt}</p>
        <span className="article-card__more link-arrow">
          Read More
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}
