import { conferenceDates } from './conferenceDates'

export type SessionType = 'break' | 'keynote' | 'paper' | 'panel'
export type ScheduleSession = Readonly<{ id: string; title: string; type: SessionType; start: string; end: string; description: string }>
export type ScheduleDay = Readonly<{ id: string; date: string; sessions: readonly ScheduleSession[] }>

const coffee = 'A short break to network and recharge.'
const keynote = 'An invited talk from an academic or industry speaker on a key theme in intelligent computing and digital innovation.'
const lunch = 'Enjoy lunch while browsing posters from students and early-career researchers.'

// Draft schedule transcribed from Figma. Confirm times with the scientific committee.
export const conferenceSchedule: readonly ScheduleDay[] = [
  { id: 'day-1', date: conferenceDates.conferenceDay, sessions: [
    { id: 'd1-registration', title: 'Registration & welcome coffee', type: 'break', start: '08:30', end: '09:00', description: 'Pick up your badge and conference materials, and meet fellow participants over coffee.' },
    { id: 'd1-opening', title: 'Opening Session', type: 'keynote', start: '09:00', end: '09:30', description: 'The organizers welcome participants and introduce the goals and program of DICICDI 2027.' },
    { id: 'd1-keynote', title: 'Keynote speaker', type: 'keynote', start: '09:30', end: '10:30', description: keynote },
    { id: 'd1-coffee-1', title: 'Coffee break', type: 'break', start: '10:30', end: '11:00', description: coffee },
    { id: 'track-1', title: 'Track 1: AI, machine learning and data science', type: 'paper', start: '11:00', end: '11:30', description: 'Authors of accepted papers present work on topics such as deep learning, generative AI, and explainable AI, 10 minutes per paper, guided by a session chair.' },
    { id: 'd1-lunch', title: 'Lunch', type: 'break', start: '12:00', end: '12:30', description: lunch },
    { id: 'track-2', title: 'Track 2: Cybersecurity, cryptography and blockchain', type: 'paper', start: '12:30', end: '13:00', description: 'Accepted papers on intrusion detection, privacy-preserving technologies, and blockchain, presented in 10 minutes each.' },
    { id: 'd1-coffee-2', title: 'Coffee break', type: 'break', start: '13:00', end: '13:30', description: coffee },
    { id: 'track-3', title: 'Track 3: Digital transformation and sustainable development', type: 'paper', start: '13:30', end: '14:00', description: 'Accepted papers on digital government, smart cities, and green computing, presented in 10 minutes each.' },
    { id: 'track-4', title: 'Track 4: Cloud computing and the Internet of Things', type: 'paper', start: '14:00', end: '14:30', description: 'Accepted papers on edge and fog computing, IoT architectures, and sensor networks, presented in 10 minutes each.' },
  ] },
  { id: 'day-2', date: conferenceDates.conferenceEndDay, sessions: [
    { id: 'd2-keynote', title: 'Keynote speaker', type: 'keynote', start: '08:30', end: '09:00', description: keynote },
    { id: 'd2-coffee-1', title: 'Coffee break', type: 'break', start: '09:00', end: '09:30', description: coffee },
    { id: 'track-5', title: 'Track 5: Networks and communications', type: 'paper', start: '09:30', end: '10:30', description: 'Accepted papers on wireless and mobile networks, software-defined networking, and satellite communications, presented in 10 minutes each.' },
    { id: 'd2-lunch', title: 'Lunch', type: 'break', start: '09:30', end: '10:30', description: lunch },
    { id: 'track-6', title: 'Track 6: Software engineering and information systems', type: 'paper', start: '10:30', end: '11:00', description: 'Accepted papers on intrusion detection, privacy-preserving technologies, and blockchain, presented in 10 minutes each.' },
    { id: 'd2-coffee-2', title: 'Coffee break', type: 'break', start: '11:00', end: '11:30', description: coffee },
    { id: 'track-7', title: 'Track 7: Medical informatics and bioinformatics', type: 'paper', start: '12:00', end: '12:30', description: 'Accepted papers on medical image analysis, clinical decision support, and telemedicine, presented in 10 minutes each.' },
    { id: 'track-8', title: 'Track 8: Emerging technologies, human-centered computing and EdTech', type: 'paper', start: '12:30', end: '13:00', description: 'Accepted papers on human-centered AI, virtual and augmented reality, and adaptive learning, presented in 10 minutes each.' },
    { id: 'd2-panel', title: 'Panel discussion', type: 'panel', start: '13:00', end: '13:30', description: 'Experts from academia and industry discuss topics such as AI adoption, cybersecurity, sustainability, and university-industry collaboration.' },
    { id: 'd2-closing', title: 'Closing session', type: 'keynote', start: '13:30', end: '14:00', description: 'Closing remarks, thanks to participants, and a look ahead.' },
  ] },
]
