import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../content/site.js'
import Button from './Button.jsx'
import Logo from './Logo.jsx'

const isHashLink = (to) => to.includes('#')

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the panel on navigation.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  // Lock scrolling and hide the panel from assistive tech while closed.
  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    if (panelRef.current) panelRef.current.inert = !open
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header className={`site-header${scrolled || open ? ' is-scrolled' : ''}`}>
        <div className="container site-header__inner">
          <Logo />

          <nav className="site-nav" aria-label="Primary">
            <ul className="site-nav__list">
              {site.nav.map((item) =>
                isHashLink(item.to) ? (
                  <li key={item.to}>
                    <Link className="site-nav__link" to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink
                      className="site-nav__link"
                      to={item.to}
                      end={item.to === '/'}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <Button to="/contact" variant="outline-light" className="site-header__cta">
            Book a Consultation
          </Button>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {site.nav.map((item, index) => (
              <li
                key={item.to}
                className="mobile-menu__item"
                style={{ animationDelay: `${80 + index * 45}ms` }}
              >
                {isHashLink(item.to) ? (
                  <Link className="mobile-menu__link" to={item.to} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <NavLink
                    className="mobile-menu__link"
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <Button to="/contact" variant="light" onClick={() => setOpen(false)}>
            Book a Consultation
          </Button>
          <div className="mobile-menu__contact">
            <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </div>
        </div>
      </div>
    </>
  )
}
