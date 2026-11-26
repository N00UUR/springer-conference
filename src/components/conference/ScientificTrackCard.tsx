import { CircleCheck } from 'lucide-react'
import type { ConferenceTrack } from '../../data/conferenceTracks'
import './ScientificTrackCard.css'

type ScientificTrackCardProps = Readonly<{
  track: ConferenceTrack
  index: number
}>

/** One design for every Scientific Track. The content is supplied via props. */
export default function ScientificTrackCard({ track, index }: ScientificTrackCardProps) {
  const titleId = `scientific-track-${track.id}`

  return (
    <article className={`scientific-track-card scientific-track-card--${track.id}`} aria-labelledby={titleId}>
      <div className="scientific-track-card__heading">
        <span className="scientific-track-card__number" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 id={titleId}>{track.title}</h2>
      </div>

      <ul className="scientific-track-card__topics">
        {track.topics.map((topic) => (
          <li key={topic}>
            <CircleCheck size={20} strokeWidth={1.75} aria-hidden="true" />
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
