export type RegistrationFee = {
  id: string
  name: string
  description: string
  amounts: { EGP: number; USD: number }
}

export const registrationFees: RegistrationFee[] = [
  {
    id: 'publication',
    name: 'Publication Fee',
    description: 'Includes presentation slot, proceedings processing, conference materials, and lunch/coffee catering.',
    amounts: { EGP: 3000, USD: 100 },
  },
  {
    id: 'participation',
    name: 'Participation Fee',
    description: 'Full attendance access to all keynote sessions, workshops, networking sessions, and certificate of attendance.',
    amounts: { EGP: 2000, USD: 100 },
  },
]
