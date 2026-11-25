import { useId, type ReactNode } from 'react'
import './CallToAction.css'

type CallToActionProps = {
  title: string
  description: string
  children: ReactNode
}

export default function CallToAction({ title, description, children }: CallToActionProps) {
  const titleId = useId()

  return (
    <section className="conference-cta" aria-labelledby={titleId}>
      <div className="conference-cta__content">
        <h2 id={titleId}>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
    </section>
  )
}
