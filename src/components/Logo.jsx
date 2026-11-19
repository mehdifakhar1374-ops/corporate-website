import { Link } from 'react-router-dom'

/** Brand lock-up: two overlapping towers with a champagne rule. */
export default function Logo({ to = '/', label = 'Horizon Financial Services — home' }) {
  return (
    <Link to={to} className="brand" aria-label={label}>
      <svg className="brand__mark" viewBox="0 0 34 34" aria-hidden="true" focusable="false">
        <rect x="2.5" y="9.5" width="13" height="21" fill="none" stroke="#C5A059" strokeWidth="1.3" />
        <rect x="13.5" y="3.5" width="13" height="27" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M13.5 22.5h13" stroke="#C5A059" strokeWidth="1.3" />
      </svg>
      <span className="brand__text">
        <span className="brand__name">Horizon</span>
        <span className="brand__sub">Financial Services</span>
      </span>
    </Link>
  )
}
