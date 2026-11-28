import { useState, type FormEvent } from 'react'
import ActionLink from '../ui/ActionLink'
import './ContactForm.css'

const fields = [
  { name: 'firstName', label: 'First name', type: 'text', autoComplete: 'given-name', required: true },
  { name: 'lastName', label: 'Last name', type: 'text', autoComplete: 'family-name', required: true },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', required: false },
] as const

export default function ContactForm() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // No message service is configured yet. Never report a successful delivery.
    setStatus('Online messaging is not available yet. Your message has not been sent. Please use the contact email.')
  }

  return (
    <section className="contact-form" aria-labelledby="contact-form-title">
      <div className="contact-form__intro">
        <h2 id="contact-form-title">Send Message</h2>
        <p>Please fill out the form below with details and message and our team will get back to you as soon as possible.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contact-form__fields">
          {fields.map(field => <input key={field.name} name={field.name} type={field.type} autoComplete={field.autoComplete} aria-label={field.label} placeholder={field.label} required={field.required} />)}
          <textarea name="message" aria-label="Write Message" placeholder="Write Message" required />
        </div>
        <ActionLink label="Send Message" buttonType="submit" className="contact-form__submit" />
        {status && <p className="contact-form__status" role="status">{status}</p>}
      </form>
    </section>
  )
}
