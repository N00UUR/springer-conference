import ActionLink from '../../../components/ui/ActionLink'
import { scientificCommittee } from '../../../data/conferenceLinks'
import noteIcon from '../../../assets/icons/publication/note-edit.svg'
import noticeIcon from '../../../assets/icons/publication/important-notice.svg'
import './PublicationSection.css'

export default function PublicationSection() {
  return (
    <section
      id="publication"
      className="publication-section"
      aria-labelledby="publication-title"
    >
      <div className="page-container">
        <p className="publication-label">
          <img src={noteIcon} width={24} height={24} alt="" />
          Publication Opportunity
        </p>

        <h2 id="publication-title">From Presentation To Publication</h2>

        <article className="publication-journal">
          <h3>Menoufia Journal of Electronic Engineering Research (MJEER)</h3>
          <p>
            Selected conference papers may be considered for publication in the
            proposed Menoufia Journal{' '}
            <span>
              of Electronic Engineering Research (MJEER), subject to the
              journal’s editorial policies and review requirements.
            </span>
          </p>
        </article>

        <aside
          className="publication-notice"
          aria-labelledby="publication-notice-title"
        >
          <h3 id="publication-notice-title">
            <img src={noticeIcon} width={24} height={24} alt="" />
            Important Notice
          </h3>
          <p>
            Acceptance to the conference does not guarantee journal publication.
            Publication decisions remain with the journal.
          </p>
        </aside>

        <ActionLink
          label={`View ${scientificCommittee.label}`}
          href={scientificCommittee.href}
          className="publication-committee"
          arrow
          arrowClassName="about-arrow"
        />
      </div>
    </section>
  )
}