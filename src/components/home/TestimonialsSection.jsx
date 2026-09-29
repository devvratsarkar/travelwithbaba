import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '../../data/homeContent'

const visibleOffsets = [0, 1, 2]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  function shift(next) {
    setDirection(next)
    setIndex((current) => (current + next + testimonials.length) % testimonials.length)
  }

  const cards = visibleOffsets.map((offset) => ({
    ...testimonials[(index + offset) % testimonials.length],
    offset,
  }))

  return (
    <section id="testimonials" className="scroll-mt-28 bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-285">
        <div className="mb-8 flex items-center justify-between gap-3">
          <h2 className="min-w-0 font-sans text-xl font-bold tracking-[-0.02em] text-black sm:text-2xl sm:leading-none">
            Client Testimonials
          </h2>
          <div className="flex shrink-0 gap-2.5">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => shift(-1)}
              className="grid size-9 place-items-center rounded-full border border-[#d5d5d5] bg-white text-[#222] transition hover:border-[#222]"
            >
              <FiChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => shift(1)}
              className="grid size-9 place-items-center rounded-full border border-[#d5d5d5] bg-white text-[#222] transition hover:border-[#222]"
            >
              <FiChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <ul
          key={index}
          data-dir={direction}
          aria-live="polite"
          className="testimonial-track grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((review) => (
            <li
              key={`${review.name}-${review.offset}`}
              className={`flex min-h-55 flex-col border border-[#e6e6e6] bg-white px-6 py-5 ${
                review.offset === 1 ? 'hidden md:flex' : ''
              } ${review.offset === 2 ? 'hidden lg:flex' : ''}`}
            >
              <p className="text-sm font-semibold text-[#1a73e8]">Posted on Google</p>
              <p className="mt-3.5 text-base text-[#222]">{review.text}</p>
              <p className="mt-5 font-sans text-base font-bold text-black">{review.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
