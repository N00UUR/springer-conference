import AuthorsLayout from '../../components/authors/AuthorsLayout'
import AuthorMilestoneTimeline from '../../components/authors/AuthorMilestoneTimeline'
import ActionLink from '../../components/ui/ActionLink'
import { paperRequirements, submissionDescription, submissionMilestones, submissionSteps } from '../../data/authorInformation'
import { submitPaper } from '../../data/conferenceLinks'
import checkIcon from '../../assets/icons/authors/paper-check.svg'
import './SubmissionGuidelinesPage.css'

export default function SubmissionGuidelinesPage() {
  return (
    <AuthorsLayout title="Submission Guidelines" description={submissionDescription}>
      <div className="page-container authors-page__content">
        <AuthorMilestoneTimeline title="TimeLines and Milestones" milestones={submissionMilestones} />
        <section aria-labelledby="paper-guidelines-title">
          <h2 className="authors-section-title" id="paper-guidelines-title">Paper Guidelines</h2>
          <p className="authors-section-intro">Follow these requirements before you submit.</p>
          <ul className="submission-guidelines__requirements">
            {paperRequirements.map(requirement => <li key={requirement}><img src={checkIcon} alt="" width={24} height={24} /><span>{requirement}</span></li>)}
          </ul>
          <ActionLink {...submitPaper} arrow className="submission-guidelines__submit" />
        </section>
        <section aria-labelledby="submission-steps-title">
          <h2 className="authors-section-title" id="submission-steps-title">Submission steps</h2>
          <p className="authors-section-intro">Here is what to expect, from submitting your paper to presenting it at the conference</p>
          <ol className="submission-guidelines__steps">
            {submissionSteps.map((step, index) => <li key={step.id}><span className="authors-page__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}–</span><span>{step.text}{step.emphasis && <strong>{step.emphasis}</strong>}{step.suffix}</span></li>)}
          </ol>
        </section>
      </div>
    </AuthorsLayout>
  )
}
