import { Link, useParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import PageHero from '../components/PageHero.jsx'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArrowLeft } from '../components/Icons.jsx'
import { articles, getArticle } from '../content/articles.js'
import { formatDate } from '../lib/images.js'
import usePageMeta from '../lib/usePageMeta.js'
import NotFound from './NotFound.jsx'

export default function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)

  usePageMeta(
    article ? `${article.title} — خدمات مالی افق` : 'مقاله یافت نشد',
    article?.excerpt,
  )

  if (!article) return <NotFound />

  const related = articles
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
    .slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        breadcrumb={[
          { label: 'خانه', to: '/' },
          { label: 'بینش‌ها', to: '/insights' },
          { label: article.category },
        ]}
        meta={
          <>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{article.author}</span>
          </>
        }
      />

      <figure className="article-figure">
        <Photo
          image={article.image}
          width={1600}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
      </figure>

      <article className="article-body prose">
        {article.blocks.map((block, index) => {
          if (block.type === 'h2') return <h2 key={index}>{block.text}</h2>
          if (block.type === 'list') {
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          }
          if (block.type === 'quote') return <blockquote key={index}>{block.text}</blockquote>
          return <p key={index}>{block.text}</p>
        })}
      </article>

      <div className="container">
        <div className="article-footer">
          <p className="article-author">
            <strong>{article.author}</strong>
            خدمات مالی افق
          </p>
          <Link className="link-arrow" to="/insights">
            <ArrowLeft size={16} />
            همه مقالات
          </Link>
        </div>
      </div>

      <section className="section section--ivory" aria-labelledby="related-articles-title">
        <div className="container">
          <h2 id="related-articles-title" style={{ marginBottom: 'clamp(2rem, 3vw, 2.75rem)' }}>
            مطالب مرتبط
          </h2>
          <div className="article-grid">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60}>
                <ArticleCard article={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" aria-label="شروع گفت‌وگو">
        <div className="container">
          <CtaBand />
        </div>
      </section>
    </>
  )
}
