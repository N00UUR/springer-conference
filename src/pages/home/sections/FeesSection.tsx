import noticeIcon from '../../../assets/icons/publication/important-notice.svg'
import { registrationFees } from '../../../data/registrationFees'
import './FeesSection.css'

const columns = [
  { label: 'Egyptian Participants', currency: 'EGP' },
  { label: 'International Participants', currency: 'USD' },
] as const

const amountFormat = new Intl.NumberFormat('en-GB')

export default function FeesSection() {
  return (
    <section id="registration-fees" className="page-container fees-section" aria-labelledby="fees-title">
      <header className="fees-heading">
        <h2 id="fees-title">Registration Fees</h2>
        <p>Conference fees for Egyptian and international participants.</p>
      </header>
      <div className="fees-panel">
        <table className="fees-table" aria-labelledby="fees-title" role="table">
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">Registration Category</th>
              {columns.map(({ label, currency }) => (
                <th key={currency} scope="col" role="columnheader">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody role="rowgroup">
            {registrationFees.map(({ id, name, description, amounts }) => (
              <tr key={id} data-category={id} role="row">
                <th scope="row" role="rowheader">
                  <span className="fee-name">{name}</span>
                  <span className="fee-description">{description}</span>
                </th>
                {columns.map(({ label, currency }) => (
                  <td key={currency} role="cell">
                    <span className="fee-mobile-label" aria-hidden="true">{label}</span>
                    <span className="fee-amount">{amountFormat.format(amounts[currency])} {currency}</span>
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
            <time dateTime="2027-03-30">30 March 2027</time>
          </p>
        </aside>
      </div>
    </section>
  )
}
