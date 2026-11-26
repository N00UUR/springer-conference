import ConferenceCard from '../../../components/conference/ConferenceCard'
import SectionHeading from '../../../components/ui/SectionHeading'
import { conferenceTracks } from '../../../data/conferenceTracks'
import './TracksSection.css'
import ActionLink from '../../../components/ui/ActionLink'
import { scientificTracksLink } from '../../../data/conferenceLinks'

export default function TracksSection({ variant = 'home' }: Readonly<{ variant?: 'home' | 'about' }>) {
  const isAbout = variant === 'about'
  return (
    <section id="tracks" className={`tracks-section tracks-section--${variant}`} aria-labelledby="tracks-title">
      <div className="page-container">
        {isAbout && <p className="about-conference-eyebrow tracks-eyebrow">Research Areas</p>}
        <SectionHeading
          className="tracks-heading"
          titleId="tracks-title"
          title={isAbout ? "Eight Scientific Tracks" : "Explore Our Scientific Tracks"}
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
        <div className="tracks-details-link">
          <ActionLink label="View Scientific Tracks" href={scientificTracksLink} arrow />
        </div>
      </div>
    </section>
  )
}
