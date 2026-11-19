/** Photography helper — Pexels CDN with responsive widths. */

const BASE = 'https://images.pexels.com/photos'

export function photoUrl(id, width = 1200) {
  return `${BASE}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`
}

export function photoSrcSet(id, widths = [640, 960, 1280, 1600]) {
  return widths.map((width) => `${photoUrl(id, width)} ${width}w`).join(', ')
}

/** Converts Latin digits to Persian digits for display. */
export function faDigits(value) {
  return String(value).replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)])
}

/** Formats an ISO date for display in the Persian calendar, e.g. "۶ آبان ۱۴۰۵". */
export function formatDate(iso) {
  return new Intl.DateTimeFormat('fa-IR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}
