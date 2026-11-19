import { Link } from 'react-router-dom'

/**
 * Renders as a router link (`to`), an anchor (`href`) or a button,
 * sharing one visual contract.
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  icon = null,
  className = '',
  children,
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {icon}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {icon}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  )
}
