import './ObjectivesSection.css'

const objectives = [
  ['keynote', 'Keynote Presentations', 'Present and discuss research across eight tracks.'],
  ['young-researchers', 'Support Young Researchers', 'Support postgraduate students and early-career researchers.'],
  ['share-research', 'Share Research', 'Build collaboration among universities, research centers, industry, and public institutions.'],
  ['apply-in-practice', 'Apply in Practice', 'Share practical approaches to digital applications in healthcare, education, public services, environment, and industry.'],
  ['responsible-tech', 'Advance Responsible Tech', 'Advance discussion on security, privacy, accessibility, responsible AI, and sustainability.'],
  ['partnerships', 'Open New Partnerships', 'Create opportunities for joint research and academic partnerships.'],
]

export default function ObjectivesSection() {
  return (
    <section id="objectives" className="objectives-section" aria-labelledby="objectives-title">
      <div className="page-container">
        <h2 id="objectives-title">Objectives of Conference</h2>
        <p className="objectives-intro">
          DICICDI 2027 is organized by the Faculty of Computers and Information,
          Damanhour University, to strengthen research collaboration and support
          the growth of intelligent and sustainable digital innovation.
        </p>
        <ul className="objectives-grid">
          {objectives.map(([icon, title, description]) => (
            <li className="objective-card" key={icon}>
              <img src={`${import.meta.env.BASE_URL}icons/objectives/${icon}.svg`} alt="" width="50" height="50" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
