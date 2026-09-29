import { FiSearch } from 'react-icons/fi'
import { searchSuggestions } from '../../data/homeContent'

export default function SearchSection({ query, onQueryChange, onSearch }) {
  return (
    <section className="bg-white px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-285 text-center">
        <h2 className="font-sans text-4xl font-medium text-ink">
          Customized India and International Trips
        </h2>
        <form
          className="relative mt-8"
          onSubmit={(event) => {
            event.preventDefault()
            onSearch(query)
          }}
        >
          <label className="sr-only" htmlFor="trip-search">
            Search Trips
          </label>
          <input
            id="trip-search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search Trips..."
            className="h-13 w-full rounded-full border border-black/10 bg-white pr-16 pl-6 text-sm font-normal text-black shadow-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute top-1/2 right-1.5 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-primary text-black"
          >
            <FiSearch className="size-5" />
          </button>
        </form>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {searchSuggestions.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => {
                  onQueryChange(item)
                  onSearch(item)
                }}
                className="rounded-full bg-black/5 px-4 py-0.5 text-sm font-normal text-[#061626] transition hover:bg-gold"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
