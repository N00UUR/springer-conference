import SiteHeader from '../layout/SiteHeader'
import SectionHeading from '../ui/SectionHeading'
import calendar from '../../assets/icons/calendar.svg'
import location from '../../assets/icons/location.svg'
import { conferenceDateRange } from '../../data/conferenceDates'
import { conferenceVenue } from '../../data/conferenceContacts'
import './ProgramHeader.css'

type Props = Readonly<{ title: string; description: string; activeGroup?: 'Program' | 'Authors' }>

export default function ProgramHeader({ title, description, activeGroup = 'Program' }: Props) {
  return (
    <div className="program-header">
      <div className="page-container program-header__nav"><SiteHeader activeGroup={activeGroup} /></div>
      <div className="page-container program-header__intro">
        <SectionHeading level={1} titleId={activeGroup === 'Program' ? 'program-page-title' : 'authors-page-title'} title={title} description={description} />
        <ul className="program-header__facts" aria-label="Conference information">
          <li><img src={calendar} alt="" width={24} height={24} />{conferenceDateRange}</li>
          <li><img src={location} alt="" width={24} height={24} />{conferenceVenue}</li>
        </ul>
      </div>
    </div>
  )
}
