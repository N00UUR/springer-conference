import { useId } from 'react'
import { formatMilestoneDate, type AuthorMilestone } from '../../data/authorInformation'
import './AuthorMilestoneTimeline.css'

export default function AuthorMilestoneTimeline({ title, milestones }: Readonly<{ title: string; milestones: readonly AuthorMilestone[] }>) {
  const titleId = useId()
  return (
    <section className="author-milestones" aria-labelledby={titleId}>
      <h2 id={titleId} className="authors-section-title">{title}</h2>
      <ol className="author-milestones__list">
        {milestones.map((item, index) => (
          <li key={item.id} className={`author-milestones__item${index % 2 === 0 ? ' author-milestones__item--highlighted' : ''}`}>
            <div className="author-milestones__date"><time dateTime={item.start}>{formatMilestoneDate(item)}</time></div>
            <span className="author-milestones__point" aria-hidden="true" />
            <span className="author-milestones__stem" aria-hidden="true" />
            <span className="author-milestones__label">{item.label}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
