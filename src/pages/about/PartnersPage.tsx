import SiteHeader from '../../components/layout/SiteHeader'
import SectionHeading from '../../components/ui/SectionHeading'
import ActionLink from '../../components/ui/ActionLink'
import ConferenceCard from '../../components/conference/ConferenceCard'
import CallToAction from '../../components/conference/CallToAction'
import PartnerLogo from '../../components/conference/PartnerLogo'
import { conferenceOrganizer, conferencePartners, partnershipOpportunities } from '../../data/conferencePartners'
import { conferenceContacts } from '../../data/conferenceContacts'
import noticeIcon from '../../assets/icons/publication/important-notice.svg'
import emailIcon from '../../assets/icons/footer/email.svg'
import './PartnersPage.css'

export default function PartnersPage() {
  const organizer = conferenceOrganizer
  const email = conferenceContacts.find(contact => contact.icon === 'email')?.href
  return (
    <main className="partners-page" lang="en" dir="ltr">
      <div className="page-container partners-page__nav"><SiteHeader activeGroup="About" /></div>
      <div className="page-container">
        <SectionHeading level={1} className="partners-page__intro" titleId="partners-title" title="Partners" description="DICICDI 2027 welcomes collaboration with universities, research centers, professional organizations, and technology companies." />
        <div className="partners-page__sections">
          <section aria-labelledby="opportunities-title">
            <h2 id="opportunities-title">Partnership opportunities</h2>
            <p className="partners-page__description">Universities, research centers, professional organizations, and technology companies can contribute in four ways.</p>
            <ul className="partners-page__opportunities">
              {partnershipOpportunities.map(({ id, ...opportunity }) => <ConferenceCard key={id} variant="opportunity" {...opportunity} />)}
            </ul>
          </section>
          <section aria-labelledby="organizer-title">
            <h2 id="organizer-title">Organizer</h2>
            <article className="partners-page__organizer">
              <img src={organizer.logoUrl} alt="" width={163} height={163} />
              <div><h3>{organizer.name}</h3><p className="partners-page__affiliation">{organizer.affiliation}</p><p>{organizer.description}</p></div>
            </article>
          </section>
          <section aria-labelledby="our-partners-title">
            <h2 id="our-partners-title" className="partners-page__center">Our Partners</h2>
            <ul className="partners-page__logos">{conferencePartners.map(partner => <PartnerLogo key={partner.id} partner={partner} />)}</ul>
            <aside className="partners-page__notice" aria-labelledby="partnership-notice-title">
              <h3 id="partnership-notice-title"><img src={noticeIcon} alt="" width={24} height={24} />How partnerships work</h3>
              <p>Partnerships are developed around the scientific program and approved through institutional procedures. Sponsorship agreements define each partner’s contributions and responsibilities.</p>
            </aside>
          </section>
        </div>
      </div>
      <CallToAction className="partners-page__cta" title="Interested in partnering with us?" description="Get in touch and we will share the details.">
        <ActionLink label="Contact for Partnership" href={email} className="partners-page__contact" leadingIcon={<img className="partners-page__mail" src={emailIcon} alt="" width={24} height={24} />} />
      </CallToAction>
    </main>
  )
}
