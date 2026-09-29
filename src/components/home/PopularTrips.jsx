import { Link } from 'react-router-dom'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import { MdOutlineHiking } from 'react-icons/md'

export default function PopularTrips({ trips }) {
  return (
    <section id="trips" className="scroll-mt-28 bg-white px-2.5 py-2.5">
      <div className="mx-auto flex w-full max-w-[1420px] flex-col gap-5">
        <h2 className="mt-2 mb-4 text-center font-sans text-[32px] leading-[38.4px] font-medium text-black">
          Explore Popular Trips
        </h2>
        <p className="mb-[14.4px] text-center font-sans text-[16px] leading-[24px] font-normal text-ink">
          Get started with handpicked top rated trips.
        </p>

        {trips.length === 0 ? (
          <p className="text-center text-muted">No trips match that search. Try another destination.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip) => (
                <li key={trip.title}>
                  <article className="bg-white">
                    <div className="relative">
                      {trip.featured && (
                        <span className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-[#f75d37] px-3.5 py-2 text-center text-[14px] leading-none font-bold text-white">
                          Featured
                        </span>
                      )}
                      <Link to="/#contact" className="group relative block h-[303px] overflow-hidden rounded-[8px]">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="h-full w-full object-cover transition duration-300 ease-linear group-hover:scale-110"
                        />
                      </Link>
                    </div>
                    <div className="bg-white pt-6">
                      <p className="mb-2 inline-flex items-center gap-2 text-[14px] leading-[22.4px] font-normal text-[#475467]">
                        <FiMapPin className="size-3.5 shrink-0" />
                        {trip.location}
                      </p>
                      <h3 className="mb-3 font-sans text-[20px] leading-[26px] font-semibold">
                        <Link to="/#contact" className="text-[#101828] hover:text-[#f75d37]">
                          {trip.title}
                        </Link>
                      </h3>
                      <div className="flex items-center gap-[30px] text-[14px] leading-[22px] text-[#475467]">
                        <p className="inline-flex items-center gap-2">
                          <FiCalendar className="size-5 shrink-0" />
                          <span>
                            <span className="block font-normal">Duration</span>
                            <span className="block font-semibold">{trip.duration}</span>
                          </span>
                        </p>
                        <p className="inline-flex items-center gap-2">
                          <MdOutlineHiking className="size-5 shrink-0" />
                          <span>
                            <span className="block font-normal">Activity</span>
                            <span className="block font-semibold">{trip.activities}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
