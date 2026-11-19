import { photoSrcSet, photoUrl } from '../lib/images.js'

/**
 * Responsive image with intrinsic sizing hints so layout does not shift.
 * Below-the-fold images are lazy-loaded by default.
 */
export default function Photo({
  image,
  width = 1200,
  sizes = '100vw',
  className = '',
  priority = false,
  alt,
  style,
}) {
  if (!image) return null

  return (
    <img
      src={photoUrl(image.id, width)}
      srcSet={photoSrcSet(image.id)}
      sizes={sizes}
      alt={alt ?? image.alt ?? ''}
      className={className || undefined}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      {...(priority ? { fetchpriority: 'high' } : {})}
      decoding="async"
    />
  )
}
