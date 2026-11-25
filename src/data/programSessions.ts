import keynote from '../assets/icons/program/keynote.svg'
import research from '../assets/icons/program/research.svg'
import workshops from '../assets/icons/program/workshops.svg'
import discussions from '../assets/icons/program/discussions.svg'
import posters from '../assets/icons/program/posters.svg'

export const programSessions = [
  {
    id: 'keynote',
    icon: keynote,
    title: 'Keynote Presentation',
    detail: 'Invited talks from academic and industry speakers.',
  },
  {
    id: 'research',
    icon: research,
    title: 'Research Sessions',
    detail: 'Peer-reviewed papers presented in chaired sessions.',
  },
  {
    id: 'workshops',
    icon: workshops,
    title: 'Workshops and Tutorials',
    detail: 'Practical sessions on explainable AI, cybersecurity, scientific writing, cloud and IoT, medical data analysis, and educational technology.',
  },
  {
    id: 'discussions',
    icon: discussions,
    title: 'Panel Discussions',
    detail: 'Discussions on AI adoption, cybersecurity, university-industry collaboration, sustainability, and computing education.',
  },
  {
    id: 'posters',
    icon: posters,
    title: 'Poster and Student Sessions',
    detail: 'A forum for eligible students to present research and projects and receive feedback.',
  },
]
