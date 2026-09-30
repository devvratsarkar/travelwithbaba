import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { aboutImage, aboutPlanes, aboutRoute } from '../../data/homeContent'

const stats = [
  { label: 'Satisfied Clients', value: 98 },
  { label: 'Success Rate', value: 100 },
]

function ProgressStat({ label, value }) {
  const trackRef = useRef(null)
  const [width, setWidth] = useState('0%')

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) {
      setWidth(`${value}%`)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setWidth(`${value}%`)
        observer.disconnect()
      },
      { threshold: 0.4 },
    )

    observer.observe(track)
    return () => observer.disconnect()
  }, [value])

  return (
    <div
      ref={trackRef}
      className="h-6.25 w-full overflow-hidden rounded-full bg-[#eeeeee]"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-valuetext={`${value}% (${label})`}
    >
      <div
        className="flex h-full items-center rounded-xs bg-gold font-sans text-sm font-normal text-white transition-[width] duration-1000 ease-[ease-in-out]"
        style={{ width }}
      >
        <span className="min-w-0 flex-1 pl-3.75">{label}</span>
        <span className="shrink-0 pr-3.75">{value}%</span>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 bg-white px-2.5 overflow-hidden">
      <div className="relative mx-auto w-full max-w-285 py-2.5">
        <img
          src={aboutRoute}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-0.5 left-263.5 z-1 hidden w-[27.456%] max-w-[27.456%] brightness-0 saturate-[0.98] min-[1025px]:block"
        />
        <img
          src={aboutPlanes}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-137.25 left-93.2 z-1 hidden w-[40.351%] max-w-[40.351%] brightness-0 contrast-200 saturate-200 min-[1025px]:block"
        />
        <div className="grid grid-cols-1 gap-5 p-2.5 md:grid-cols-2">
          <img src={aboutImage} alt="family trip" className="block h-auto w-full" />
          <div className="p-2.5">
            <div className="flex flex-col items-start gap-5 p-2.5">
              <Link
                to="/about"
                className="inline-block rounded-xs bg-gold px-6 py-3 font-label text-lg font-semibold text-black transition duration-300"
              >
                Who We Are
              </Link>
              <h2 className="font-sans text-[25px] leading-[43.75px] font-medium text-black">
                Great opportunity for adventure & travels
              </h2>
              <div className="font-sans text-[16px] leading-6 font-normal text-black">
                <p className="mb-[14.4px]">
                  Travel with Baba, based in Varanasi, Uttar Pradesh, offers tour programs across India and customized
                  holiday packages at affordable prices. A heritage tour, a pilgrimage, a beach holiday, or a quieter
                  getaway can all be planned with comfortable transport and a good hotel.
                </p>
                <p className="mb-[14.4px]">
                  The same desk books flights, rail tickets, cars, and coaches, and helps with passport, visa, and
                  travel insurance. Private events, meetings, and conferences are arranged here too, with Mr Shiv
                  leading the Varanasi team.
                </p>
              </div>
              {stats.map((stat) => (
                <ProgressStat key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
