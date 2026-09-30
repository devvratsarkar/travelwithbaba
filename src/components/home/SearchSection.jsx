import { FiSearch } from 'react-icons/fi'
import { searchSuggestions } from '../../data/homeContent'

export default function SearchSection({ query, onQueryChange, onSearch }) {
  const active = query.trim().toLowerCase()

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="custom_container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-3xl font-medium text-[#101828] sm:text-4xl">Search Packages</h2>
          <form
            className="relative mt-6 sm:mt-8"
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
              className="h-14 w-full rounded-full border border-black/10 bg-white pr-16 pl-6 text-base text-ink shadow-[0_10px_30px_rgba(15,23,42,0.06)] outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute top-1/2 right-1.5 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-primary text-white transition hover:brightness-95"
            >
              <FiSearch className="size-5" />
            </button>
          </form>
          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {searchSuggestions.map((item) => {
              const selected = active === item.toLowerCase()
              return (
                <li key={item}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      onQueryChange(item)
                      onSearch(item)
                    }}
                    className={`rounded-full border px-4 py-1.5 text-sm transition ${
                      selected
                        ? 'border-primary bg-primary text-white'
                        : 'border-black/10 bg-white text-[#344054] hover:border-primary hover:text-primary'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
