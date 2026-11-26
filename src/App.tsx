import { useLayoutEffect, useSyncExternalStore } from 'react'
import SiteFooter from './components/layout/SiteFooter'
import HomePage from './pages/home/HomePage'
import PartnersPage from './pages/about/PartnersPage'
import CommitteePage from './pages/about/CommitteePage'
import ScientificTracksPage from './pages/about/ScientificTracksPage'
import AboutConferencePage from './pages/about/AboutConferencePage'

function subscribeToHash(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function getHash() {
  return window.location.hash
}

export default function App() {
  const hash = useSyncExternalStore(subscribeToHash, getHash, () => '')
  const isAboutConferencePage = hash === '#/about/conference'
  const isScientificTracksPage = hash === '#/about/scientific-tracks'

  const isPartnersPage = hash === '#/about/partners'
  const isCommitteePage = hash === '#/about/committee'

  useLayoutEffect(() => {
    // Home keeps its existing anchor links; the About route starts at the top.
    if (isAboutConferencePage || isScientificTracksPage || isCommitteePage || isPartnersPage || !hash) {
      window.scrollTo(0, 0)
    } else if (hash.startsWith('#') && !hash.startsWith('#/')) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
    }
  }, [hash, isAboutConferencePage, isScientificTracksPage, isCommitteePage, isPartnersPage])

  return (
    <>
      {isAboutConferencePage ? <AboutConferencePage /> : isScientificTracksPage ? <ScientificTracksPage /> : isCommitteePage ? <CommitteePage /> : isPartnersPage ? <PartnersPage /> : <HomePage />}
      <SiteFooter />
    </>
  )
}
