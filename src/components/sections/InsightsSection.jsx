import { Link } from 'react-router-dom'
import { articles } from '../../content/articles.js'
import ArticleCard from '../ArticleCard.jsx'
import Reveal from '../Reveal.jsx'
import SectionHead from '../SectionHead.jsx'
import { ArrowRight } from '../Icons.jsx'

export default function InsightsSection() {
  return (
    <section className="section section--white" id="insights" aria-labelledby="insights-title">
      <div className="container">
        <div className="section-topline">
          <SectionHead
            id="insights-title"
            label="Insights & Resources"
            title="Insights for Better Financial Decisions"
            text="Practical notes on accounting, cash flow, compliance and reporting — written for business owners rather than specialists."
          />
          <Link className="link-arrow" to="/insights">
            All Insights
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="article-grid">
          {articles.slice(0, 3).map((article, index) => (
            <Reveal key={article.slug} delay={index * 70}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
