import submissionPhoto from '../assets/images/submission-deadline.png'
import { conferenceDates } from './conferenceDates'

export const milestones = [
  {
    title: 'Submission Opens',
    iso: conferenceDates.submissionsOpen,
    note: 'Portal live for submissions',
  },
  {
    title: 'Submission Deadline',
    iso: conferenceDates.submissionDeadline,
    note: 'Strict deadline for full papers',
    photo: submissionPhoto,
  },
  {
    title: 'Notifications Of Decisions',
    iso: conferenceDates.decisionNotification,
    note: 'Peer review outcomes sent',
  },
  {
    title: 'Camera Ready & Reg.',
    iso: conferenceDates.authorRegistrationDeadline,
    note: 'First revision and payment',
  },
  {
    title: 'Conference Day',
    iso: conferenceDates.conferenceDay,
    note: 'Inaugurations and sessions',
  },
]
