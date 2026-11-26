import { conferenceDates, formatConferenceDate } from '../../data/conferenceDates'
import noticeIcon from '../../assets/icons/publication/important-notice.svg'
import { registrationFees, formatRegistrationAmount, type RegistrationFee } from '../../data/registrationFees'
import './RegistrationFeesTable.css'

type RegistrationFeesTableProps = Readonly<{
  labelledBy: string
  fees?: readonly RegistrationFee[]
}>

const columns = [
  { label: 'Egyptian Participants', currency: 'EGP' },
  { label: 'International Participants', currency: 'USD' },
] as const

export default function RegistrationFeesTable({ labelledBy, fees = registrationFees }: RegistrationFeesTableProps) {
  return (
    <div className="fees-panel">
      <table className="fees-table" aria-labelledby={labelledBy} role="table">
        <thead role="rowgroup">
          <tr role="row">
            <th scope="col" role="columnheader">Registration Category</th>
            {columns.map(({ label, currency }) => (
              <th key={currency} scope="col" role="columnheader">{label}</th>
            ))}
          </tr>
        </thead>
        <tbody role="rowgroup">
          {fees.map(({ id, name, description, amounts }) => (
            <tr key={id} data-category={id} role="row">
              <th scope="row" role="rowheader">
                <span className="fee-name">{name}</span>
                <span className="fee-description">{description}</span>
              </th>
              {columns.map(({ label, currency }) => (
                <td key={currency} role="cell">
                  <span className="fee-mobile-label" aria-hidden="true">{label}</span>
                  <span className="fee-amount">{formatRegistrationAmount(amounts[currency], currency)}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <aside className="fees-deadline" aria-label="Registration deadline">
        <img src={noticeIcon} width={24} height={24} alt="" />
        <p>
          Registration Deadline for Accepted Authors:{' '}
          <time dateTime={conferenceDates.authorRegistrationDeadline}>
            {formatConferenceDate(conferenceDates.authorRegistrationDeadline)}
          </time>
        </p>
      </aside>
    </div>
  )
}
