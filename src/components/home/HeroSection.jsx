import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { heroLead, heroParagraphs, heroVideo, heroWords } from '../../data/homeContent'

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [previous, setPrevious] = useState(null)
  const [width, setWidth] = useState(0)
  const flipRef = useRef(null)

  useLayoutEffect(() => {
    const active = flipRef.current?.querySelector('.is-active')
    if (!active) return
    setWidth(active.scrollWidth)
  }, [index])

  useEffect(() => {
    const measure = () => {
      const active = flipRef.current?.querySelector('.is-active')
      if (active) setWidth(active.scrollWidth)
    }
    document.fonts.ready.then(measure)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => {
        setPrevious(current)
        return (current + 1) % heroWords.length
      })
    }, 2500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 max-md:items-start max-md:pt-28">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline src={heroVideo} />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex w-full max-w-285 flex-col items-center gap-4 px-2 py-8 text-center sm:gap-5 sm:py-10">
        <h1 className="mb-2 flex w-full max-w-280 flex-col items-center gap-1 font-sans text-[clamp(2rem,7vw,3.75rem)] leading-none font-medium text-white md:block md:leading-[1.15]">
          {heroLead}{' '}
          <span ref={flipRef} className="headline-flip" style={width ? { width } : undefined}>
            {heroWords.map((word, wordIndex) => {
              const state =
                wordIndex === index
                  ? previous === null
                    ? 'is-active'
                    : 'is-active is-in'
                  : wordIndex === previous
                    ? 'is-out'
                    : 'is-idle'
              return (
                <span key={word} className={state}>
                  {word}
                </span>
              )
            })}
          </span>
        </h1>
        <div className="w-full max-w-280 text-sm leading-6 font-normal text-white sm:text-base sm:leading-8">
          {heroParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
