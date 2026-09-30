import { features } from '../../data/homeContent'

export default function FeatureBar() {
  return (
    <section className="border-y border-black/5 bg-[#f7f9fc]">
      <ul className="custom_container grid grid-cols-1 gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="flex min-w-0 items-center gap-3 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-black/5"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fff6cc] text-[#b8860b]">
              <feature.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="font-sans text-sm leading-5 font-medium text-[#1d2939]">{feature.title}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
