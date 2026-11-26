import { useLayoutEffect, useSyncExternalStore } from 'react'
import SiteFooter from './components/layout/SiteFooter'
import HomePage from './pages/home/HomePage'
import PartnersPage from './pages/about/PartnersPage'
import CommitteePage from './pages/about/CommitteePage'
import ScientificTracksPage from './pages/about/ScientificTracksPage'
import AboutConferencePage from './pages/about/AboutConferencePage'
import SchedulePage from './pages/program/SchedulePage'
import KeynoteSpeakersPage from './pages/program/KeynoteSpeakersPage'
import LocationPage from './pages/program/LocationPage'

import SubmissionGuidelinesPage from './pages/authors/SubmissionGuidelinesPage'
import EvaluationProcessPage from './pages/authors/EvaluationProcessPage'

import RegistrationFeesPage from './pages/registration/RegistrationFeesPage'

const routes = {
  '#/registration-fees': RegistrationFeesPage,
  '#/authors/submission-guidelines': SubmissionGuidelinesPage,
  '#/authors/evaluation-process': EvaluationProcessPage,
  '#/about/conference': AboutConferencePage,
  '#/about/scientific-tracks': ScientificTracksPage,
  '#/about/committee': CommitteePage,
  '#/about/partners': PartnersPage,
  '#/program/schedule': SchedulePage,
  '#/program/keynote-speakers': KeynoteSpeakersPage,
  '#/program/location': LocationPage,
}

function subscribeToHash(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function getHash() { return window.location.hash }

export default function App() {
  const hash = useSyncExternalStore(subscribeToHash, getHash, () => '')
  const Page = routes[hash as keyof typeof routes] ?? HomePage

  useLayoutEffect(() => {
    if (hash.startsWith('#/') || !hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    } else if (hash.startsWith('#')) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
  }, [hash])

  return <><Page /><SiteFooter /></>
}
