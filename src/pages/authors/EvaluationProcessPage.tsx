import AuthorsLayout from '../../components/authors/AuthorsLayout'
import AuthorMilestoneTimeline from '../../components/authors/AuthorMilestoneTimeline'
import CallToAction from '../../components/conference/CallToAction'
import ActionLink from '../../components/ui/ActionLink'
import { afterAcceptance, doubleBlindCriteria, evaluationCtaDescription, evaluationDescription, evaluationMilestones, evaluationStages, reviewerCriteria } from '../../data/authorInformation'
import { scientificCommittee, submitPaper } from '../../data/conferenceLinks'
import checkIcon from '../../assets/icons/about/check-all.svg'
import noticeIcon from '../../assets/icons/publication/important-notice.svg'
import reviewersIcon from '../../assets/icons/authors/reviewer-hidden.svg'
import authorsIcon from '../../assets/icons/authors/author-hidden.svg'
import anonymizeIcon from '../../assets/icons/authors/anonymize-paper.svg'
import './EvaluationProcessPage.css'

const criteriaIcons = { reviewers: reviewersIcon, authors: authorsIcon, anonymize: anonymizeIcon }

export default function EvaluationProcessPage() {
  return (
    <AuthorsLayout title="Evaluation process" description={evaluationDescription}>
      <div className="page-container authors-page__content evaluation-page__content">
        <section aria-labelledby="evaluation-stages-title">
          <h2 className="authors-section-title" id="evaluation-stages-title">Evaluation Process</h2>
          <ol className="evaluation-page__grid evaluation-page__stages">
            {evaluationStages.map((stage, index) => <li key={stage.id}><span className="authors-page__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3>{stage.title}</h3><p>{stage.description}</p></li>)}
          </ol>
        </section>
        <section aria-labelledby="double-blind-title">
          <h2 className="authors-section-title" id="double-blind-title">double-blind review criteria</h2>
          <ul className="evaluation-page__grid evaluation-page__blind">
            {doubleBlindCriteria.map(item => <li key={item.id}><span className="evaluation-page__icon"><img src={criteriaIcons[item.id]} alt="" width={50} height={50} /></span><div className="evaluation-page__blind-copy"><h3>{item.title}</h3><p>{item.description}</p></div></li>)}
          </ul>
        </section>
        <section className="evaluation-page__reviewers" aria-labelledby="reviewers-title">
          <h2 className="authors-section-title" id="reviewers-title">What reviewers look at</h2>
          <div className="evaluation-page__reviewer-list">
            {[reviewerCriteria.slice(0, 4), reviewerCriteria.slice(4)].map((row, index) => (
              <ul key={index}>
                {row.map(criterion => <li key={criterion}><img src={checkIcon} alt="" width={24} height={24} />{criterion}</li>)}
              </ul>
            ))}
          </div>
        </section>
        <div className="evaluation-page__timeline">
          <AuthorMilestoneTimeline title="Evaluation timeline" milestones={evaluationMilestones} />
          <aside className="evaluation-page__notice" aria-labelledby="after-acceptance-title">
            <h3 id="after-acceptance-title"><img src={noticeIcon} alt="" width={24} height={24} />After acceptance</h3>
            <p>{afterAcceptance}</p>
          </aside>
        </div>
      </div>
      <CallToAction className="evaluation-page__cta" title="Ready to submit your research?" description={evaluationCtaDescription}>
        <div className="evaluation-page__actions">
          <ActionLink {...submitPaper} />
          <ActionLink label="View Scientific Committee" href={scientificCommittee.href} variant="text" arrow />
        </div>
      </CallToAction>
    </AuthorsLayout>
  )
}
