/** Photography helper — Pexels CDN with responsive widths. */

const BASE = 'https://images.pexels.com/photos'

export function photoUrl(id, width = 1200) {
  return `${BASE}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`
}

export function photoSrcSet(id, widths = [640, 960, 1280, 1600]) {
  return widths.map((width) => `${photoUrl(id, width)} ${width}w`).join(', ')
}

/** Formats an ISO date for display, e.g. "28 October 2026". */
export function formatDate(iso) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}
