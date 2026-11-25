import keynote from '../../../assets/icons/program/keynote.svg'
import research from '../../../assets/icons/program/research.svg'
import workshops from '../../../assets/icons/program/workshops.svg'
import discussions from '../../../assets/icons/program/discussions.svg'
import posters from '../../../assets/icons/program/posters.svg'
import './ProgramSection.css'

const sessions = [
  {
    icon: keynote,
    title: 'Keynote Presentation',
    detail: 'Invited talks from academic and industry speakers.',
  },
  {
    icon: research,
    title: 'Research Sessions',
    detail: 'Peer-reviewed papers presented in chaired sessions.',
  },
  {
    icon: workshops,
    title: 'Workshops and Tutorials',
    detail: 'Practical sessions on explainable AI, cybersecurity, scientific writing, cloud and IoT, medical data analysis, and educational technology.',
  },
  {
    icon: discussions,
    title: 'Panel Discussions',
    detail: 'Discussions on AI adoption, cybersecurity, university-industry collaboration, sustainability, and computing education.',
  },
  {
    icon: posters,
    title: 'Poster and Student Sessions',
    detail: 'A forum for eligible students to present research and projects and receive feedback.',
  },
]

export default function ProgramSection() {
  return (
    <section id="program" className="page-container program-section" aria-labelledby="program-title">
      <header className="program-heading">
        <h2 id="program-title">Explore Conference Program</h2>
        <p>Everything happening at DICICDI 2027, from keynotes to student posters.</p>
      </header>
      <ul className="program-grid">
        {sessions.map(({ icon, title, detail }) => (
          <li className="program-card" key={title}>
            <img src={icon} alt="" width={61} />
            <h3>{title}</h3>
            <p>{detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
