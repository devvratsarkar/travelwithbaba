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
      className="h-[25px] w-full overflow-hidden rounded-full bg-[#eeeeee]"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-valuetext={`${value}% (${label})`}
    >
      <div
        className="flex h-full items-center rounded-[2px] bg-gold font-sans text-[15px] leading-[25px] font-normal text-white transition-[width] duration-1000 ease-[ease-in-out]"
        style={{ width }}
      >
        <span className="min-w-0 flex-1 pl-[15px]">{label}</span>
        <span className="shrink-0 pr-[15px]">{value}%</span>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 bg-white px-2.5">
      <div className="relative mx-auto w-full max-w-[1140px] py-2.5">
        <img
          src={aboutRoute}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-[-2px] left-[1054px] z-[1] hidden w-[27.456%] max-w-[27.456%] brightness-0 saturate-[0.98] min-[1025px]:block"
        />
        <img
          src={aboutPlanes}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-[549px] left-[932px] z-[1] hidden w-[40.351%] max-w-[40.351%] brightness-0 contrast-200 saturate-200 min-[1025px]:block"
        />
        <div className="grid grid-cols-1 gap-5 p-2.5 md:grid-cols-2">
          <img src={aboutImage} alt="family trip" className="block h-auto w-full" />
          <div className="p-2.5">
            <div className="flex flex-col items-start gap-5 p-2.5">
              <Link
                to="/#about"
                className="inline-block rounded-[5px] bg-gold px-6 py-3 font-label text-[19px] leading-[19px] font-semibold text-black transition duration-300"
              >
                Who We Are
              </Link>
              <h2 className="font-sans text-[25px] leading-[43.75px] font-medium text-black">
                Great opportunity for adventure & travels
              </h2>
              <div className="font-sans text-[16px] leading-6 font-normal text-black">
                <p className="mb-[14.4px]">
                  Looking for your next big escape? With Travel With Baba, every trip is more than just a vacation – it
                  is an experience tailored to you. Our dedicated team creates one-of-a-kind itineraries that capture
                  both the excitement of journeying but also make room for relaxing, depending on what you seek,
                  excitement or relaxation. And as one of the best travel agents Bangalore focused on international
                  travel, you can meet your next journey across borders easily and stylishly.
                </p>
                <p className="mb-[14.4px]">
                  As one of the reputed travel agencies in Bangalore, we provide our clients with memorable travel
                  experiences that were effortless, enjoyable, and safe. For all your travel needs, we are proud to be
                  one of the best tour operator in Bangalore and your gateway to memories that last a lifetime!
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
