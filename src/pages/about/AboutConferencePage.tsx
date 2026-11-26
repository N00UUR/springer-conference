import QuickFacts from '../../components/conference/QuickFacts'
import SiteHeader from '../../components/layout/SiteHeader'
import SectionHeading from '../../components/ui/SectionHeading'
import { conferenceDates, formatConferenceDate } from '../../data/conferenceDates'
import { partnershipOpportunities } from '../../data/conferencePartners'
import ObjectivesSection from '../home/sections/ObjectivesSection'
import TracksSection from '../home/sections/TracksSection'
import ConferenceCard from '../../components/conference/ConferenceCard'
import CallToAction from '../../components/conference/CallToAction'
import ActionLink from '../../components/ui/ActionLink'
import { submitPaper } from '../../data/conferenceLinks'
import './AboutConferencePage.css'

// Export the original Figma SVGs into this directory. Optional during setup:
// a missing asset reserves its space without a broken image or substitute icon.
const artwork = import.meta.glob<string>('../../assets/icons/about/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})

type AboutIconName = 'check-all' | 'calendar' | 'organizer' | 'venue-location' | 'attendance'

function AboutIcon({ name }: Readonly<{ name: AboutIconName }>) {
  const src = artwork[`../../assets/icons/about/${name}.svg`]
  return src ? <img className="about-conference-icon" src={src} alt="" width={24} height={24} />
    : <span className="about-conference-icon" aria-hidden="true" />
}

const audienceGroups = [
  ['Faculty members', 'Researchers', 'Postgraduate students', 'Early-career researchers'],
  ['Industry professionals', 'Technology developers', 'Public-sector representatives'],
] as const

const governanceArtwork = import.meta.glob<string>('../../assets/icons/about/governance/*.svg', {
  eager: true, query: '?url', import: 'default',
})

function governanceIcon(name: string) {
  return governanceArtwork[`../../assets/icons/about/governance/${name}.svg`] ?? ''
}

const governance = [
  { id: 'leadership', icon: governanceIcon('leadership'), title: 'Conference Leadership', description: 'Present and discuss research across eight tracks.' },
  { id: 'scientific', icon: governanceIcon('scientific-committee'), title: 'Scientific Committee and Track Chairs', description: 'Sets the scientific scope, recruits reviewers, and manages review and acceptance.' },
  { id: 'organizing', icon: governanceIcon('organizing-committee'), title: 'Organizing Committee', description: 'Coordinates the venue, registration, accessibility, and conference activities.' },
  { id: 'publication', icon: governanceIcon('publication-coordination'), title: 'Publication Coordination', description: 'Works with the journal on submissions, author guidance, and publication progress.' },
  { id: 'finance', icon: governanceIcon('finance-sponsorship') || partnershipOpportunities.find(item => item.id === 'financial')?.icon || '', title: 'Finance and Sponsorship', description: 'Manages the budget, approved fees, and contributions.' },
  { id: 'communications', icon: governanceIcon('communications-support') || partnershipOpportunities.find(item => item.id === 'technical')?.icon || '', title: 'Communications and Technical Support', description: 'Manages publicity, conference systems, audiovisual services, and connectivity.' },
] as const

function AttendanceSection() {
  return (
    <section className="about-attendance page-container" aria-labelledby="about-attendance-title">
      <header className="about-centered-heading">
        <p className="about-attendance__label">Conference Attendance</p>
        <h2 id="about-attendance-title">Who Should Attend?</h2>
      </header>
      <div className="about-attendance__groups">
        {audienceGroups.map(group => (
          <ul className="about-attendance__row" key={group[0]}>
            {group.map(audience => <li key={audience}><AboutIcon name="check-all" />{audience}</li>)}
          </ul>
        ))}
      </div>
      <aside className="about-attendance__note">
        <p>Research centers and professional organizations will also be invited.</p>
        <p>Undergraduate students may take part in approved poster, project, and training activities.</p>
      </aside>
    </section>
  )
}

function GovernanceSection() {
  return (
    <section className="about-governance page-container" aria-labelledby="about-governance-title">
      <div className="about-centered-heading">
        <p className="about-conference-eyebrow">Governance &amp; Structure</p>
        <SectionHeading titleId="about-governance-title" title="How the Conference Is Organized" description="Structured operational and academic divisions ensuring peer integrity and flawless execution." />
      </div>
      <ul className="about-governance__grid">
        {governance.map(({ id, ...item }) => <ConferenceCard key={id} variant="opportunity" {...item} />)}
      </ul>
    </section>
  )
}

const introduction = {
  label: 'About The Conference',
  title: 'Advancing Intelligent Computing and Digital Innovation',
  description: 'The First Damanhour International Conference on Intelligent Computing and Digital Innovation, organized by the Faculty of Computers and Information, Damanhour University.',
}

const foundation = {
  title: 'A Platform for Scientific Excellence And Collaboration',
  paragraphs: [
    'DICICDI 2027 brings together researchers, postgraduate students, industry specialists, and public-sector representatives to present original research and discuss practical applications of intelligent computing and digital innovation.',
    'The scientific program connects advances in computing with applications in healthcare, education, environment, public services, and industry. It gives particular attention to reliable, secure, accessible, and sustainable digital systems, while supporting research collaboration and the development of early-career researchers.',
  ],
  values: ['Peer-Reviewed Integrity', 'Interdisciplinary Synergy', 'Sustainable Computing'],
}

export default function AboutConferencePage() {
  return (
    <main className="about-conference-page" lang="en" dir="ltr">
      <div className="about-conference-first-screen">
        <div className="page-container about-conference-page__nav">
          <SiteHeader activeGroup="About" />
        </div>
        <section className="page-container about-conference-overview" aria-labelledby="about-conference-title">
          <div className="about-conference-intro">
            <p className="about-conference-intro__label">{introduction.label}</p>
            <SectionHeading level={1} className="about-conference-intro__heading" titleId="about-conference-title" title={introduction.title} description={introduction.description} />
          </div>
          <div className="about-conference-foundation">
            <div className="about-conference-foundation__copy">
              <p className="about-conference-eyebrow">Institutional Foundation</p>
              <h2>{foundation.title}</h2>
              {foundation.paragraphs.map(paragraph => <p className="about-conference-foundation__paragraph" key={paragraph}>{paragraph}</p>)}
              <ul className="about-conference-values">
                {foundation.values.map(value => <li key={value}><AboutIcon name="check-all" />{value}</li>)}
              </ul>
            </div>
            <QuickFacts />
          </div>
        </section>
      </div>
      <ObjectivesSection variant="about" />
      <AttendanceSection />
      <TracksSection variant="about" />
      <GovernanceSection />
      <CallToAction className="about-conference-cta" title="Ready to be part of DICICDI 2027?" description="Join international researchers, academic pioneers, and industry specialists shaping the next generation of intelligent computing and sustainable systems.">
        <ActionLink {...submitPaper} className="about-conference-cta__submit" />
        <div className="about-conference-cta__deadline">Submission deadline: <time dateTime={conferenceDates.submissionDeadline}>{formatConferenceDate(conferenceDates.submissionDeadline)}</time></div>
      </CallToAction>
    </main>
  )
}
