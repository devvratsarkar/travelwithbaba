import MainLayout from '../components/layout/MainLayout.jsx'
import AboutPage from '../pages/about/AboutPage'
import ContactPage from '../pages/contact/ContactPage'
import PaymentPage from '../pages/payment/PaymentPage'
import TestimonialsPage from '../pages/testimonials/TestimonialsPage'
import HomePage from '../pages/home/Home'
import PackageDetailPage from '../pages/packages/PackageDetailPage'
import PackagesPage from '../pages/packages/PackagesPage'
import {
  getHomePageRoute,
} from './routes'

export const RouterData = [
  {
    element: <MainLayout />,
    children: [
      {
        path: getHomePageRoute(),
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/testimonials',
        element: <TestimonialsPage />,
      },
      {
        path: '/payment',
        element: <PaymentPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/packages',
        element: <PackagesPage />,
      },
      {
        path: '/packages/category/:category',
        element: <PackagesPage />,
      },
      {
        path: '/packages/:slug',
        element: <PackageDetailPage />,
      },
    ],
  },
]
