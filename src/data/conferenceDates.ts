export const conferenceDates = {
  submissionsOpen: '2026-12-01',
  submissionDeadline: '2027-01-31',
  decisionNotification: '2027-03-10',
  authorRegistrationDeadline: '2027-03-30',
  conferenceDay: '2027-04-14',
  conferenceEndDay: '2027-04-15',
} as const

export function formatConferenceDate(isoDate: string, month: 'short' | 'long' = 'long') {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month,
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(isoDate + 'T00:00:00Z'))
}

export const conferenceDateRange = conferenceDates.conferenceDay.slice(0, 7) === conferenceDates.conferenceEndDay.slice(0, 7)
  ? `${Number(conferenceDates.conferenceDay.slice(-2))}-${formatConferenceDate(conferenceDates.conferenceEndDay)}`
  : `${formatConferenceDate(conferenceDates.conferenceDay)} – ${formatConferenceDate(conferenceDates.conferenceEndDay)}`
