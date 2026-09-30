import { useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Outlet, useLocation } from 'react-router-dom'
import { contact } from '../../data/homeContent'
import Footer from './Footer'
import PrimaryHeader from './header/PrimaryHeader.jsx'

export default function MainLayout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="min-h-svh bg-white text-ink">
      <PrimaryHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Us"
        className="whatsapp-fab fixed bottom-5 left-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg hover:brightness-95"
      >
        <FaWhatsapp className="size-8" aria-hidden="true" />
      </a>
    </div>
  )
}
