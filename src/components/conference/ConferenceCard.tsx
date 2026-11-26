import './ConferenceCard.css'

type ConferenceCardProps = Readonly<{
  variant: 'program' | 'track' | 'opportunity'
  icon: string
  title: string
  description: string
  label?: string
}>

export default function ConferenceCard({ variant, icon, title, description, label }: ConferenceCardProps) {
  if (variant === 'opportunity') {
    return (
      <li className="conference-card opportunity-card">
        {icon ? <img src={icon} alt="" width={50} height={50} /> : <span className="conference-card__icon-placeholder" aria-hidden="true" />}
        <div><h3>{title}</h3><p>{description}</p></div>
      </li>
    )
  }

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
