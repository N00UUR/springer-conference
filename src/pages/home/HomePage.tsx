import SiteHeader from '../../components/layout/SiteHeader'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ObjectivesSection from './sections/ObjectivesSection'
import ImportantDatesSection from './sections/ImportantDatesSection'
import TracksSection from './sections/TracksSection'
import PublicationSection from './sections/PublicationSection'
import ProgramSection from './sections/ProgramSection'
import './HomePage.css'

export default function HomePage() {
  return (
    <main id="home" className="conference-home" lang="en" dir="ltr">
      <div className="home-cover">
        <div className="page-container home-first-screen">
          <SiteHeader />
          <HeroSection />
        </div>
      </div>

      <AboutSection />
      <ObjectivesSection />
      <ImportantDatesSection />
      <TracksSection />
      <PublicationSection />
      <ProgramSection />
    </main>
  )
}