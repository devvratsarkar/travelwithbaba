import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { contact } from '../../data/homeContent'

const aboutPhoto = 'https://catalog.wlimg.com/about_us_image/ttw/5.jpg'

const story = [
  'Travel with Baba, based in Varanasi, Uttar Pradesh, offers a wide range of tour programs across India, specializing in customized holiday packages at affordable prices.',
  "Whether you're planning a heritage tour, pilgrimage trip, beach holiday, adventure excursion, or romantic getaway, we have the perfect itinerary for you.",
  'Our dedicated team ensures a seamless and enjoyable travel experience, with comfortable transportation options and premium hotel stays.',
  'We also organize private events, corporate meetings, and conferences.',
  'With a focus on customer satisfaction, we help you explore the beauty, culture, and diversity of Incredible India with exceptional service and reliability.',
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Travel with Baba'
    return () => {
      document.title = 'Travel with Baba - Passport & Visa Services in Varanasi'
    }
  }, [])

  return (
    <>
      <section className="band-navy pt-28 pb-12 text-white sm:pt-32 sm:pb-16">
        <div className="custom_container">
          <p className="text-sm text-white/70">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="px-2">/</span>
            <span>About Us</span>
          </p>
          <h1 className="mt-4 font-sans text-3xl font-medium sm:text-5xl">About Us</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Customized holidays from Varanasi, planned with {contact.person}.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="custom_container grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="overflow-hidden">
            <img
              src={aboutPhoto}
              alt="Travel with Baba"
              width={450}
              height={350}
              className="mb-6 w-full max-w-[450px] rounded-2xl sm:float-left sm:mt-1 sm:mr-8 sm:mb-4"
            />
            <div className="space-y-4 text-base leading-7 text-ink">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#f6f8fb] p-5 ring-1 ring-black/5">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Name of CEO</p>
              <p className="mt-2 font-sans text-2xl font-medium text-[#101828]">{contact.person}</p>
              <p className="mt-1 text-sm text-muted">{contact.role}</p>
            </div>
            <div className="rounded-2xl border border-black/10 p-5">
              <h2 className="font-sans text-lg font-medium text-[#101828]">Contact Us</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-ink">
                <li className="flex gap-3">
                  <FiMapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{contact.address}</span>
                </li>
                <li>
                  <a href={contact.phoneHref} className="flex gap-3 hover:text-primary">
                    <FiPhone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="flex gap-3 hover:text-primary">
                    <FiMail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="break-all">{contact.email}</span>
                  </a>
                </li>
              </ul>
              <Link
                to="/packages"
                className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white hover:brightness-95"
              >
                View tour packages
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
