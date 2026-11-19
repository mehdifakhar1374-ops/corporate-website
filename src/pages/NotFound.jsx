import Button from '../components/Button.jsx'
import usePageMeta from '../lib/usePageMeta.js'

export default function NotFound() {
  usePageMeta('Page not found — Horizon Financial Services')

  return (
    <section className="notfound">
      <div className="container">
        <p className="notfound__code">404</p>
        <h1 style={{ marginTop: '1.25rem' }}>Page Not Found</h1>
        <p>
          The page you are looking for does not exist or has been moved. You can return to the
          homepage or get in touch with our team.
        </p>
        <div className="notfound__actions">
          <Button to="/" variant="primary">
            Back to Home
          </Button>
          <Button to="/contact" variant="outline-dark">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
