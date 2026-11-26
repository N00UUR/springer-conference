import financialIcon from '../assets/icons/partners/financial-support.png'
import technicalIcon from '../assets/icons/partners/technical-support.png'
import workshopsIcon from '../assets/icons/partners/workshops-panels.png'
import studentIcon from '../assets/icons/partners/student-activities.png'
import fciLogo from '../assets/logos/partners/fci-damanhour.png'
import menoufiaLogo from '../assets/logos/partners/menoufia-university.png'
import mansouraLogo from '../assets/logos/partners/mansoura-university.png'

export type PartnershipOpportunity = Readonly<{ id: string; title: string; description: string; icon: string }>
export type ConferencePartner = Readonly<{ id: string; name: string; logoUrl: string }>
export type ConferenceOrganizer = ConferencePartner & Readonly<{ affiliation: string; description: string }>

export const partnershipOpportunities: readonly PartnershipOpportunity[] = [
  { id: 'financial', title: 'Financial support', description: 'Contribute financially to help deliver the conference and its activities.', icon: financialIcon },
  { id: 'technical', title: 'Technical support', description: 'Provide technical resources or expertise that help the conference run smoothly.', icon: technicalIcon },
  { id: 'workshops', title: 'Workshops and panels', description: 'Lead a workshop or take part in a panel discussion on topics from the conference program.', icon: workshopsIcon },
  { id: 'students', title: 'Student activities', description: 'Support the poster and student sessions that give emerging researchers a platform.', icon: studentIcon },
]

export const conferenceOrganizer: ConferenceOrganizer = {
  id: 'fci', name: 'Faculty of Computers and Information', logoUrl: fciLogo,
  affiliation: 'Damanhour University, Egypt',
  description: "The Faculty of Computers and Information is one of Damanhour University's faculties specializing in computer science and information technology, located in New Nubaria, Beheira, Egypt.",
}

// Figma preview entries, including repeated logos; replace with approved partner records before publishing.
export const conferencePartners: readonly ConferencePartner[] = [
  { id: 'fci', name: 'FCI Damanhour University', logoUrl: fciLogo },
  { id: 'menoufia-1', name: 'Menoufia University', logoUrl: menoufiaLogo },
  { id: 'mansoura-1', name: 'Mansoura University', logoUrl: mansouraLogo },
  { id: 'menoufia-2', name: 'Menoufia University', logoUrl: menoufiaLogo },
  { id: 'mansoura-2', name: 'Mansoura University', logoUrl: mansouraLogo },
]
