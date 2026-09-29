import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { footerLinks } from '../../data/homeContent'
import Logo from '../ui/Logo'

const footerSocial = [
  { label: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com' },
  { label: 'Twitter', icon: FaTwitter, href: 'https://x.com' },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com' },
  { label: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com' },
  { label: 'Dribbble', icon: FaDribbble, href: 'https://dribbble.com' },
]

const linkClass =
  'font-footer text-[15px] leading-6 font-normal text-footer-link transition-colors hover:text-gold'

function FooterLink({ to, children }) {
  const { pathname, hash } = useLocation()
  const active = to === '/' && pathname === '/' && !hash

  return (
    <Link to={to} className={active ? `${linkClass} text-gold` : linkClass}>
      {children}
    </Link>
  )
}

export default function Footer() {
  const [joined, setJoined] = useState(false)
  const pageLinks = footerLinks.filter((item) => !item.children)
  const tripTypes = footerLinks.find((item) => item.children)

  return (
    <footer id="contact" className="scroll-mt-28 bg-[#161616] text-white">
      <div className="mx-auto max-w-285 px-6 pt-14 pb-10">
        <div className="flex flex-col items-center text-center">
          <Logo />
          <p className="mt-3 font-footer text-sm leading-6 text-footer-link">Crafting your perfect getaway.</p>
          <span className="mt-5 h-px w-12 bg-gold" aria-hidden="true" />
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
          <nav aria-label="Footer">
            <h2 className="font-footer text-lg leading-6 font-semibold text-white">Quick links</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {pageLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink to={item.to}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
            {tripTypes && (
              <div className="mt-6">
                <p className="font-footer text-sm leading-5 font-medium tracking-[0.08em] text-white/70 uppercase">
                  {tripTypes.label}
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
                  {tripTypes.children.map((child) => (
                    <li key={child.label}>
                      <FooterLink to={child.to}>{child.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>

          <div>
            <h2 className="font-footer text-lg leading-6 font-semibold text-white">Contact info</h2>
            <ul className="mt-5 space-y-4 font-footer text-sm leading-6 text-footer-link">
              <li className="flex gap-3">
                <FiMapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <span>J S complex, Sarjapura - Attibele Rd, Bengaluru, Attibele, Karnataka 562107</span>
              </li>
              <li>
                <a href="tel:9150017657" className="inline-flex items-center gap-3 transition-colors hover:text-gold">
                  <FiPhone className="size-5 shrink-0 text-gold" aria-hidden="true" />
                  9150017657
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-footer text-lg leading-6 font-semibold text-white">Join our newsletter</h2>
            <p className="mt-5 font-footer text-sm leading-6 text-footer-link">
              Sign up for our newsletter to enjoy free marketing tips, inspirations, and more.
            </p>
            {joined ? (
              <p className="mt-5 font-footer text-sm leading-6 text-gold">You are on the list.</p>
            ) : (
              <form
                className="mt-5 flex flex-col gap-3 sm:flex-row"
                onSubmit={(event) => {
                  event.preventDefault()
                  setJoined(true)
                }}
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email"
                  className="h-11 min-w-0 flex-1 rounded-full border border-white/20 bg-white/5 px-4 font-footer text-sm text-white outline-none placeholder:text-white/40 focus:border-gold"
                />
                <button
                  type="submit"
                  className="h-11 rounded-full bg-gold px-6 font-footer text-sm font-medium text-black transition hover:brightness-95"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-285 flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          <p className="font-footer text-sm leading-6 text-footer-link">
            © {new Date().getFullYear()} Travel With Baba. All Rights Reserved.
          </p>
          <ul className="flex items-center gap-2.5">
            {footerSocial.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-gold hover:text-gold"
                >
                  <item.icon className="size-3.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
