import logo from '../../assets/logos/conference-logo.png'
import { homeLink } from '../../data/conferenceLinks'

type ConferenceLogoProps = Readonly<{
  className?: string
  onNavigate?: () => void
}>

export default function ConferenceLogo({ className, onNavigate }: ConferenceLogoProps) {
  return (
    <a href={homeLink} onClick={onNavigate} aria-label="DICICDI 2027 home">
      <img className={className} src={logo} alt="" width={248} height={83} />
    </a>
  )
}
