import './SectionHeading.css'

type SectionHeadingProps = Readonly<{
  className?: string
  titleId: string
  title: string
  description: string
  level?: 1 | 2
}>

export default function SectionHeading({
  className,
  titleId,
  title,
  description,
  level = 2,
}: SectionHeadingProps) {
  const Heading = level === 1 ? 'h1' : 'h2'

  return (
    <header className={className ? `section-heading ${className}` : 'section-heading'}>
      <Heading id={titleId}>{title}</Heading>
      <p>{description}</p>
    </header>
  )
}
