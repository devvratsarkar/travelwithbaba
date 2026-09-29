import { LuLuggage } from 'react-icons/lu'

export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex flex-col items-center text-white ${className}`}>
      <LuLuggage className="size-12" aria-hidden="true" />
      <span className="mt-1 text-[11px] font-medium tracking-[0.22em]">TRAVEL WITH BABA</span>
    </span>
  )
}
