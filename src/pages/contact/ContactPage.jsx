import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { whatsappEnquiryHref } from '../../components/forms/EnquireForm'
import { contact } from '../../data/homeContent'

const states = [
  'Andaman & Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra & Nagar Haveli',
  'Daman & Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu & Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
]

const inputClass =
  'mt-1.5 h-11 w-full rounded-md border border-black/15 bg-white px-3 text-sm text-ink outline-none focus:border-primary'

export default function ContactPage() {
  const baseId = useId()
  const [sent, setSent] = useState(false)
  const field = (name) => `${baseId}-${name}`

  useEffect(() => {
    document.title = 'Contact Us | Travel with Baba'
    return () => {
      document.title = 'Travel with Baba - Passport & Visa Services in Varanasi'
    }
  }, [])

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const city = String(data.get('city') || '').trim()
    const text = [
      'Hello! I would like to enquire.',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Mobile: ${data.get('phone')}`,
      `Country: ${data.get('country')}`,
      `State: ${data.get('state')}`,
      city ? `City: ${city}` : null,
      `Enquiry: ${data.get('message')}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappEnquiryHref(text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <>
      <section className="band-navy pt-28 pb-12 text-white sm:pt-32 sm:pb-16">
        <div className="custom_container">
          <p className="text-sm text-white/70">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="px-2">/</span>
            <span>Contact Us</span>
          </p>
          <h1 className="mt-4 font-sans text-3xl font-medium sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Travel With Baba, Varanasi. Write to {contact.person} for a tour, a stay, or a travel document.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="custom_container grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="rounded-2xl bg-[#f6f8fb] p-6 ring-1 ring-black/5">
            <p className="font-sans text-2xl font-medium text-[#101828]">Travel With Baba</p>
            <dl className="mt-6 space-y-5 text-sm leading-6">
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Contact Person</dt>
                <dd className="mt-1 text-base text-[#101828]">{contact.person}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Address</dt>
                <dd className="mt-1 flex gap-2 text-[#101828]">
                  <FiMapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {contact.address}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Call Us</dt>
                <dd className="mt-1 space-y-2">
                  {contact.phones.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 text-[#101828] hover:text-primary"
                    >
                      <FiPhone className="size-4 text-primary" aria-hidden="true" />
                      {item.label}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Email</dt>
                <dd className="mt-1 space-y-2">
                  {contact.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="flex items-center gap-2 break-all text-[#101828] hover:text-primary"
                    >
                      <FiMail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      {email}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Web Address</dt>
                <dd className="mt-1">
                  <a
                    href="https://www.travelwithbaba.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.travelwithbaba.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Web Page</dt>
                <dd className="mt-1">
                  <a
                    href="https://www.tourtravelworld.com/travel-agents/travel-with-baba-2185031/"
                    target="_blank"
                    rel="noreferrer"
                    className="break-all text-primary hover:underline"
                  >
                    tourtravelworld.com/travel-agents/travel-with-baba-2185031
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 bg-white p-5 sm:p-6">
            <h2 className="font-sans text-2xl font-medium text-[#101828]">Send Enquiry</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Mr Shiv replies on WhatsApp at {contact.phone}.</p>
            {sent ? (
              <p className="mt-5 rounded-lg bg-[#f7f8fa] p-4 text-sm leading-6 text-ink">
                Thank you for the enquiry. WhatsApp is open with your message. Send it, and the Varanasi desk will get in
                touch.
              </p>
            ) : (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('name')}>
                  Your Name
                  <input id={field('name')} name="name" required autoComplete="name" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('email')}>
                  Email
                  <input id={field('email')} name="email" type="email" required autoComplete="email" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('phone')}>
                  Phone / Mobile
                  <input id={field('phone')} name="phone" type="tel" required autoComplete="tel" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('country')}>
                  Country
                  <input id={field('country')} name="country" required defaultValue="India" autoComplete="country-name" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('state')}>
                  State
                  <select id={field('state')} name="state" required defaultValue="Uttar Pradesh" className={inputClass}>
                    {states.map((state) => (
                      <option key={state}>{state}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('city')}>
                  City
                  <input id={field('city')} name="city" autoComplete="address-level2" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#101828] sm:col-span-2" htmlFor={field('message')}>
                  Enquiry Details
                  <textarea
                    id={field('message')}
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full rounded-md border border-black/15 px-3 py-2.5 text-sm text-ink outline-none focus:border-primary"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-white hover:brightness-95">
                    Send Enquiry
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
