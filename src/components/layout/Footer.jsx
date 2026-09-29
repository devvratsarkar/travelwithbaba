import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FiChevronDown, FiMapPin, FiPhone } from 'react-icons/fi'
import { footerLinks } from '../../data/homeContent'
import Logo from '../ui/Logo'

const footerSocial = [
  { label: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com' },
  { label: 'Twitter', icon: FaTwitter, href: 'https://x.com' },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com' },
  { label: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com' },
  { label: 'Dribbble', icon: FaDribbble, href: 'https://dribbble.com' },
]

const linkClass = 'font-footer text-[16px] leading-[24px] font-normal tracking-[-0.8px] text-footer-link hover:text-gold'

export default function Footer() {
  const [open, setOpen] = useState(false)
  const [joined, setJoined] = useState(false)
  const { pathname, hash } = useLocation()

  return (
    <footer id="contact" className="scroll-mt-28 bg-white text-ink">
      <div className="bg-[#1c1c1c] text-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-12 pb-8">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <Logo />
          <p className="font-footer text-[16px] leading-[24px] font-normal text-white">crafting your perfect getaway.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="mb-4 font-footer text-[20px] leading-[24px] font-semibold text-white">quick links</h4>
            <ul className="space-y-2">
              {footerLinks.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 ${linkClass}`}
                      aria-expanded={open}
                      onClick={() => setOpen((value) => !value)}
                    >
                      {item.label}
                      <FiChevronDown className={`size-4 transition ${open ? 'rotate-180' : ''}`} />
                    </button>
                    {open && (
                      <ul className="mt-2 ml-3 space-y-2 border-l border-white/20 pl-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link to={child.to} className={linkClass}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={
                        item.to === '/' && pathname === '/' && !hash
                          ? 'font-footer text-[16px] leading-[24px] font-normal tracking-[-0.8px] text-gold'
                          : linkClass
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-footer text-[20px] leading-[24px] font-semibold text-white">Contact Info</h4>
            <ul className="space-y-3 font-footer text-[16px] leading-[24px] font-normal tracking-[-0.8px] text-footer-link">
              <li className="flex gap-2">
                <FiMapPin className="mt-0.5 size-5 shrink-0" />
                <span>J S complex, Sarjapura - Attibele Rd, Bengaluru, Attibele, Karnataka 562107</span>
              </li>
              <li>
                <a href="tel:9150017657" className="inline-flex items-center gap-2 hover:text-gold">
                  <FiPhone className="size-5" />
                  9150017657
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-footer text-[20px] leading-[24px] font-semibold text-white">join our Newsletter</h4>
            <p className="mb-4 font-footer text-[16px] leading-[24px] font-normal text-footer-link">
              Sign up for our newsletter to enjoy free marketing tips, inspirations, and more.
            </p>
            {joined ? (
              <p className="text-gold">You are on the list.</p>
            ) : (
              <form
                className="flex overflow-hidden rounded-full border border-white/30"
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
                  className="min-w-0 flex-1 bg-transparent px-4 py-2.5 font-footer text-[16px] font-normal text-white outline-none placeholder:text-footer-link"
                />
                <button type="submit" className="bg-white px-5 text-[15px] leading-[15px] font-normal text-black">
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      </div>
      <div className="bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row">
          <p className="font-footer text-[16px] leading-[24px] font-normal text-black">© {new Date().getFullYear()} Travel With Baba. All Rights Reserved.</p>
          <ul className="flex items-center gap-4 text-ink">
            {footerSocial.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="hover:text-gold">
                  <item.icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
