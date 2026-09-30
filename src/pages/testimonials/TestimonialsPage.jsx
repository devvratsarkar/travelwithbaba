import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { contact, testimonials } from '../../data/homeContent'
import { whatsappEnquiryHref } from '../../components/forms/EnquireForm'

const inputClass =
  'mt-1.5 h-11 w-full rounded-md border border-black/15 bg-white px-3 text-sm text-ink outline-none focus:border-primary'

export default function TestimonialsPage() {
  const baseId = useId()
  const [sent, setSent] = useState(false)
  const field = (name) => `${baseId}-${name}`

  useEffect(() => {
    document.title = 'Testimonials | Travel with Baba'
    return () => {
      document.title = 'Travel with Baba - Passport & Visa Services in Varanasi'
    }
  }, [])

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const company = String(data.get('company') || '').trim()
    const designation = String(data.get('designation') || '').trim()
    const text = [
      'Hello! I would like to post a testimonial.',
      `Name: ${data.get('name')}`,
      company ? `Company: ${company}` : null,
      designation ? `Designation: ${designation}` : null,
      `Email: ${data.get('email')}`,
      `Mobile: ${data.get('phone')}`,
      `Rating: ${data.get('rating')}`,
      `Review: ${data.get('message')}`,
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
            <span>Testimonials</span>
          </p>
          <h1 className="mt-4 font-sans text-3xl font-medium sm:text-5xl">Testimonials</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            What travellers say about Travel With Baba in Varanasi.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="custom_container grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <ul className="space-y-4">
            {testimonials.map((review) => (
              <li key={review.name} className="rounded-2xl border border-black/10 bg-white p-5 sm:p-6">
                <p className="text-sm font-semibold text-primary">{review.name}</p>
                <p className="mt-3 text-base leading-7 text-ink">{review.text}</p>
                <p className="mt-4 text-sm font-medium text-[#101828]">N/A</p>
              </li>
            ))}
          </ul>

          <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 bg-white p-5 sm:p-6 lg:sticky lg:top-28">
            <h2 className="font-sans text-2xl font-medium text-[#101828]">Post Your Testimonials</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              {contact.person} receives this on WhatsApp at {contact.phone}.
            </p>
            {sent ? (
              <p className="mt-5 rounded-lg bg-[#f7f8fa] p-4 text-sm leading-6 text-ink">
                Thank you for the testimonial. WhatsApp is open with your message. Send it, and the Varanasi desk will get
                it.
              </p>
            ) : (
              <div className="mt-5 grid gap-4">
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('name')}>
                  Your Name
                  <input id={field('name')} name="name" required autoComplete="name" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('company')}>
                  Company Name
                  <input id={field('company')} name="company" autoComplete="organization" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('designation')}>
                  Designation
                  <input id={field('designation')} name="designation" autoComplete="organization-title" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('email')}>
                  E-mail
                  <input id={field('email')} name="email" type="email" required autoComplete="email" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('phone')}>
                  Mobile
                  <input id={field('phone')} name="phone" type="tel" required autoComplete="tel" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('rating')}>
                  Rating
                  <select id={field('rating')} name="rating" required defaultValue="5" className={inputClass}>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
                </label>
                <label className="text-sm font-medium text-[#101828]" htmlFor={field('message')}>
                  Write Your Review
                  <textarea
                    id={field('message')}
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full rounded-md border border-black/15 px-3 py-2.5 text-sm text-ink outline-none focus:border-primary"
                  />
                </label>
                <button type="submit" className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-white hover:brightness-95">
                  Post Your Testimonials
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
