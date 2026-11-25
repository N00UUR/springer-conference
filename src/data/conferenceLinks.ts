type ConferenceLink = Readonly<{ label: string; href?: string }>

type NavigationGroup = Readonly<{
  title: string
  links: readonly ConferenceLink[]
}>

const home = import.meta.env.BASE_URL

export const homeLink = `${home}#home`
export const contact = { label: 'Contact Us', href: '#contact' }
export const registration = { label: 'Registration Fees', href: `${home}#registration-fees` }
export const submitPaper: ConferenceLink = { label: 'Submit Paper' }
export const paperGuidelines: ConferenceLink = { label: 'Paper Guidelines' }
export const scientificCommittee: ConferenceLink = { label: 'Scientific Committee' }
export const discoverConference: ConferenceLink = { label: 'Discover the conference' }

const about: ConferenceLink = { label: 'About the Conference', href: `${home}#about` }
const partners: ConferenceLink = { label: 'Academic Partners' }
const authorLinks: readonly ConferenceLink[] = [
  { label: 'Submission Guidelines', href: paperGuidelines.href },
  { label: 'Evaluation Process' },
]
const programLinks: readonly ConferenceLink[] = [
  { label: 'Schedule' },
  { label: 'Keynote Speakers' },
  { label: 'Location', href: `${home}#venue-location` },
]

export const headerNavigation: readonly NavigationGroup[] = [
  {
    title: 'About',
    links: [
      { label: 'About conference', href: about.href },
      { label: 'Committee', href: scientificCommittee.href },
      { label: 'Partners', href: partners.href },
    ],
  },
  { title: 'Authors', links: authorLinks },
  { title: 'Program', links: programLinks },
]

export const footerNavigation: readonly NavigationGroup[] = [
  { title: 'ABOUT', links: [about, scientificCommittee, partners, { label: 'Campus & Venue' }] },
  { title: 'Author Information', links: authorLinks },
  { title: 'Program', links: programLinks },
]
