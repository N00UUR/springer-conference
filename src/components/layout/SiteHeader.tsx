import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import conferenceLogo from '../../assets/logos/conference-logo.png'
import './SiteHeader.css'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a href="#home" aria-label="DICICDI 2027 home">
        <img
          className="site-logo"
          src={conferenceLogo}
          alt="DICICDI 2027 — Damanhour University"
          width={248}
          height={83}
        />
      </a>

      <button
        className="site-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div
        id="site-navigation"
        className="site-navigation"
        data-open={menuOpen}
      >
        <nav className="site-links" aria-label="Main navigation">
          <a
            className="site-active"
            href="#home"
            aria-current="page"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About <ChevronDown size={18} aria-hidden="true" />
          </a>

          <span>
            Authors <ChevronDown size={18} aria-hidden="true" />
          </span>
          <a href="#program" onClick={() => setMenuOpen(false)}>
            Program
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </nav>

        <div className="site-auth">
          <button type="button" className="site-register" disabled>
            Register
          </button>
          <button type="button" className="site-login" disabled>
            Log in
          </button>
        </div>
      </div>
    </header>
  )
}