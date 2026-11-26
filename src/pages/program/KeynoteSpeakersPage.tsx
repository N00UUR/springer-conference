import ProgramLayout from '../../components/program/ProgramLayout'
import SpeakerCard from '../../components/program/SpeakerCard'
import CallToAction from '../../components/conference/CallToAction'
import ActionLink from '../../components/ui/ActionLink'
import { registration } from '../../data/conferenceLinks'
import { keynoteSpeakers, previewSpeakers } from '../../data/keynoteSpeakers'
import './KeynoteSpeakersPage.css'

export default function KeynoteSpeakersPage() {
  const preview = keynoteSpeakers.length === 0
  const speakers = preview ? previewSpeakers : keynoteSpeakers

  return (
    <ProgramLayout
      title="Keynote Speakers"
      description="Our keynote speakers bring perspectives from academia and industry on the latest advances in intelligent computing and digital innovation."
    >
      <section
        className="page-container program-page__content keynote-page"
        aria-label="Keynote speaker profiles"
      >
        <ul className="keynote-page__list">
          {speakers.map((speaker, index) => (
            <li key={speaker.id}>
              <SpeakerCard
                speaker={speaker}
                index={index}
                preview={preview}
              />
            </li>
          ))}
        </ul>
      </section>

      <CallToAction
        className="program-page__cta"
        title="Ready to join the conversation?"
        description="Register to attend the keynote sessions."
      >
        <ActionLink
          label="Register now"
          href={registration.href}
        />
      </CallToAction>
    </ProgramLayout>
  )
}