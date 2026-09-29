import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { LuLuggage } from 'react-icons/lu'
import { footerLinks, navItems, socialLinks } from '../../data/homeContent'

const tripTypes = footerLinks.find((item) => item.children)?.children ?? []

const linkClass = 'text-[15px] leading-7 text-[#5c5c5c] transition-colors hover:text-black'

function FooterLink({ to, children }) {
  const { pathname, hash } = useLocation()
  const active = to === '/' ? pathname === '/' && !hash : pathname + hash === to

  return (
    <Link to={to} className={active ? 'text-[15px] leading-7 font-medium text-black' : linkClass}>
      {children}
    </Link>
  )
}

export default function Footer() {
  const [joined, setJoined] = useState(false)

  return (
    <footer id="contact" className="scroll-mt-28 border-t border-black/10 bg-white text-ink">
      <div className="mx-auto grid max-w-285 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="sm:col-span-2 lg:col-span-4">
          <Link to="/" aria-label="Travel With Baba home" className="inline-flex items-center gap-2.5 text-black">
            <LuLuggage className="size-8" aria-hidden="true" />
            <span className="text-[13px] font-semibold tracking-[0.16em]">TRAVEL WITH BABA</span>
          </Link>
          <p className="mt-4 max-w-xs text-[15px] leading-7 text-[#5c5c5c]">
            Crafting your perfect getaway, from Bangalore to destinations across India and the world.
          </p>
          <ul className="mt-6 flex items-center gap-1">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid size-10 place-items-center rounded-full text-black transition hover:bg-gold"
                >
                  <item.icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] text-black uppercase">Explore</h2>
          <ul className="mt-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <FooterLink to={item.to}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] text-black uppercase">Trip types</h2>
          <ul className="mt-4 space-y-1">
            {tripTypes.map((item) => (
              <li key={item.label}>
                <FooterLink to={item.to}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-3">
          <h2 className="text-[13px] font-semibold tracking-[0.12em] text-black uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-[15px] leading-6 text-[#5c5c5c]">
            <li className="flex gap-2.5">
              <FiMapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>J S complex, Sarjapura - Attibele Rd, Bengaluru, Attibele, Karnataka 562107</span>
            </li>
            <li>
              <a href="tel:9150017657" className="inline-flex items-center gap-2.5 transition-colors hover:text-black">
                <FiPhone className="size-4 shrink-0" aria-hidden="true" />
                9150017657
              </a>
            </li>
          </ul>

          <form
            className="mt-6"
            onSubmit={(event) => {
              event.preventDefault()
              setJoined(true)
            }}
          >
            <label htmlFor="newsletter-email" className="text-[13px] font-semibold tracking-[0.12em] text-black uppercase">
              Newsletter
            </label>
            {joined ? (
              <p className="mt-3 text-[15px] leading-6 text-black">You are on the list.</p>
            ) : (
              <div className="mt-3 flex overflow-hidden rounded-full border border-black/10 bg-white">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="h-11 min-w-0 flex-1 bg-transparent px-4 text-[15px] text-black outline-none placeholder:text-[#9a9a9a]"
                />
                <button type="submit" className="bg-gold px-5 text-[15px] font-medium text-black">
                  Send
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-black/10">
        <p className="mx-auto max-w-285 px-6 py-5 text-center text-sm text-[#5c5c5c] sm:text-left">
          © {new Date().getFullYear()} Travel With Baba. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
