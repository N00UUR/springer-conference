import './ConferenceCard.css'

type ConferenceCardProps = Readonly<{
  variant: 'program' | 'track'
  icon: string
  title: string
  description: string
  label?: string
}>

export default function ConferenceCard({ variant, icon, title, description, label }: ConferenceCardProps) {
  return (
    <li className={`conference-card ${variant}-card`}>
      <img
        className={variant === 'track' ? 'track-icon' : undefined}
        src={icon}
        alt=""
        width={61}
        height={variant === 'track' ? 61 : undefined}
      />
      {label && <small>{label}</small>}
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
