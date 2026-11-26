import { useState } from 'react'
import { UserRound } from 'lucide-react'
import type { CommitteeMember } from '../../data/conferenceCommittees'
import ActionLink from '../ui/ActionLink'
import './MemberCard.css'

export default function MemberCard({ member }: Readonly<{ member: CommitteeMember }>) {
  const [failedImage, setFailedImage] = useState<string>()
  const showImage = member.imageUrl && failedImage !== member.imageUrl
  return (
    <article className="member-card">
      <div className="member-card__identity">
        {showImage ? (
          <img className="member-card__avatar" src={member.imageUrl} alt="" width={74} height={74} loading="lazy" onError={() => setFailedImage(member.imageUrl)} />
        ) : (
          <span className="member-card__avatar member-card__placeholder" aria-hidden="true"><UserRound size={32} /></span>
        )}
        <div className="member-card__details">
          <p className="member-card__name">{member.name}</p>
          <p className="member-card__affiliation">{member.affiliation}</p>
        </div>
      </div>
      <p className="member-card__bio">{member.biography}</p>
      <ActionLink label="View LinkedIn Profile" href={member.linkedinUrl} variant="outline" arrow className="member-card__link" />
    </article>
  )
}
