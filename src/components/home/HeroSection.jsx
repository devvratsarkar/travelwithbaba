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
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-5 pt-24 pb-16 md:px-4 md:py-8">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline src={heroVideo} />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex w-full max-w-285 flex-col items-center gap-6 px-1 text-center sm:gap-7">
        <h1 className="flex w-full max-w-280 flex-col items-center font-sans text-[clamp(2.15rem,8.5vw,3.75rem)] leading-[0.95] font-medium text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] md:block md:leading-[1.15]">
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
        <div className="flex w-full max-w-md flex-col gap-3 text-[15px] leading-6 font-normal text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:max-w-280 sm:gap-4 sm:text-base sm:leading-8">
          {heroParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
