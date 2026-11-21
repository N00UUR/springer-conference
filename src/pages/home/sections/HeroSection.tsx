import calendarIcon from '../../../assets/icons/calendar.svg'
import locationIcon from '../../../assets/icons/location.svg'
import clockIcon from '../../../assets/icons/deadline-clock.svg'
import guidelinesArrow from '../../../assets/icons/guidelines-arrow-right.svg'
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
          Join researchers, students, and industry experts at Damanhour
          University on 14 April 2027 to share original research across
          eight computing tracks.
        </p>
      </div>

      <div className="hero-badges">
        <span className="hero-badge">
          <img src={calendarIcon} alt="" />
          <time dateTime="2027-04-14">14 April 2027</time>
        </span>

        <span className="hero-badge">
          <img src={locationIcon} alt="" />
          Damanhour University, Egypt
        </span>
      </div>

      <div className="hero-actions">
        <button className="hero-submit" type="button" disabled>
          Submit Paper
        </button>

        <span className="hero-guidelines">
          Paper Guidelines
          <img src={guidelinesArrow} alt="" width={16} height={16} />
        </span>
      </div>

      <div className="hero-countdown">
        <p className="hero-deadline">
          <img src={clockIcon} alt="" />
          Submission deadline: 31 January 2027
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