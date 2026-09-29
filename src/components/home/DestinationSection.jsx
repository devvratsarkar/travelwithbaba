import { Link } from 'react-router-dom'
import { destinationMap, destinations } from '../../data/homeContent'

export default function DestinationSection() {
  return (
    <section id="destinations" className="relative flex min-h-screen scroll-mt-28 items-center bg-[#fdbe02] p-2.5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-[0.12]"
        style={{
          backgroundImage: `url(${destinationMap})`,
          backgroundSize: 'contain',
        }}
      />
      <div className="relative flex w-full flex-wrap gap-5 p-2.5 md:flex-nowrap md:items-center">
        {destinations.map((place) => (
          <div key={place.name} className="flex w-full flex-col gap-5 p-2.5 md:min-w-0 md:flex-1">
            <Link to="/#trips" className="block transition-transform duration-[400ms] hover:scale-110">
              <img src={place.image} alt={place.alt} className="h-auto w-full" />
            </Link>
            <h2 className="text-center font-sans text-[26px] leading-[26px] font-semibold text-black">{place.name}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}
