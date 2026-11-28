import { conferenceContacts } from '../../data/conferenceContacts'
import emailIcon from '../../assets/icons/footer/email.svg'
import phoneIcon from '../../assets/icons/footer/phone.svg'
import locationIcon from '../../assets/icons/footer/location.svg'
import './ContactInformation.css'

const icons = { email: emailIcon, phone: phoneIcon, location: locationIcon }

export default function ContactInformation() {
  return (
    <section className="contact-information" aria-labelledby="contact-information-title">
      <div className="contact-information__intro">
        <span className="contact-information__badge">Contact Us</span>
        <h2 id="contact-information-title">Need More Information?<br />Get in Touch</h2>
        <p>Feel free to reach out to us for any questions or inquiries. We'd be happy to help.</p>
      </div>
      <address>
        <ul className="contact-information__list">
          {conferenceContacts.map(({ icon, text, href }) => (
            <li key={icon} className={`contact-information__item contact-information__item--${icon}`}>
              {href ? <a href={href}><img src={icons[icon]} alt="" width={24} height={24} /><span>{text}</span></a> : <div><img src={icons[icon]} alt="" width={24} height={24} /><span>{text}</span></div>}
            </li>
          ))}
        </ul>
      </address>
    </section>
  )
}
