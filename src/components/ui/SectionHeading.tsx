import './SectionHeading.css'

type SectionHeadingProps = Readonly<{
  className?: string
  titleId: string
  title: string
  description: string
}>

export default function SectionHeading({ className, titleId, title, description }: SectionHeadingProps) {
  return (
    <header className={className ? `section-heading ${className}` : 'section-heading'}>
      <h2 id={titleId}>{title}</h2>
      <p>{description}</p>
    </header>
  )
}
