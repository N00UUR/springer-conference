import ConferenceCard from '../../../components/conference/ConferenceCard'
import SectionHeading from '../../../components/ui/SectionHeading'
import { conferenceTracks } from '../../../data/conferenceTracks'
import './TracksSection.css'

export default function TracksSection() {
  return (
    <section id="tracks" className="tracks-section" aria-labelledby="tracks-title">
      <div className="page-container">
        <SectionHeading
          className="tracks-heading"
          titleId="tracks-title"
          title="Explore Our Scientific Tracks"
          description="Presenting cutting-edge research across 8 specialized domains of intelligent computing."
        />

        <ol className="tracks-grid">
          {conferenceTracks.map(({ id, icon, title, detail }, index) => (
            <ConferenceCard
              key={id}
              variant="track"
              icon={icon}
              title={title}
              description={detail}
              label={`TRACK ${String(index + 1).padStart(2, '0')}`}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
