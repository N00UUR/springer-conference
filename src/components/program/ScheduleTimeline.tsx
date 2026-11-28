import type { ScheduleSession, SessionType } from '../../data/conferenceSchedule'
import './ScheduleTimeline.css'

const labels: Record<SessionType, string> = { break: 'BREAK', keynote: 'KEYNOTE', paper: 'PAPER SESSION', panel: 'PANEL' }

function formatTime(value: string, includePeriod = true) {
  const [hours, minutes] = value.split(':').map(Number)
  const clock = `${String(hours % 12 || 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
  return includePeriod ? `${clock} ${hours >= 12 ? 'PM' : 'AM'}` : clock
}

function ScheduleCard({ session }: Readonly<{ session: ScheduleSession }>) {
  const { type, title, start, end, description } = session
  const samePeriod = (Number(start.split(':')[0]) < 12) === (Number(end.split(':')[0]) < 12)
  const titleClass = type === 'paper' && title.length > 48
    ? 'schedule-card__title schedule-card__title--long'
    : 'schedule-card__title'
  const badge = <span className={`schedule-badge schedule-badge--${type}`}>{labels[type]}</span>
  return (
    <article className={`schedule-card schedule-card--${type}`}>
      <header className="schedule-card__header">
        <div className={titleClass}>
          <h2>{title}</h2>
          {badge}
        </div>
        <p className="schedule-card__time"><time dateTime={start} aria-label={formatTime(start)}>{formatTime(start, !samePeriod)}</time><span aria-hidden="true">–</span><time dateTime={end}>{formatTime(end)}</time></p>
      </header>
      <p className="schedule-card__description">{description}</p>
    </article>
  )
}

export default function ScheduleTimeline({ sessions }: Readonly<{ sessions: readonly ScheduleSession[] }>) {
  return <ol className="schedule-timeline">{sessions.map(session => <li key={session.id} className="schedule-timeline__item"><ScheduleCard session={session} /></li>)}</ol>
}
