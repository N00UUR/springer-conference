import type { Committee } from '../../data/conferenceCommittees'
import SectionHeading from '../ui/SectionHeading'
import MemberCard from './MemberCard'
import './CommitteeSection.css'

export default function CommitteeSection({ committee }: Readonly<{ committee: Committee }>) {
  const titleId = `committee-${committee.id}`
  return (
    <section className={`committee-section committee-section--${committee.layout ?? 'grid'}`} aria-labelledby={titleId}>
      <SectionHeading className="committee-section__heading" titleId={titleId} title={committee.title} description={committee.description} />
      {committee.groups.map((group, index) => (
        <div key={group.id} className="committee-section__group">
          {group.title && (
            <h3 className="committee-section__group-title">
              <span>{String(index + 1).padStart(2, '0')}–</span> {group.title}
            </h3>
          )}
          <div className="committee-section__grid">
            {group.members.map(member => <MemberCard key={member.id} member={member} />)}
          </div>
        </div>
      ))}
    </section>
  )
}
