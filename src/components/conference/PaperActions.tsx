import guidelinesArrow from '../../assets/icons/guidelines-arrow-right.svg'
import { paperGuidelines, submitPaper } from '../../data/conferenceLinks'
import './PaperActions.css'

export default function PaperActions({ variant = 'hero' }: { variant?: 'hero' | 'banner' }) {
  const guidelinesLabel = (
    <>
      {paperGuidelines.label}
      <img src={guidelinesArrow} alt="" width={16} height={16} />
    </>
  )

  return (
    <div className={`paper-actions paper-actions--${variant}`}>
      {submitPaper.href ? (
        <a className="paper-actions__submit" href={submitPaper.href}>{submitPaper.label}</a>
      ) : (
        <button className="paper-actions__submit" type="button" disabled>{submitPaper.label}</button>
      )}
      {paperGuidelines.href ? (
        <a className="paper-actions__guidelines" href={paperGuidelines.href}>{guidelinesLabel}</a>
      ) : (
        <button className="paper-actions__guidelines" type="button" disabled>{guidelinesLabel}</button>
      )}
    </div>
  )
}
