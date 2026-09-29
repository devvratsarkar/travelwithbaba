import logo from '../../assets/logo.webp'

export default function Logo({ className = 'h-20 w-20' }) {
  return <img src={logo} alt="Travel With Baba" className={`object-contain ${className}`} />
}
