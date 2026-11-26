import ActionLink from '../../../components/ui/ActionLink'
import { programScheduleLink } from '../../../data/conferenceLinks'
import ConferenceCard from '../../../components/conference/ConferenceCard'
import SectionHeading from '../../../components/ui/SectionHeading'
import { programSessions } from '../../../data/programSessions'
import './ProgramSection.css'

export default function ProgramSection() {
  return (
    <section id="program" className="page-container program-section" aria-labelledby="program-title">
      <SectionHeading
        className="program-heading"
        titleId="program-title"
        title="Explore Conference Program"
        description="Everything happening at DICICDI 2027, from keynotes to student posters."
      />
      <ul className="program-grid">
        {programSessions.map(({ id, icon, title, detail }) => (
          <ConferenceCard
            key={id}
            variant="program"
            icon={icon}
            title={title}
            description={detail}
          />
        ))}
      </ul>
      <div className="program-schedule-link"><ActionLink label="View Conference Schedule" href={programScheduleLink} arrow /></div>
    </section>
  )
}
