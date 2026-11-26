import ProgramLayout from '../../components/program/ProgramLayout'
import QuickFacts from '../../components/conference/QuickFacts'
import CallToAction from '../../components/conference/CallToAction'
import ActionLink from '../../components/ui/ActionLink'
import { conferenceContacts } from '../../data/conferenceContacts'
import { accommodation, attendanceOptions, venueDetails } from '../../data/programLocation'
import check from '../../assets/icons/about/check-all.svg'
import inPersonIcon from '../../assets/icons/program/in-person.svg'
import hybridIcon from '../../assets/icons/program/hybrid.svg'
import remoteIcon from '../../assets/icons/program/remote.svg'
import accommodationIcon from '../../assets/icons/program/accommodation.svg'
import contactEmailIcon from '../../assets/icons/program/contact-email.svg'
import './LocationPage.css'

const attendanceIcons = { 'in-person': inPersonIcon, hybrid: hybridIcon, remote: remoteIcon }

export default function LocationPage() {
  const email = conferenceContacts.find(contact => contact.icon === 'email')?.href
  return (
    <ProgramLayout title="Conference Location" description="Join us at Creativa Damanhour, Damanhour University, for a conference connecting researchers, students, and industry.">
      <div className="page-container program-page__content location-page__content">
        <section className="location-page__overview" aria-label="Venue information">
          <article className="location-page__venue">
            <header><img src={venueDetails.logoUrl} alt="Creativa" width={96} height={96} /><div><h2>{venueDetails.name}</h2><p>{venueDetails.affiliation}</p></div></header>
            <p className="location-page__label">What to expect over two days</p>
            <ul className="location-page__activities">{venueDetails.activities.map(activity => <li key={activity.id}><img src={check} alt="" width={24} height={24} /><span><strong>{activity.title}</strong> {activity.detail}</span></li>)}</ul>
            <ActionLink label="View Location On Map" href={venueDetails.mapUrl} arrow />
          </article>
          <QuickFacts />
        </section>
        <section aria-labelledby="attendance-title">
          <h2 id="attendance-title" className="location-page__section-title">Attendance ways</h2>
          <ul className="location-page__attendance">{attendanceOptions.map(option => {
            const icon = attendanceIcons[option.id]
            return <li key={option.id}><img className="location-page__attendance-icon" src={icon} alt="" width={50} height={50} /><h3>{option.title}</h3><p>{option.description}</p></li>
          })}</ul>
          <aside className="location-page__notice" aria-labelledby="accommodation-title"><h3 id="accommodation-title"><img src={accommodationIcon} alt="" width={24} height={24} />Accommodation</h3><p>{accommodation}</p></aside>
        </section>
      </div>
      <CallToAction className="program-page__cta" title="Questions about travel or accommodation?" description="Get in touch and we will help."><ActionLink label="Contact Us" href={email} leadingIcon={<img src={contactEmailIcon} alt="" width={24} height={24} />} /></CallToAction>
    </ProgramLayout>
  )
}
