import { formatConferenceDate } from '../../../data/conferenceDates'
import { milestones } from '../../../data/conferenceMilestones'
import './ImportantDatesSection.css'

export default function ImportantDatesSection() {
  return (
    <section
      id="important-dates"
      className="important-dates"
      aria-labelledby="dates-title"
    >
      <div className="page-container">
        <h2 id="dates-title">Important Dates And Milestones</h2>

        <p className="dates-intro">
          Key procedural milestones for authors, reviewers, and attending delegates.
          <br />
          Please ensure all submission materials adhere to the deadlines.
        </p>

        <ol className="dates-timeline">
          {milestones.map(({ title, iso, note, photo }, index) => (
            <li key={iso}>
              <span>Phase {String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <time dateTime={iso}>{formatConferenceDate(iso, 'short')}</time>
              <p>{note}</p>

              {photo && (
                <img
                  src={photo}
                  width="567"
                  height="350"
                  alt=""
                  loading="lazy"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
