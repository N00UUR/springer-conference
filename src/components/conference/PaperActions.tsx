import { paperGuidelines, submitPaper } from '../../data/conferenceLinks'
import ActionLink from '../ui/ActionLink'
import './PaperActions.css'

export default function PaperActions({ variant = 'hero' }: Readonly<{ variant?: 'hero' | 'banner' }>) {
  return (
    <div className={`paper-actions paper-actions--${variant}`}>
      <ActionLink {...submitPaper} className="paper-actions__submit" />
      <ActionLink {...paperGuidelines} variant="text" className="paper-actions__guidelines" arrow />
    </div>
  )
}
