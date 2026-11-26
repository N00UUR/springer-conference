import ProgramHeader from '../../components/program/ProgramHeader'
import AuthorMilestoneTimeline from '../../components/authors/AuthorMilestoneTimeline'
import RegistrationFeesTable from '../../components/conference/RegistrationFeesTable'
import FeeCard from '../../components/conference/FeeCard'
import CallToAction from '../../components/conference/CallToAction'
import SectionHeading from '../../components/ui/SectionHeading'
import ActionLink from '../../components/ui/ActionLink'
import { registrationFees, registrationMilestones } from '../../data/registrationFees'
import { payment } from '../../data/conferenceLinks'
import './RegistrationFeesPage.css'

export default function RegistrationFeesPage() {
  return (
    <main className="registration-page" lang="en" dir="ltr">
      <ProgramHeader
        activeGroup="Registration Fees"
        title="Registration Fees"
        description="Join researchers, academics, postgraduate students, and industry professionals at DICICDI 2027. Explore the registration and publication fees below."
      />
      <div className="page-container registration-page__content">
        <AuthorMilestoneTimeline title="Registration TimeLine" milestones={registrationMilestones} />
        <section className="registration-page__fees" aria-labelledby="registration-fees-title">
          <SectionHeading
            titleId="registration-fees-title"
            title="Registration Fees"
            description="Conference fees for Egyptian and international participants."
          />
          <RegistrationFeesTable labelledBy="registration-fees-title" />
          <ActionLink {...payment} arrow className="registration-page__pay" />
        </section>
        <section className="registration-page__understanding" aria-labelledby="registration-understanding-title">
          <h2 className="authors-section-title" id="registration-understanding-title">Understanding the Fees</h2>
          <div className="registration-page__cards">
            {registrationFees.map(fee => <FeeCard key={fee.id} fee={fee} />)}
          </div>
        </section>
      </div>
      <CallToAction
        className="registration-page__cta"
        title="Be Part of DICICDI 2027"
        description="Connect with researchers, exchange ideas, and contribute to the future of intelligent computing and digital innovation."
      >
        <ActionLink {...payment} arrow className="registration-page__pay" />
      </CallToAction>
    </main>
  )
}
