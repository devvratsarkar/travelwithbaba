import { Link } from 'react-router-dom'
import { destinationMap, destinations } from '../../data/homeContent'

export default function DestinationSection() {
  return (
    <section id="destinations" className="relative scroll-mt-28 bg-[#fdbe02] py-10 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-[0.12]"
        style={{
          backgroundImage: `url(${destinationMap})`,
          backgroundSize: 'contain',
        }}
      />
      <div className="custom_container relative grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 xl:grid-cols-6">
        {destinations.map((place) => (
          <div key={place.name} className="flex min-w-0 flex-col gap-3">
            <Link to="/#trips" className="block overflow-hidden transition-transform duration-400 hover:scale-105">
              <img src={place.image} alt={place.alt} className="aspect-[3/4] h-auto w-full object-cover" />
            </Link>
            <h2 className="text-center font-sans text-lg leading-tight font-semibold text-black sm:text-xl xl:text-[26px]">{place.name}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}
