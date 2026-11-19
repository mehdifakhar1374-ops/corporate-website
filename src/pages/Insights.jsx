import { useMemo, useState } from 'react'
import ArticleCard from '../components/ArticleCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { articles, categories } from '../content/articles.js'
import usePageMeta from '../lib/usePageMeta.js'

export default function Insights() {
  usePageMeta(
    'Insights & Resources — Horizon Financial Services',
    'Practical notes on accounting, cash flow, tax compliance, financial planning and reporting for business owners.',
  )

  const [category, setCategory] = useState('All')

  const visible = useMemo(
    () => (category === 'All' ? articles : articles.filter((article) => article.category === category)),
    [category],
  )

  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        title="Insights for Better Financial Decisions"
        text="Short, practical notes on the financial questions we are asked most often — written for owners and managers rather than specialists."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
        image={{ id: '7821708', alt: 'Financial documents reviewed at a desk' }}
      />

      <section className="section section--white" aria-label="Articles">
        <div className="container">
          <div className="section-topline" style={{ alignItems: 'center' }}>
            <div className="chips" role="group" aria-label="Filter articles by category">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="chip"
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="muted" aria-live="polite" style={{ fontSize: '0.85rem' }}>
              {visible.length} {visible.length === 1 ? 'article' : 'articles'}
              {category !== 'All' ? ` in ${category}` : ''}
            </p>
          </div>

          {visible.length === 0 ? (
            <p className="lead">No articles in this category yet — please check back soon.</p>
          ) : (
            <div className="article-grid">
              {visible.map((article, index) => (
                <Reveal key={article.slug} delay={index * 60}>
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section section--ivory" aria-label="Start a conversation">
        <div className="container">
          <CtaBand
            title="Have a Question We Have Not Covered?"
            text="Every business is different. If something here does not match your situation, a short conversation usually clarifies it."
          />
        </div>
      </section>
    </>
  )
}
