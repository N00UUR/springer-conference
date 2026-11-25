import SectionHeading from '../../../components/ui/SectionHeading'
import RegistrationFeesTable from '../../../components/conference/RegistrationFeesTable'
import './FeesSection.css'

export default function FeesSection() {
  return (
    <section id="registration-fees" className="page-container fees-section" aria-labelledby="fees-title">
      <SectionHeading
        className="fees-heading"
        titleId="fees-title"
        title="Registration Fees"
        description="Conference fees for Egyptian and international participants."
      />
      <RegistrationFeesTable labelledBy="fees-title" />
    </section>
  )
}
