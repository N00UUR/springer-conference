import { conferenceDates as dates, conferenceDateRange, formatConferenceDate } from './conferenceDates'

export type AuthorMilestone = Readonly<{
  id: string
  start: string
  end?: string
  label: string
}>

const decision = { id: 'decision', start: dates.decisionNotification, label: 'Decisions\nAnnounced' }
const revision = { id: 'revision', start: dates.revisedPaperDeadline, label: 'Revised Paper\nDeadline' }
const cameraReady = { id: 'camera-ready', start: dates.authorRegistrationDeadline, label: 'Camera Ready &\nRegistration' }

export const submissionMilestones: readonly AuthorMilestone[] = [
  { id: 'submission', start: dates.submissionDeadline, label: 'Submission\nDeadline' },
  decision, revision, cameraReady,
]

export const evaluationMilestones: readonly AuthorMilestone[] = [
  { id: 'screening', start: dates.screeningStart, end: dates.screeningEnd, label: 'Screening and\nreviewer assignment' },
  { id: 'review', start: dates.peerReviewStart, end: dates.peerReviewEnd, label: 'Peer\nreview' },
  { ...decision, label: 'Decisions\nannounced' }, { ...revision, label: 'Revised paper\ndeadline' },
  { id: 'acceptance', start: dates.finalAcceptance, label: 'Final\nacceptance' },
  { ...cameraReady, label: 'Camera-ready and\nregistration' },
]

export function formatMilestoneDate({ start, end }: AuthorMilestone) {
  if (!end) return formatConferenceDate(start, 'short')
  if (start.slice(0, 7) === end.slice(0, 7)) return `${Number(start.slice(-2))}–${formatConferenceDate(end, 'short')}`
  const startLabel = formatConferenceDate(start, 'short')
  return `${start.slice(0, 4) === end.slice(0, 4) ? startLabel.replace(/ \d{4}$/, '') : startLabel} – ${formatConferenceDate(end, 'short')}`
}

export const submissionDescription = `Everything you need to prepare and submit your paper to DICICDI 2027. We welcome original research in any of our eight scientific tracks. Submissions are open until ${formatConferenceDate(dates.submissionDeadline)}.`
export const evaluationDescription = 'How your paper is evaluated. Every submission goes through a structured double-blind peer review before a decision is made.'

export const paperRequirements = [
  'Use the official conference template in Word or LaTeX.',
  'Save Word files as .docx without macros.',
  'Full papers must be written in English.',
  'Paper length: 8 pages or more including references (at least 60% of accepted papers must meet this length).',
  'Follow the template fonts and formatting, and do not add page numbers.',
  'Use title case for headings, and number only the first two heading levels.',
  'Number figures with the caption below and tables with the caption above. Keep tables and equations editable.',
  'Cite references in the text and include DOIs where available.',
  'Indicate one corresponding author with an email address. ORCID iDs are recommended.',
  'Provide alternative text for figures.',
  'Submit original work that is not under review elsewhere.',
  'Initial submissions must be anonymized (no author names) for double-blind review. Camera-ready papers include full author details and source files.',
  'Accepted papers must be presented at the conference, and at least one author must register.',
] as const

export type SubmissionStep = Readonly<{ id: string; text: string; emphasis?: string; suffix?: string }>
export const submissionSteps: readonly SubmissionStep[] = [
  { id: 'template', text: 'Download the conference template.' },
  { id: 'format', text: 'Format your manuscript according to the instructions.' },
  { id: 'submit', text: 'Create a Microsoft CMT account and submit an anonymized PDF by ', emphasis: formatConferenceDate(dates.submissionDeadline), suffix: '.' },
  { id: 'reviews', text: 'Follow the reviews and the decision in CMT (decisions on ', emphasis: formatConferenceDate(dates.decisionNotification), suffix: ').' },
  { id: 'camera-ready', text: 'If accepted, upload the camera-ready PDF and source files by ', emphasis: formatConferenceDate(dates.authorRegistrationDeadline), suffix: '.' },
  { id: 'present', text: 'Register and present your work on ', emphasis: conferenceDateRange, suffix: '.' },
]

export const evaluationStages = [
  { id: 'screening', title: 'Initial screening', description: 'Scope, formatting, originality, integrity, ethics, and anonymization.' },
  { id: 'review', title: 'Independent review', description: 'At least two independent reviews per eligible paper.' },
  { id: 'criteria', title: 'Assessment criteria', description: 'The same criteria for every paper.' },
  { id: 'conflicts', title: 'Conflict management', description: 'Conflicts of interest are declared and handled.' },
  { id: 'decision', title: 'Decisions and revisions', description: 'Decision with feedback, then revisions checked.' },
] as const

export const doubleBlindCriteria = [
  { id: 'reviewers', title: 'Reviewers do not see author names', description: 'Papers are evaluated on their content alone.' },
  { id: 'authors', title: 'Authors do not see reviewer names', description: 'Reviewers give honest, independent feedback.' },
  { id: 'anonymize', title: 'Anonymize your paper', description: 'Remove author names, affiliations, and identifying details. Add them in the camera-ready version after acceptance.' },
] as const

export const reviewerCriteria = ['Research question', 'Methodology', 'Technical contribution', 'Evidence', 'Clarity', 'Limitations', 'Ethical considerations'] as const
export const afterAcceptance = `Accepted papers are presented in their track session on ${conferenceDateRange}, with 10 minutes per paper. Present in person, or remotely through a live video meeting session.`
export const evaluationCtaDescription = `Submit your anonymized paper by ${formatConferenceDate(dates.submissionDeadline)}.`
