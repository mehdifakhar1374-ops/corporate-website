import Button from '../components/Button.jsx'
import usePageMeta from '../lib/usePageMeta.js'

export default function NotFound() {
  usePageMeta('صفحه یافت نشد — خدمات مالی افق')

  return (
    <section className="notfound">
      <div className="container">
        <p className="notfound__code">۴۰۴</p>
        <h1 style={{ marginTop: '1.25rem' }}>صفحه پیدا نشد</h1>
        <p>
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابه‌جا شده است. می‌توانید به صفحه اصلی بازگردید یا
          با تیم ما تماس بگیرید.
        </p>
        <div className="notfound__actions">
          <Button to="/" variant="primary">
            بازگشت به خانه
          </Button>
          <Button to="/contact" variant="outline-dark">
            تماس با ما
          </Button>
        </div>
      </div>
    </section>
  )
}
