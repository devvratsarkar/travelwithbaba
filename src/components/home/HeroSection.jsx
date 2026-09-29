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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden max-md:items-start">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline src={heroVideo} />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex w-full max-w-285 flex-col items-center gap-5 px-2.5 py-2.5 text-center max-md:mt-50">
        <h1 className="mt-2 mb-4 w-full max-w-280 font-sans text-[60px] leading-18 font-medium text-white">
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
        <div className="w-full max-w-280 text-base leading-8 font-normal text-white max-lg:text-sm">
          {heroParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
