import creativaLogo from '../assets/logos/creativa-damanhour.png'
import { conferenceVenue } from './conferenceContacts'

export const venueDetails = {
  name: 'Creativa Damanhour', affiliation: 'Damanhour University, Egypt', logoUrl: creativaLogo,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(conferenceVenue)}`,
  activities: [
    { id: 'keynote', title: 'Keynote talks', detail: 'from academic and industry speakers' },
    { id: 'research', title: 'Research sessions', detail: 'where accepted papers are presented and discussed' },
    { id: 'workshops', title: 'Workshops and tutorials', detail: 'on practical topics such as explainable AI, cybersecurity, and cloud and IoT' },
    { id: 'panel', title: 'Panel discussions', detail: 'on AI adoption, sustainability, and university-industry collaboration' },
    { id: 'poster', title: 'Poster and student sessions', detail: 'for emerging researchers' },
  ],
} as const

export const attendanceOptions = [
  { id: 'in-person', title: 'In person', description: 'Be part of the conference at Creativa Damanhour, attend sessions on site, and meet researchers and industry professionals face to face.' },
  { id: 'hybrid', title: 'Hybrid', description: 'Combine on-site and online attendance. Join selected sessions in person at Creativa Damanhour and follow or take part in others online.' },
  { id: 'remote', title: 'Remote', description: 'Can’t travel? Join from anywhere and present in a live video meeting session with the evaluators.' },
] as const

export const accommodation = 'Damanhour University will provide accommodation at a university hotel for participants traveling from other cities. Booking details will be announced.'
