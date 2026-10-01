import { useEffect, useRef } from 'react'
import { FiMapPin, FiPhone, FiX } from 'react-icons/fi'
import { contact, socialLinks } from '../../../data/homeContent'
import Logo from '../../ui/Logo'
import PrimaryMenu from './PrimaryMenu'

export default function OffCanvasMenu({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) onClose()
    }

    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.getElementById('mobile-menu-button')?.focus()
    }
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? 'visible' : 'pointer-events-none invisible'}`}
      inert={open ? undefined : true}
    >
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={`absolute inset-0 bg-navy/60 transition-opacity duration-300 motion-reduce:transition-none ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        aria-hidden={!open}
        className={`band-navy absolute inset-y-0 right-0 flex w-full flex-col shadow-2xl transition-transform duration-300 motion-reduce:transition-none sm:w-96 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-1 shrink-0 bg-gold" aria-hidden="true" />
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Logo className="logo-header" />
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
            onClick={onClose}
          >
            <FiX className="size-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <PrimaryMenu mobile onNavigate={onClose} />
        </div>
        <div className="border-t border-white/10 px-5 py-5">
          <div className="space-y-3">
            {contact.phones.map((item) => (
              <a key={item.href} href={item.href} className="flex items-center gap-3 text-white">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold text-black">
                  <FiPhone className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[11px] tracking-[0.14em] text-white/50 uppercase">Call {contact.person}</span>
                  <span className="mt-0.5 block text-sm font-medium">{item.label}</span>
                </span>
              </a>
            ))}
          </div>
          <p className="mt-3 flex items-start gap-3 text-sm leading-5 text-white/60">
            <FiMapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            <span>{contact.address}</span>
          </p>
          <ul className="mt-4 flex gap-2">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-black"
                >
                  <item.icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}
