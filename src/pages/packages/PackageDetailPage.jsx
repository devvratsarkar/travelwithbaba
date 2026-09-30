import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiCalendar, FiCheck, FiCoffee, FiMapPin } from 'react-icons/fi'
import { MdOutlineHiking } from 'react-icons/md'
import EnquireForm from '../../components/forms/EnquireForm'
import { contact } from '../../data/homeContent'
import { getPackage, packages } from '../../data/packages'

function daysFromDuration(duration) {
  const match = duration.match(/(\d+)\s*Days?/i)
  return match ? match[1] : ''
}

function whatsappHref(title) {
  const text = `Hello! I would like to know more about the ${title}.`
  return `https://api.whatsapp.com/send?phone=918707238117&text=${encodeURIComponent(text)}`
}

export default function PackageDetailPage() {
  const { slug } = useParams()
  const item = getPackage(slug)

  useEffect(() => {
    document.title = item ? `${item.title} | Travel with Baba` : 'Tour Packages | Travel with Baba'
    return () => {
      document.title = 'Travel with Baba - Passport & Visa Services in Varanasi'
    }
  }, [item])

  if (!item) {
    return (
      <section className="band-navy pt-32 pb-20 text-white">
        <div className="custom_container">
          <h1 className="font-sans text-3xl font-medium">Package not found</h1>
          <Link to="/packages" className="mt-6 inline-block text-gold">
            Back to tour packages
          </Link>
        </div>
      </section>
    )
  }

  const others = packages.filter((entry) => entry.slug !== item.slug).slice(0, 3)

  return (
    <>
      <section className="band-navy pt-28 pb-10 text-white sm:pt-32">
        <div className="custom_container">
          <p className="text-sm text-white/70">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link to="/packages" className="hover:text-gold">
              Tour Packages
            </Link>
          </p>
          <h1 className="mt-4 max-w-4xl font-sans text-3xl font-medium leading-tight sm:text-5xl">{item.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">{item.summary}</p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="custom_container grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div>
            <img src={item.image} alt={item.title} className="aspect-[16/9] w-full rounded-lg object-cover" />

            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Fact icon={FiCalendar} label="Duration" value={item.duration} />
              <Fact icon={FiMapPin} label="Destinations" value={item.destinations.join(', ')} />
              <Fact icon={MdOutlineHiking} label="Activities" value={item.activities.join(', ')} />
              <Fact icon={FiCoffee} label="Meals" value={item.meal} />
            </dl>

            <h2 className="mt-10 font-sans text-2xl font-medium text-[#101828]">Itinerary</h2>
            <ol className="mt-5 space-y-4">
              {item.days.map((day) => (
                <li key={day.label} className="rounded-lg border border-black/10 p-5">
                  <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">{day.label}</p>
                  <h3 className="mt-1 font-sans text-lg font-semibold text-[#101828]">{day.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink">{day.text}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-10 font-sans text-2xl font-medium text-[#101828]">Inclusions</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {item.inclusions.map((inclusion) => (
                <li key={inclusion} className="flex items-start gap-2 text-sm leading-6 text-ink">
                  <FiCheck className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {inclusion}
                </li>
              ))}
            </ul>

            <div id="enquire" className="mt-10 scroll-mt-28">
              <EnquireForm subject={item.title} defaultDays={daysFromDuration(item.duration)} />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-[#f7f8fa] p-5">
                <h2 className="font-sans text-base font-semibold text-[#101828]">Payment</h2>
                <p className="mt-2 text-sm leading-6 text-ink">{item.payment}</p>
              </div>
              <div className="rounded-lg bg-[#f7f8fa] p-5">
                <h2 className="font-sans text-base font-semibold text-[#101828]">Cancellation</h2>
                <p className="mt-2 text-sm leading-6 text-ink">{item.cancellation}</p>
              </div>
            </div>
          </div>

          <aside className="rounded-lg border border-black/10 p-5 lg:sticky lg:top-28">
            <p className="text-xs tracking-[0.14em] text-muted uppercase">Price</p>
            <p className="mt-1 font-sans text-2xl font-semibold text-[#101828]">{item.price}</p>
            <p className="mt-2 text-sm leading-6 text-muted">Ask Mr Shiv for the fare, hotels, and dates.</p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={whatsappHref(item.title)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#25D366] px-4 py-3 text-center text-sm font-medium text-white hover:brightness-95"
              >
                WhatsApp about this package
              </a>
              <a
                href="#enquire"
                className="rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-white hover:brightness-95"
              >
                Send Enquiry
              </a>
              <a
                href={contact.phoneHref}
                className="rounded-full border border-black/15 px-4 py-3 text-center text-sm font-medium text-[#101828] hover:border-primary hover:text-primary"
              >
                Call {contact.phone}
              </a>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.themes.map((theme) => (
                <li key={theme} className="rounded-full bg-[#f4f6f8] px-3 py-1 text-xs text-ink">
                  {theme}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white py-12">
        <div className="custom_container">
          <h2 className="font-sans text-2xl font-medium text-[#101828]">Other packages</h2>
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map((entry) => (
              <li key={entry.slug}>
                <Link to={`/packages/${entry.slug}`} className="group block">
                  <img src={entry.image} alt="" className="aspect-[16/10] w-full rounded-lg object-cover" />
                  <p className="mt-3 text-sm text-muted">{entry.duration}</p>
                  <h3 className="mt-1 font-sans text-base font-semibold text-[#101828] group-hover:text-primary">
                    {entry.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

function Fact({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-3 rounded-lg border border-black/10 p-4">
      <Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
      <div>
        <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
        <dd className="mt-1 text-sm font-medium leading-6 text-[#101828]">{value}</dd>
      </div>
    </div>
  )
}
