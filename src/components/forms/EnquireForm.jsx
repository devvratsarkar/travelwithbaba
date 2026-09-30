import { useId, useState } from 'react'
import { contact } from '../../data/homeContent'

function enquiryMessage({ subject, name, email, phone, departure, days, message }) {
  return [
    'Hello! I would like to enquire.',
    subject ? `Package: ${subject}` : null,
    `Name: ${name}`,
    `Email: ${email}`,
    `Mobile: ${phone}`,
    departure ? `Departure: ${departure}` : null,
    days ? `Days: ${days}` : null,
    `Requirement: ${message}`,
  ]
    .filter(Boolean)
    .join('\n')
}

export function whatsappEnquiryHref(text) {
  return `https://api.whatsapp.com/send?phone=918707238117&text=${encodeURIComponent(text)}`
}

export default function EnquireForm({ subject, defaultDays = '' }) {
  const baseId = useId()
  const [sent, setSent] = useState(false)
  const field = (name) => `${baseId}-${name}`

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const text = enquiryMessage({
      subject,
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      departure: data.get('departure'),
      days: data.get('days'),
      message: data.get('message'),
    })
    window.open(whatsappEnquiryHref(text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-black/10 bg-white p-5 sm:p-6">
      <h2 className="font-sans text-2xl font-medium text-[#101828]">Send Enquiry</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        {subject ? `Ask about ${subject}. ` : ''}
        Mr Shiv replies on WhatsApp at {contact.phone}.
      </p>

      {sent ? (
        <p className="mt-5 rounded-lg bg-[#f7f8fa] p-4 text-sm leading-6 text-ink">
          Thank you for the enquiry. WhatsApp is open with your message. Send it, and the Varanasi desk will get in touch.
        </p>
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {subject && (
            <p className="sm:col-span-2 text-sm text-ink">
              <span className="font-semibold">Package: </span>
              {subject}
            </p>
          )}
          <Field id={field('name')} label="Your full name" name="name" autoComplete="name" required />
          <Field id={field('email')} label="Email" name="email" type="email" autoComplete="email" required />
          <Field id={field('phone')} label="Mobile no." name="phone" type="tel" autoComplete="tel" required />
          <Field id={field('departure')} label="Departure date" name="departure" type="date" />
          <Field id={field('days')} label="Number of days" name="days" type="number" min="1" defaultValue={defaultDays} />
          <div className="sm:col-span-2">
            <label htmlFor={field('message')} className="text-sm font-medium text-[#101828]">
              Describe your requirement
            </label>
            <textarea
              id={field('message')}
              name="message"
              required
              rows={4}
              placeholder="Tell us the places, dates, and how many travellers."
              className="mt-1.5 w-full rounded-md border border-black/15 px-3 py-2.5 text-sm text-ink outline-none focus:border-primary"
            />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-white hover:brightness-95">
              Send Enquiry
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

function Field({ id, label, name, type = 'text', required = false, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[#101828]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 h-11 w-full rounded-md border border-black/15 px-3 text-sm text-ink outline-none focus:border-primary"
        {...props}
      />
    </div>
  )
}
