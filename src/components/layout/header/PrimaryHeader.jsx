import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { socialLinks } from '../../../data/homeContent'
import Logo from '../../ui/Logo'
import OffCanvasMenu from './OffCanvasMenu'
import PrimaryMenu from './PrimaryMenu'

export default function PrimaryHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || menuOpen ? 'bg-navy/92' : 'bg-transparent'
      }`}
    >
      <div className="custom_container grid grid-cols-[auto_1fr_auto] items-center">
        <Link to="/" aria-label="Travel With Baba home" className="py-4">
          <Logo className="logo-header" />
        </Link>

        <nav aria-label="Primary" className="hidden justify-center lg:flex">
          <PrimaryMenu />
        </nav>

        <div className="flex items-center justify-end gap-1">
          <ul className="hidden items-center gap-1 lg:flex">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid size-11 place-items-center text-gold"
                >
                  <item.icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
          <button
            id="mobile-menu-button"
            type="button"
            className="grid size-11 place-items-center text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu className="size-7" />
          </button>
        </div>
      </div>

      <OffCanvasMenu open={menuOpen} onClose={closeMenu} />
    </header>
  )
}
