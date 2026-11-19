/* Minimal line-icon set — stroke based, inherits currentColor. */

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
}

export function ArrowRight({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} {...svgProps} {...rest}>
      <path d="M4 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </svg>
  )
}

export function ArrowLeft({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} {...svgProps} {...rest}>
      <path d="M20 12H5" />
      <path d="m10.5 6-6 6 6 6" />
    </svg>
  )
}

export function ArrowUpRight({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} {...svgProps} {...rest}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function Check({ size = 16, ...rest }) {
  return (
    <svg width={size} height={size} {...svgProps} {...rest}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  )
}

export function Quote({ size = 34, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 28" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d="M0 28V16.4C0 7.6 4.6 1.9 13.2 0l1.6 4.3c-4.9 1.6-7.4 4.6-7.6 8.4H15V28H0Zm24.4 0V16.4C24.4 7.6 29 1.9 37.6 0l1.6 4.3c-4.9 1.6-7.4 4.6-7.6 8.4h7.8V28h-15Z" />
    </svg>
  )
}

export function LinkedIn({ size = 16, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" />
    </svg>
  )
}

export function Phone({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} {...svgProps} {...rest}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2.5 2.5 0 0 1-2.7 2.5C10.8 19.4 4.6 13.2 4 5.7A2.5 2.5 0 0 1 6.5 3Z" />
    </svg>
  )
}

export function Mail({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} {...svgProps} {...rest}>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </svg>
  )
}

export function Pin({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} {...svgProps} {...rest}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function Clock({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} {...svgProps} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  )
}

export function Globe({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} {...svgProps} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.4 2.4 3.6 5.4 3.6 9s-1.2 6.6-3.6 9c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z" />
    </svg>
  )
}

export function Trend({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} {...svgProps} {...rest}>
      <path d="M3 17.5 9 11l4 4 8-9" />
      <path d="M15 6h6v6" />
    </svg>
  )
}
