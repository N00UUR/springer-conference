import SiteHeader from '../../components/layout/SiteHeader'
import ScientificTrackCard from '../../components/conference/ScientificTrackCard'
import SectionHeading from '../../components/ui/SectionHeading'
import { conferenceTracks } from '../../data/conferenceTracks'
import './ScientificTracksPage.css'

export default function ScientificTracksPage() {
  return (
    <main className="scientific-tracks-page" lang="en" dir="ltr">
      <div className="page-container scientific-tracks-page__nav">
        <SiteHeader activeGroup="About" />
      </div>

      <div className="page-container">
        <SectionHeading
          level={1}
          className="scientific-tracks-page__intro"
          titleId="scientific-tracks-title"
          title="Eight Scientific Tracks"
          description="DICICDI 2027 welcomes original research across eight tracks in intelligent computing and digital innovation. Choose the track that best matches your work. Papers that span several areas are assigned to the track closest to their main contribution."
        />

        <section className="scientific-tracks-page__list" aria-labelledby="scientific-tracks-title">
          {conferenceTracks.map((track, index) => (
            <ScientificTrackCard key={track.id} track={track} index={index} />
          ))}
        </section>
      </div>
    </main>
  )
}
