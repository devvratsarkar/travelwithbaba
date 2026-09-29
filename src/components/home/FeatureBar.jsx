import { features } from '../../data/homeContent'

export default function FeatureBar() {
  return (
    <section className="bg-[#f8f8f8]">
      <ul className="custom_container grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <li key={feature.title} className="flex min-w-0 items-center justify-center gap-3 text-center lg:justify-start">
            <feature.icon className="size-7 shrink-0 text-gold sm:size-7.5" />
            <span className="font-sans text-sm font-medium text-balance text-feature">{feature.title}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
