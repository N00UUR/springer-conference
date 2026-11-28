import SiteHeader from '../layout/SiteHeader'
import SectionHeading from '../ui/SectionHeading'
import calendar from '../../assets/icons/calendar.svg'
import location from '../../assets/icons/location.svg'
import { conferenceDateRange } from '../../data/conferenceDates'
import { conferenceVenue } from '../../data/conferenceContacts'
import './ProgramHeader.css'

type Props = Readonly<{ title: string; description: string; activeGroup?: 'Program' | 'Authors' | 'Registration Fees' | null; showFacts?: boolean }>

export default function ProgramHeader({ title, description, activeGroup = 'Program', showFacts = true }: Props) {
  return (
    <div className={`program-header${showFacts ? '' : ' program-header--no-facts'}`}>
      <div className="page-container program-header__nav"><SiteHeader activeGroup={activeGroup ?? undefined} /></div>
      <div className="page-container program-header__intro">
        <SectionHeading level={1} titleId={activeGroup === 'Program' ? 'program-page-title' : activeGroup === 'Authors' ? 'authors-page-title' : activeGroup === 'Registration Fees' ? 'registration-page-title' : 'page-title'} title={title} description={description} />
        {showFacts && <ul className="program-header__facts" aria-label="Conference information">
          <li><img src={calendar} alt="" width={24} height={24} />{conferenceDateRange}</li>
          <li><img src={location} alt="" width={24} height={24} />{conferenceVenue}</li>
        </ul>}
      </div>
    </div>
  )
}
