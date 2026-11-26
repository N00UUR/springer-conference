import { formatRegistrationAmount, type RegistrationFee } from '../../data/registrationFees'
import publicationIcon from '../../assets/icons/authors/anonymize-paper.svg'
import participationIcon from '../../assets/icons/registration/participation-fee.svg'
import checkIcon from '../../assets/icons/authors/paper-check.svg'
import './FeeCard.css'

export default function FeeCard({ fee }: Readonly<{ fee: RegistrationFee }>) {
  const isPublication = fee.id === 'publication'
  return (
    <article className={`fee-card fee-card--${isPublication ? 'publication' : 'participation'}`}>
      <header className="fee-card__header">
        <span className="fee-card__icon"><img src={isPublication ? publicationIcon : participationIcon} alt="" width={50} height={50} /></span>
        <h3>{fee.name}</h3>
      </header>
      <p className="fee-card__description">{fee.detail}</p>
      <div className="fee-card__details">
        <span className="fee-card__applies"><img src={checkIcon} width={24} height={24} alt="" />{fee.appliesTo}</span>
        <span className="fee-card__amount">{formatRegistrationAmount(fee.amounts.EGP, 'EGP')} / {formatRegistrationAmount(fee.amounts.USD, 'USD')}</span>
      </div>
    </article>
  )
}
