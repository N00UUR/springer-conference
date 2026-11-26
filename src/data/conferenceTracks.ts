import BrainCircuit from '../assets/icons/tracks/ai.svg'
import ShieldCheck from '../assets/icons/tracks/cybersecurity.svg'
import Leaf from '../assets/icons/tracks/digital-transformation.svg'
import Network from '../assets/icons/tracks/cloud-iot.svg'
import RadioTower from '../assets/icons/tracks/networks.svg'
import Workflow from '../assets/icons/tracks/software.svg'
import FlaskConical from '../assets/icons/tracks/medical.svg'
import Globe from '../assets/icons/tracks/emerging-tech.svg'

/** Shared content for the home preview and the full Scientific Tracks page.
 * Topics may later come from an API without changing either component.
 */
export type ConferenceTrack = Readonly<{
  id: string
  icon: string
  title: string
  detail: string
  topics: readonly string[]
}>

export const conferenceTracks: readonly ConferenceTrack[] = [
  {
    id: 'ai',
    icon: BrainCircuit,
    title: 'Artificial Intelligence, Machine Learning and Data Science',
    detail: 'Deep learning, generative AI, natural language processing, and predictive analytics.',
    topics: [
      'Machine learning and deep learning',
      'Generative AI',
      'Natural language processing',
      'Computer vision',
      'Explainable and trustworthy AI',
      'Federated learning',
      'Data mining',
      'Predictive analytics',
      'Optimization',
      'Intelligent decision support',
    ],
  },
  {
    id: 'cybersecurity',
    icon: ShieldCheck,
    title: 'Cybersecurity, Cryptography and Blockchain',
    detail: 'Intrusion detection, privacy-preserving technologies, blockchain, and risk assessment.',
    topics: [
      'Network and information security',
      'Intrusion detection',
      'Digital forensics',
      'Cryptographic protocols',
      'Privacy-preserving technologies',
      'Blockchain and smart contracts',
      'Identity and access management',
      'AI security',
      'Risk assessment',
    ],
  },
  {
    id: 'digital-transformation',
    icon: Leaf,
    title: 'Digital Transformation and Sustainable Development',
    detail: 'Smart cities, digital government, green computing, and digital inclusion.',
    topics: [
      'Digital government',
      'Smart cities',
      'Green computing',
      'Digital technologies for sustainable development',
      'Intelligent resource management',
      'Process automation',
      'Digital inclusion',
      'Technology adoption',
      'Organizational change',
    ],
  },
  {
    id: 'cloud-iot',
    icon: Network,
    title: 'Cloud Computing and the Internet of Things',
    detail: 'Edge and fog computing, IoT architectures, sensor networks, and serverless computing.',
    topics: [
      'Cloud services',
      'Edge and fog computing',
      'Internet of Things architectures',
      'Industrial IoT',
      'Cloud and IoT security',
      'Resource scheduling',
      'Serverless computing',
      'Sensor networks',
      'Smart environments',
    ],
  },
  {
    id: 'networks',
    icon: RadioTower,
    title: 'Networks and Communications',
    detail: 'Wireless and mobile networks, software-defined networking, and satellite communications.',
    topics: [
      'Wireless and mobile networks',
      'Network architectures and protocols',
      'Software-defined networking',
      'Network virtualization',
      'Network performance',
      'Mobile and satellite communications',
      'Network security',
      'Intelligent monitoring',
    ],
  },
  {
    id: 'software',
    icon: Workflow,
    title: 'Software Engineering and Information Systems',
    detail: 'Software architecture, requirements engineering, testing, and AI-assisted development.',
    topics: [
      'Software architecture',
      'Requirements engineering',
      'Software quality and testing',
      'Agile development',
      'Software maintenance',
      'Enterprise and information systems',
      'Human-computer interaction',
      'AI-assisted software engineering',
      'Data management',
    ],
  },
  {
    id: 'medical',
    icon: FlaskConical,
    title: 'Medical Informatics and Bioinformatics',
    detail: 'Medical imaging, clinical decision support, genomic analysis, and telemedicine.',
    topics: [
      'Medical image analysis',
      'Clinical decision support',
      'Electronic health records',
      'Health data analytics',
      'Health data privacy and security',
      'Bioinformatics',
      'Genomic analysis',
      'Wearable technologies',
      'Telemedicine',
      'Explainable AI in healthcare',
    ],
  },
  {
    id: 'emerging-tech',
    icon: Globe,
    title: 'Emerging Technologies, Human-Centered Computing and EduTech',
    detail: 'Human-centered AI, AR and VR, adaptive learning, and educational systems.',
    topics: [
      'Human-centered AI',
      'Human-computer interaction',
      'Virtual and augmented reality',
      'Intelligent educational systems',
      'Learning analytics',
      'Adaptive learning',
      'Assistive technologies',
      'Robotics',
      'Digital twins',
      'Explainable AI in healthcare',
    ],
  },
]
