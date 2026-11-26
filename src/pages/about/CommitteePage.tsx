import SiteHeader from '../../components/layout/SiteHeader'
import SectionHeading from '../../components/ui/SectionHeading'
import CommitteeSection from '../../components/conference/CommitteeSection'
import { conferenceCommittees } from '../../data/conferenceCommittees'
import './CommitteePage.css'

export default function CommitteePage() {
  return (
    <main className="committee-page" lang="en" dir="ltr">
      <div className="page-container committee-page__nav"><SiteHeader activeGroup="About" /></div>
      <div className="page-container">
        <SectionHeading level={1} className="committee-page__intro" titleId="committee-page-title" title="Conference Committee" description="DICICDI 2027 is run by six committees, appointed by the Faculty of Computers and Information, Damanhour University." />
        <div className="committee-page__sections">
          {conferenceCommittees.map(committee => <CommitteeSection key={committee.id} committee={committee} />)}
        </div>
      </div>
    </main>
  )
}
