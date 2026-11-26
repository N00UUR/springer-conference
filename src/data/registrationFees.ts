import { conferenceDates as dates } from './conferenceDates'
import type { AuthorMilestone } from './authorInformation'

export type RegistrationFee = {
  id: string
  name: string
  description: string
  amounts: { EGP: number; USD: number }
  detail: string
  appliesTo: string
}

export const registrationFees: RegistrationFee[] = [
  {
    id: 'publication',
    name: 'Publication Fee',
    description: 'Includes presentation slot, proceedings processing, conference materials, and lunch/coffee catering.',
    amounts: { EGP: 3000, USD: 100 },
    detail: 'Fee associated with the publication arrangements for conference papers.',
    appliesTo: 'Applies per accepted paper',
  },
  {
    id: 'participation',
    name: 'Participation Fee',
    description: 'Full attendance access to all keynote sessions, workshops, networking sessions, and certificate of attendance.',
    amounts: { EGP: 2000, USD: 100 },
    detail: 'Fee for participating in DICICDI 2027 conference activities.',
    appliesTo: 'Applies per attendee',
  },
]

export const registrationMilestones: readonly AuthorMilestone[] = [
  { id: 'registration', start: dates.authorRegistrationDeadline, label: 'Camera Ready &\nRegistration' },
  { id: 'announcement', start: dates.programAnnouncement, month: 'long', label: 'Conference Program\nAnnouncement' },
  { id: 'conference', start: dates.conferenceDay, month: 'long', label: 'Conference\nDate' },
]

export const formatRegistrationAmount = (amount: number, currency: 'EGP' | 'USD') =>
  `${new Intl.NumberFormat('en-GB').format(amount)} ${currency}`
