import Reveal from './Reveal.jsx'

/** Section eyebrow + heading + supporting text. */
export default function SectionHead({
  label,
  title,
  text,
  align = 'left',
  as: Heading = 'h2',
  className = '',
  id,
  children,
}) {
  return (
    <Reveal className={`section-head${align === 'center' ? ' section-head--center' : ''} ${className}`.trim()}>
      {label && (
        <p className={`eyebrow${align === 'center' ? ' eyebrow--center' : ''}`}>{label}</p>
      )}
      <Heading id={id} style={label ? { marginTop: '1.1rem' } : undefined}>
        {title}
      </Heading>
      {text && <p className="lead">{text}</p>}
      {children}
    </Reveal>
  )
}
