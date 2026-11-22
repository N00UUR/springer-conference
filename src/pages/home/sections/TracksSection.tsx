import BrainCircuit from '../../../assets/icons/tracks/ai.svg'
import ShieldCheck from '../../../assets/icons/tracks/cybersecurity.svg'
import Leaf from '../../../assets/icons/tracks/digital-transformation.svg'
import Network from '../../../assets/icons/tracks/cloud-iot.svg'
import RadioTower from '../../../assets/icons/tracks/networks.svg'
import Workflow from '../../../assets/icons/tracks/software.svg'
import FlaskConical from '../../../assets/icons/tracks/medical.svg'
import Globe from '../../../assets/icons/tracks/emerging-tech.svg'
import './TracksSection.css'

const tracks = [
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence, Machine Learning and Data Science',
    detail: 'Deep learning, generative AI, natural language processing, and predictive analytics.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity, Cryptography and Blockchain',
    detail: 'Intrusion detection, privacy-preserving technologies, blockchain, and risk assessment.',
  },
  {
    icon: Leaf,
    title: 'Digital Transformation and Sustainable Development',
    detail: 'Smart cities, digital government, green computing, and digital inclusion.',
  },
  {
    icon: Network,
    title: 'Cloud Computing and the Internet of Things',
    detail: 'Edge and fog computing, IoT architectures, sensor networks, and serverless computing.',
  },
  {
    icon: RadioTower,
    title: 'Networks and Communications',
    detail: 'Wireless and mobile networks, software-defined networking, and satellite communications.',
  },
  {
    icon: Workflow,
    title: 'Software Engineering and Information Systems',
    detail: 'Software architecture, requirements engineering, testing, and AI-assisted development.',
  },
  {
    icon: FlaskConical,
    title: 'Medical Informatics and Bioinformatics',
    detail: 'Medical imaging, clinical decision support, genomic analysis, and telemedicine.',
  },
  {
    icon: Globe,
    title: 'Emerging Technologies, Human-Centered Computing and EdTech',
    detail: 'Human-centered AI, AR and VR, adaptive learning, and educational systems.',
  },
]

export default function TracksSection() {
  return (
    <section id="tracks" className="tracks-section" aria-labelledby="tracks-title">
      <div className="page-container">
        <header className="tracks-heading">
          <h2 id="tracks-title">Explore Our Scientific Tracks</h2>
          <p>
            Presenting cutting-edge research across 8 specialized domains of
            intelligent computing.
          </p>
        </header>

        <ol className="tracks-grid">
          {tracks.map(({ icon, title, detail }, index) => (
            <li key={title} className="track-card">
              <img
                className="track-icon"
                src={icon}
                alt=""
                width={61}
                height={61}
              />
              <small>TRACK {String(index + 1).padStart(2, '0')}</small>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}