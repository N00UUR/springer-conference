import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Menu, X } from 'lucide-react'
import chevron from '../../assets/icons/chevron-down.svg'
import { contact, headerNavigation, homeLink, registration } from '../../data/conferenceLinks'
import ActionLink from '../ui/ActionLink'
import ConferenceLogo from './ConferenceLogo'
import './SiteHeader.css'

export default function SiteHeader({
  isHome = false,
  activeGroup,
}: Readonly<{ isHome?: boolean; activeGroup?: 'About' | 'Authors' | 'Program' }>) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const header = useRef<HTMLElement>(null)
  const menuToggle = useRef<HTMLButtonElement>(null)
  const groupToggle = useRef<HTMLButtonElement | null>(null)

  function closeNavigation() {
    setOpenGroup(null)
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen && !openGroup) return

    function handleOutside(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) closeNavigation()
    }

    const compactLayout = window.matchMedia('(max-width: 1050px)')
    document.addEventListener('pointerdown', handleOutside)
    compactLayout.addEventListener('change', closeNavigation)
    return () => {
      document.removeEventListener('pointerdown', handleOutside)
      compactLayout.removeEventListener('change', closeNavigation)
    }
  }, [menuOpen, openGroup])

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'Escape') return
    if (openGroup) {
      setOpenGroup(null)
      groupToggle.current?.focus()
    } else if (menuOpen) {
      closeNavigation()
      menuToggle.current?.focus()
    }
  }

  return (
    <header
      ref={header}
      className="site-header"
      onKeyDown={handleKeyDown}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeNavigation()
      }}
    >
      <ConferenceLogo className="site-logo" onNavigate={closeNavigation} />
      <button
        ref={menuToggle}
        className="site-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => {
          setOpenGroup(null)
          setMenuOpen(open => !open)
        }}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div id="site-navigation" className="site-navigation" data-open={menuOpen}>
        <nav className="site-links" aria-label="Main navigation">
          <a
            className={isHome ? 'site-active' : undefined}
            href={homeLink}
            aria-current={isHome ? 'page' : undefined}
            onClick={closeNavigation}
          >
            Home
          </a>
          {headerNavigation.map(({ title, href, links }) => {
            const isOpen = openGroup === title
            const panelId = `site-nav-${title.toLowerCase()}`
            return (
              <div key={title} className="site-nav-group">
                <div className={href ? 'site-nav-split' : undefined}>
                  {href && <a href={href} className={title === activeGroup ? 'site-nav-parent site-active' : 'site-nav-parent'} onClick={closeNavigation}>{title}</a>}
                  <button
                    type="button"
                    className={['site-nav-trigger', href && 'site-nav-trigger--arrow', title === activeGroup && 'site-active'].filter(Boolean).join(' ')}
                    aria-label={href ? `${isOpen ? 'Close' : 'Open'} ${title} navigation` : undefined}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={event => {
                      groupToggle.current = event.currentTarget
                      setOpenGroup(current => current === title ? null : title)
                    }}
                  >
                    {!href && title}
                    <img src={chevron} alt="" width={18} height={18} />
                  </button>
                </div>
                <ul className="site-dropdown" id={panelId} hidden={!isOpen} aria-label={title}>
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      {href
                        ? <a href={href} onClick={closeNavigation}>{label}</a>
                        : <span aria-disabled="true">{label}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
          <a href={registration.href} onClick={closeNavigation}>{registration.label}</a>
        </nav>

        <div className="site-auth">
          <ActionLink {...contact} className="site-contact" onNavigate={closeNavigation} />
        </div>
      </div>
    </header>
  )
}
