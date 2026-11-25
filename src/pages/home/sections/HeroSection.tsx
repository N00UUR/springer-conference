import { conferenceDates, formatConferenceDate } from '../../../data/conferenceDates'
import { conferenceVenue } from '../../../data/conferenceContacts'
import calendarIcon from '../../../assets/icons/calendar.svg'
import locationIcon from '../../../assets/icons/location.svg'
import clockIcon from '../../../assets/icons/deadline-clock.svg'
import PaperActions from '../../../components/conference/PaperActions'
import './HeroSection.css'

const countdown = [
  { label: 'Days', value: '72' },
  { label: 'Hours', value: '12' },
  { label: 'Mins', value: '03' },
  { label: 'Secs', value: '36' },
]

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <h1 className="hero-title" id="hero-title">
          First Damanhour International Conference on Intelligent Computing
          and Digital Innovation
        </h1>

        <p className="hero-description">
          {`Join researchers, students, and industry experts at Damanhour University on ${formatConferenceDate(conferenceDates.conferenceDay)} to share original research across eight computing tracks.`}
        </p>
      </div>

      <div className="hero-badges">
        <span className="hero-badge">
          <img src={calendarIcon} alt="" />
          <time dateTime={conferenceDates.conferenceDay}>{formatConferenceDate(conferenceDates.conferenceDay)}</time>
        </span>

        <span className="hero-badge" id="venue-location">
          <img src={locationIcon} alt="" />
          {conferenceVenue}
        </span>
      </div>

      <PaperActions />

      <div className="hero-countdown">
        <p className="hero-deadline">
          <img src={clockIcon} alt="" />
          Submission deadline: {formatConferenceDate(conferenceDates.submissionDeadline)}
        </p>

        <dl className="hero-countdown-grid">
          {countdown.map(({ label, value }) => (
            <div key={label} className="hero-countdown-cell">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}