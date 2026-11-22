import submissionPhoto from '../../../assets/images/submission-deadline.png'
import './ImportantDatesSection.css'

const milestones = [
  {
    title: 'Submission Opens',
    date: '1 Dec 2026',
    iso: '2026-12-01',
    note: 'Portal live for submissions',
  },
  {
    title: 'Submission Deadline',
    date: '31 Jan 2027',
    iso: '2027-01-31',
    note: 'Strict deadline for full papers',
    photo: submissionPhoto,
  },
  {
    title: 'Notifications Of Decisions',
    date: '10 Mar 2027',
    iso: '2027-03-10',
    note: 'Peer review outcomes sent',
  },
  {
    title: 'Camera Ready & Reg.',
    date: '30 Mar 2027',
    iso: '2027-03-30',
    note: 'First revision and payment',
  },
  {
    title: 'Conference Day',
    date: '14 Apr 2027',
    iso: '2027-04-14',
    note: 'Inaugurations and sessions',
  },
]

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
          Please ensure all submission materials adhere to the deadlines.
        </p>

        <ol className="dates-timeline">
          {milestones.map(({ title, date, iso, note, photo }, index) => (
            <li key={iso}>
              <span>Phase {String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <time dateTime={iso}>{date}</time>
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