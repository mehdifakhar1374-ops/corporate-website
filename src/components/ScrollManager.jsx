import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Resets scroll on navigation and resolves in-page anchors once rendered. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return undefined
    }

    const id = decodeURIComponent(hash.slice(1))
    let frame = 0
    let cancelled = false

    const find = () => {
      if (cancelled) return
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      frame += 1
      if (frame < 40) requestAnimationFrame(find)
    }

    requestAnimationFrame(find)
    return () => {
      cancelled = true
    }
  }, [pathname, hash])

  return null
}
