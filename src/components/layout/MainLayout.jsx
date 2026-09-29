import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import PrimaryHeader from './header/PrimaryHeader.jsx'

export default function MainLayout() {
  return (
    <div className="min-h-svh bg-white text-ink">
      <PrimaryHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
