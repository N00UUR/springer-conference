import previewImage from '../assets/images/speakers/speaker-placeholder.png'

export type KeynoteSpeaker = Readonly<{ id: string; name: string; role: string; affiliation: string; imageUrl?: string; bio: readonly string[]; linkedinUrl?: string }>

// Replace with approved speaker records or an API response. No invented profiles in production.
export const keynoteSpeakers: readonly KeynoteSpeaker[] = []

const previewSpeaker = {
  name: 'Prof. Adrian Whitlock',
  role: 'Professor of Artificial Intelligence',
  affiliation: 'Northbridge Institute of Technology, UK',
  imageUrl: previewImage,
  bio: [
    'Prof. Whitlock leads a research group focused on machine learning and generative models for scientific discovery. His work explores how intelligent systems can be made more transparent, so that researchers and practitioners can understand and trust their decisions.',
    'Over two decades, he has supervised more than forty doctoral students and collaborated with laboratories across Europe and the Middle East. His keynote will examine how explainable AI is changing the way research is designed and evaluated.',
  ],
}

// Figma mock records for local design review only.
export const previewSpeakers: readonly KeynoteSpeaker[] = Array.from({ length: 5 }, (_, index) => ({ id: `preview-${index + 1}`, ...previewSpeaker }))
