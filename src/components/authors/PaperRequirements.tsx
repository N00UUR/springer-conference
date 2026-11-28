import { paperRequirements } from '../../data/authorInformation'
import checkIcon from '../../assets/icons/authors/paper-check.svg'
import './PaperRequirements.css'

export default function PaperRequirements() {
  return <ul className="paper-requirements">{paperRequirements.map(requirement => <li key={requirement}><img src={checkIcon} alt="" width={24} height={24} /><span>{requirement}</span></li>)}</ul>
}
