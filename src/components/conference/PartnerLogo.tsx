import type { ConferencePartner } from '../../data/conferencePartners'
import './PartnerLogo.css'

export default function PartnerLogo({ partner }: Readonly<{ partner: ConferencePartner }>) {
  return <li className="partner-logo"><img src={partner.logoUrl} alt="" width={165} height={165} loading="lazy" /><p>{partner.name}</p></li>
}
