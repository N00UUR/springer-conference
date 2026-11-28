import ProgramHeader from '../../components/program/ProgramHeader'
import ContactInformation from '../../components/contact/ContactInformation'
import ContactForm from '../../components/contact/ContactForm'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <main className="contact-page" lang="en" dir="ltr">
      <ProgramHeader activeGroup={null} showFacts={false} title="Contact Us" description="Need assistance? Feel free to reach out to us for any questions or inquiries. We'd be happy to help." />
      <div className="page-container contact-page__content">
        <ContactInformation />
        <ContactForm />
      </div>
    </main>
  )
}
