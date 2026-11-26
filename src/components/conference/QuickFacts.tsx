import { useId } from 'react'
import { conferenceDateRange } from '../../data/conferenceDates'
import { conferenceVenue } from '../../data/conferenceContacts'
import { conferenceOrganizer } from '../../data/conferencePartners'
import calendar from '../../assets/icons/about/calendar.svg'
import organizer from '../../assets/icons/about/organizer.svg'
import location from '../../assets/icons/about/venue-location.svg'
import attendance from '../../assets/icons/about/attendance.svg'
import './QuickFacts.css'

const icons = { calendar, organizer, 'venue-location': location, attendance }
type QuickFact = Readonly<{ id: 'calendar' | 'organizer' | 'venue-location' | 'attendance'; label: string; value: string; secondLine?: string }>

const quickFacts: readonly QuickFact[] = [
  { id: 'calendar', label: 'Conference Date', value: conferenceDateRange },
  { id: 'organizer', label: 'Organizer', value: `${conferenceOrganizer.name},`, secondLine: conferenceOrganizer.affiliation.replace(/, Egypt$/, '') },
  { id: 'venue-location', label: 'Venue Location', value: conferenceVenue },
  { id: 'attendance', label: 'Attendance Options', value: 'Hybrid · Remote · In person' },
]

export default function QuickFacts() {
  const titleId = useId()
  return (
    <aside className="quick-facts" aria-labelledby={titleId}>
      <header className="quick-facts__heading">
        <p className="quick-facts__eyebrow">Quick facts</p>
        <h2 id={titleId}>At a glance</h2>
      </header>
      <dl className="quick-facts__list">
        {quickFacts.map(({ id, label, value, secondLine }) => (
          <div className="quick-facts__row" key={id}>
            <span className="quick-facts__icon" aria-hidden="true"><img src={icons[id]} alt="" width={24} height={24} /></span>
            <div className="quick-facts__copy">
              <dt>{label}</dt>
              <dd>{value}{secondLine && <span className="quick-facts__value-line">{secondLine}</span>}</dd>
            </div>
          </div>
        ))}
      </dl>
    </aside>
  )
}

