import { useState } from 'react'
import { testimonials } from '../../data/homeContent'

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  function shift(direction) {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  const cards = [0, 1, 2].map((offset) => ({
    ...testimonials[(index + offset) % testimonials.length],
    offset,
  }))

  return (
    <section className="bg-white px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-sans text-[32px] leading-[32px] font-semibold text-black">Client Testimonials</h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => shift(-1)}
              className="grid size-10 place-items-center rounded-full border border-black/15 hover:bg-gold"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => shift(1)}
              className="grid size-10 place-items-center rounded-full border border-black/15 hover:bg-gold"
            >
              ›
            </button>
          </div>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {cards.map((review) => (
            <li
              key={`${review.name}-${review.offset}`}
              className={`border border-[#e7e8e9] bg-white p-5 shadow-sm ${review.offset > 0 ? 'hidden md:block' : ''}`}
            >
              <p className="text-xs font-semibold tracking-wide text-[#1a73e8]">Posted on Google</p>
              <p className="mt-3 text-sm leading-6 text-ink">{review.text}</p>
              <p className="mt-4 font-sans text-base font-semibold text-black">{review.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
