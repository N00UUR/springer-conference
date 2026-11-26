import { useState, useRef, type KeyboardEvent } from 'react'
import ProgramLayout from '../../components/program/ProgramLayout'
import ScheduleTimeline from '../../components/program/ScheduleTimeline'
import { conferenceSchedule } from '../../data/conferenceSchedule'
import './SchedulePage.css'

function dayLabel(date: string, index: number) {
  const label = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
  return `Day ${index + 1}. ${label}`
}

export default function SchedulePage() {
  const [dayIndex, setDayIndex] = useState(0)
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const day = conferenceSchedule[dayIndex]
  function handleKey(event: KeyboardEvent<HTMLButtonElement>) {
    const count = conferenceSchedule.length
    const next = event.key === 'ArrowRight' ? (dayIndex + 1) % count : event.key === 'ArrowLeft' ? (dayIndex - 1 + count) % count : event.key === 'Home' ? 0 : event.key === 'End' ? count - 1 : null
    if (next === null) return
    event.preventDefault()
    setDayIndex(next)
    buttons.current[next]?.focus()
  }
  return (
    <ProgramLayout title="Conference Schedule" description="Our keynote speakers bring perspectives from academia and industry on the latest advances in intelligent computing and digital innovation.">
      <section className="page-container program-page__content schedule-page" aria-label="Conference agenda">
        <div role="tablist" aria-label="Conference days" className="schedule-days">
          {conferenceSchedule.map((item, index) => <button key={item.id} type="button" role="tab" id={`tab-${item.id}`} aria-selected={dayIndex === index} aria-controls="schedule-panel" tabIndex={dayIndex === index ? 0 : -1} ref={element => { buttons.current[index] = element }} onClick={() => setDayIndex(index)} onKeyDown={handleKey}>{dayLabel(item.date, index)}</button>)}
        </div>
        <div role="tabpanel" id="schedule-panel" aria-labelledby={`tab-${day.id}`} tabIndex={0}><ScheduleTimeline sessions={day.sessions} /></div>
      </section>
    </ProgramLayout>
  )
}
