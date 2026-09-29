import { useEffect, useRef } from 'react'
import { processSteps } from '../../data/homeContent'

function viewportPercent(element) {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const traveled = viewportHeight - rect.top
  const range = viewportHeight + element.offsetHeight
  const ratio = Math.max(0, Math.min(traveled / range, 1))
  return Number((ratio * 100).toFixed(2))
}

export default function ProcessSection() {
  const listRef = useRef(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktop = window.matchMedia('(min-width: 1025px)')
    let frame = 0

    const update = () => {
      frame = 0
      const active = desktop.matches && !reduceMotion.matches
      list.querySelectorAll('[data-step]').forEach((step) => {
        const motion = step.querySelector('[data-motion]')
        if (!motion) return
        if (!active) {
          motion.style.transform = ''
          return
        }
        const percent = viewportPercent(step)
        const x = -((percent - 50) * 4)
        motion.style.transform = `translateX(${x}px)`
      })
    }

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    desktop.addEventListener('change', requestUpdate)
    reduceMotion.addEventListener('change', requestUpdate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      desktop.removeEventListener('change', requestUpdate)
      reduceMotion.removeEventListener('change', requestUpdate)
    }
  }, [])

  return (
    <section className="bg-[#f8f8f8] py-11.5 overflow-hidden">
      <ul ref={listRef} className="custom_container grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-0">
        {processSteps.map((step) => (
          <li key={step.title} data-step className="min-w-0">
            <div data-motion className="flex flex-col gap-6 p-2.5 text-center transition-transform duration-100 ease-linear">
              <span className="mx-auto grid size-14.5 place-items-center rounded-full bg-gold text-black">
                <step.icon className="size-6.5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="mt-2 mb-3 font-sans text-base font-medium text-black sm:text-lg">{step.title}</h3>
                <p className="text-sm font-normal text-black sm:text-base">{step.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
