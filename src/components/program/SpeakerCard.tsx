import { UserRound } from 'lucide-react'
import type { KeynoteSpeaker } from '../../data/keynoteSpeakers'
import ActionLink from '../ui/ActionLink'
import './SpeakerCard.css'

export default function SpeakerCard({ speaker, index, preview = false }: Readonly<{ speaker: KeynoteSpeaker; index: number; preview?: boolean }>) {
  return (
    <article className="speaker-card">
      {speaker.imageUrl ? <img className="speaker-card__photo" src={speaker.imageUrl} alt={preview ? 'Sample speaker portrait' : speaker.name} width={322} height={298} loading="lazy" /> : <div className="speaker-card__photo speaker-card__placeholder"><UserRound aria-hidden="true" size={64} /></div>}
      <div className="speaker-card__copy">
        <header className="speaker-card__identity">
          <div className="speaker-card__label"><span>{String(index + 1).padStart(2, '0')}–</span> KEYNOTE SPEAKER</div>
          <h2>{speaker.name}</h2>
          <p className="speaker-card__role">{speaker.role}</p>
          <p className="speaker-card__affiliation">{speaker.affiliation}</p>
        </header>
        {speaker.bio.map((paragraph, i) => <p className="speaker-card__bio" key={i}>{paragraph}</p>)}
        {(speaker.linkedinUrl || preview) && <ActionLink label="View LinkedIn Profile" href={speaker.linkedinUrl} variant="outline" arrow className="speaker-card__link" />}
      </div>
    </article>
  )
}
