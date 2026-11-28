import { CloudUpload } from 'lucide-react'
import ProgramHeader from '../../components/program/ProgramHeader'
import PaperRequirements from '../../components/authors/PaperRequirements'
import ActionLink from '../../components/ui/ActionLink'
import SectionHeading from '../../components/ui/SectionHeading'
import { cmtSubmission } from '../../data/conferenceLinks'
import { conferenceDates, formatConferenceDate } from '../../data/conferenceDates'
import './SubmitPaperPage.css'

// Optional Figma artwork: the fallback keeps the build working before export.
const uploadArtwork = import.meta.glob<string>('../../assets/icons/authors/upload-paper.svg', {
  eager: true, query: '?url', import: 'default',
})['../../assets/icons/authors/upload-paper.svg']

export default function SubmitPaperPage() {
  return (
    <main className="submit-paper-page" lang="en" dir="ltr">
      <ProgramHeader activeGroup={null} title="Submit Your Paper" description={`Ready to submit? Make sure your paper is original, anonymized, and matches one of our eight tracks, then submit before ${formatConferenceDate(conferenceDates.submissionDeadline)}.`} />
      <section className="page-container submit-paper-page__upload" aria-labelledby="submit-upload-title">
        <div className="submit-paper-page__panel">
          <svg className="submit-paper-page__border" aria-hidden="true" focusable="false">
            <rect x="1" y="1" rx="7" />
          </svg>
          <div className="submit-paper-page__panel-content">
            <div className="submit-paper-page__panel-intro">
              <span className="submit-paper-page__icon">{uploadArtwork ? <img src={uploadArtwork} alt="" width={48} height={48} /> : <CloudUpload size={48} strokeWidth={1.5} aria-hidden="true" />}</span>
              <h2 id="submit-upload-title">Upload research paper</h2>
              <p>Please follow the submission guidelines. Further instructions will be provided soon.</p>
            </div>
            <ActionLink {...cmtSubmission} arrow className="submit-paper-page__cmt" />
          </div>
        </div>
      </section>
      <section className="submit-paper-page__guidelines" aria-labelledby="submit-guidelines-title">
        <div className="page-container submit-paper-page__guidelines-inner">
          <SectionHeading titleId="submit-guidelines-title" title="Paper Guidelines" description="Follow these requirements before you submit." />
          <PaperRequirements />
          <ActionLink {...cmtSubmission} label="Submit Paper" arrow className="submit-paper-page__submit" />
        </div>
      </section>
    </main>
  )
}
