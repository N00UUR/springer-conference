export type CommitteeMember = Readonly<{
  id: string
  name: string
  affiliation: string
  biography: string
  imageUrl?: string
  linkedinUrl?: string
}>

export type CommitteeGroup = Readonly<{
  id: string
  title?: string
  members: readonly CommitteeMember[]
}>

export type Committee = Readonly<{
  id: string
  title: string
  description: string
  layout?: 'featured' | 'grid'
  groups: readonly CommitteeGroup[]
}>

// Temporary design fixtures, not verified conference appointments.
// Replace with the API response once the official member data is available.
function previewGroup(id: string, count: number, title?: string): CommitteeGroup {
  return {
    id,
    title,
    members: Array.from({ length: count }, (_, index) => ({
      id: `${id}-${index + 1}`,
      name: 'Ahmed Mohamed',
      affiliation: 'President of damanhour university.Egypt',
      biography: 'He previously served as Dean of the Faculty of Science at the university, and as president he has emphasized a learning environment that supports both education and scientific research',
    })),
  }
}

export const conferenceCommittees: readonly Committee[] = [
  {
    id: 'honorary', title: 'Honorary Committee', layout: 'featured',
    description: 'The honorary committee lends its patronage and institutional support to DICICDI 2027.',
    groups: [previewGroup('honorary-members', 1)],
  },
  {
    id: 'leadership', title: 'Leadership Committee',
    description: 'Oversees overall planning and coordination with the institution, grants the approvals the conference requires, and monitors progress against the conference timetable.',
    groups: [previewGroup('leadership-members', 3)],
  },
  {
    id: 'scientific', title: 'Scientific Committee',
    description: 'Defines the scientific scope of the conference, recruits reviewers, manages peer review and conflicts of interest, makes decisions on conference acceptance, appoints session chairs, and prepares the program.',
    groups: [previewGroup('national', 3, 'National Members'), previewGroup('international', 6, 'International Members'), previewGroup('track-chairs', 3, 'Track Chairs')],
  },
  {
    id: 'organizing', title: 'Organizing Committee',
    description: 'Coordinates the venue, registration, participant arrangements, and accessibility, and ensures that conference activities run smoothly.',
    groups: [previewGroup('organizing-members', 3)],
  },
  {
    id: 'publication', title: 'Publication Coordination Committee',
    description: 'Guides authors through submission and revisions and follows the progress of publication.',
    groups: [previewGroup('publication-members', 3)],
  },
  {
    id: 'finance', title: 'Finance and Sponsorship Committee',
    description: 'Prepares and tracks the conference budget, administers approved fees and sponsorships, and reports on income and expenditures.',
    groups: [previewGroup('finance-members', 3)],
  },
  {
    id: 'communication', title: 'Communication and Technical Support Committee',
    description: 'Manages conference visibility and participant communications, conference systems, technical services and connectivity, and handles technical contingencies.',
    groups: [previewGroup('communication-members', 3)],
  },
]
