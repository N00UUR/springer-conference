type ConferenceLink = { label: string; href?: string }

export const submitPaper: ConferenceLink = { label: 'Submit Paper' }
export const paperGuidelines: ConferenceLink = { label: 'Paper Guidelines' }

export const footerNavigation: { title: string; links: ConferenceLink[] }[] = [
  {
    title: 'ABOUT',
    links: [
      { label: 'About the Conference', href: `${import.meta.env.BASE_URL}#about` },
      { label: 'Scientific Committee' },
      { label: 'Academic Partners' },
      { label: 'Campus & Venue' },
    ],
  },
  {
    title: 'Author Information',
    links: [
      { label: 'Submission Guidelines', href: paperGuidelines.href },
      { label: 'Evaluation Process' },
    ],
  },
  {
    title: 'Program',
    links: [{ label: 'Schedule' }, { label: 'Keynote Speakers' }, { label: 'Location' }],
  },
]
