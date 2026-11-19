import { useMemo, useState } from 'react'
import ArticleCard from '../components/ArticleCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { articles, categories } from '../content/articles.js'
import usePageMeta from '../lib/usePageMeta.js'
import { faDigits } from '../lib/images.js'

export default function Insights() {
  usePageMeta(
    'بینش‌ها و منابع — خدمات مالی افق',
    'یادداشت‌های کاربردی درباره حسابداری، جریان نقدی، انطباق مالیاتی، برنامه‌ریزی مالی و گزارشگری برای صاحبان کسب‌وکار.',
  )

  const [category, setCategory] = useState('همه')

  const visible = useMemo(
    () => (category === 'همه' ? articles : articles.filter((article) => article.category === category)),
    [category],
  )

  return (
    <>
      <PageHero
        eyebrow="بینش‌ها و منابع"
        title="بینش برای تصمیم‌های مالی بهتر"
        text="یادداشت‌های کوتاه و کاربردی درباره پرسش‌های مالی که بیشتر از ما پرسیده می‌شود — نوشته‌شده برای صاحبان و مدیران کسب‌وکار، نه فقط متخصصان."
        breadcrumb={[{ label: 'خانه', to: '/' }, { label: 'بینش‌ها' }]}
        image={{ id: '7821708', alt: 'اسناد مالی در حال بررسی روی میز کار' }}
      />

      <section className="section section--white" aria-label="مقالات">
        <div className="container">
          <div className="section-topline" style={{ alignItems: 'center' }}>
            <div className="chips" role="group" aria-label="فیلتر مقالات بر اساس دسته">
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
              {faDigits(visible.length)} مقاله
              {category !== 'همه' ? ` در ${category}` : ''}
            </p>
          </div>

          {visible.length === 0 ? (
            <p className="lead">هنوز مقاله‌ای در این دسته نیست — به‌زودی دوباره سر بزنید.</p>
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

      <section className="section section--ivory" aria-label="شروع گفت‌وگو">
        <div className="container">
          <CtaBand
            title="پرسشی دارید که به آن نپرداخته‌ایم؟"
            text="هر کسب‌وکاری متفاوت است. اگر چیزی در اینجا با وضعیت شما هم‌خوان نیست، یک گفت‌وگوی کوتاه معمولاً آن را روشن می‌کند."
          />
        </div>
      </section>
    </>
  )
}
