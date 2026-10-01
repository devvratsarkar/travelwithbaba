import { FaFacebookF, FaInstagram, FaLightbulb, FaMapMarkedAlt, FaPlaneDeparture, FaSuitcaseRolling, FaYoutube } from 'react-icons/fa'
import { FiGift, FiHeadphones, FiMap, FiShield } from 'react-icons/fi'
import { packageCategories } from './packages'

const asset = (path) => `https://packurbags.in/wp-content/uploads/${path}`

export const heroVideo = asset('2025/04/Untitled-design-13.mp4')

export const heroLead = 'Dream. Explore.'

export const heroWords = ['Varanasi.', 'Sarnath.', 'Bodhgaya.', 'Prayagraj.']

export const heroParagraphs = [
  'Passport and visa services in Varanasi, with travel insurance, hotel booking, and tours across India.',
  'Travel with Baba plans heritage trips, pilgrimages, and customized holidays at affordable prices.',
  'Flights, rail tickets, cars, and hotel stays, arranged from Varanasi with Mr Shiv and the team.',
]

export const contact = {
  person: 'Mr Shiv',
  role: 'CEO',
  address: 'Varanasi, Uttar Pradesh, India',
  phone: '+91 8707238117',
  phoneHref: 'tel:+918707238117',
  phones: [
    { label: '+91 8707238117', href: 'tel:+918707238117' },
    { label: '+91 9532371554', href: 'tel:+919532371554' },
  ],
  email: 'bhartibhole826@gmail.com',
  emails: ['bhartibhole826@gmail.com', 'travelwithbabaa@gmail.com'],
  whatsapp:
    'https://api.whatsapp.com/send?phone=918707238117&text=Hello!%20I%20found%20your%20website%20and%20am%20interested%20in%20your%20packages.',
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Packages',
    to: '/packages',
    children: packageCategories.map((category) => ({
      label: category.label,
      to: `/packages/category/${category.slug}`,
      group: category.group,
    })),
  },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Payment', to: '/payment' },
  { label: 'Contact Us', to: '/contact' },
]

export const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com', icon: FaYoutube },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF },
]

export const searchSuggestions = ['Varanasi', 'Sarnath', 'Bodhgaya', 'Prayagraj']

export const features = [
  { title: 'Personalized Itineraries', icon: FiMap },
  { title: '24/7 Traveler Support', icon: FiHeadphones },
  { title: 'Hotel & Flight Booking', icon: FiGift },
  { title: 'Travel Insurance', icon: FiShield },
]

export const destinations = [
  { name: 'Varanasi', alt: 'Varanasi', image: asset('2025/04/1-819x1024.png') },
  { name: 'Sarnath', alt: 'Sarnath', image: asset('2025/04/Untitled-design-72.png') },
  { name: 'Mirzapur', alt: 'Mirzapur', image: asset('2025/04/2.png') },
  { name: 'Bodhgaya', alt: 'Bodhgaya', image: asset('2025/04/5-819x1024.png') },
  { name: 'Ramnagar', alt: 'Ramnagar', image: asset('2025/04/4-819x1024.png') },
  { name: 'Prayagraj', alt: 'Prayagraj', image: asset('2025/04/3-819x1024.png') },
]

export const destinationMap = asset('2025/04/Untitled-design-71.png')

const pkg = (id) => `https://ttw.wlimg.com/package-images/photo-big/dir_73/2185031/${id}.jpg`

export const trips = [
  {
    title: '3 Days Varanasi And Durga Temple Tour',
    location: 'Varanasi, Durga Temple',
    duration: '2 Nights / 3 Days',
    activities: 'Sightseeing',
    featured: true,
    image: pkg('479721'),
    slug: '3-days-varanasi-and-durga-temple-tour',
  },
  {
    title: '1 Days Varanasi - Durga Temple And Vishwanath Temple Tour',
    location: 'Varanasi, Kashi Vishwanath Temple, Ramnagar Fort',
    duration: '1 Day',
    activities: 'Pilgrimage',
    featured: true,
    image: pkg('479720'),
    slug: '1-days-varanasi-durga-temple-and-vishwanath-temple-tour',
  },
  {
    title: '4 Days Mirzapur - Varanasi And Durga Temple Tour',
    location: 'Mirzapur, Varanasi, Durga Temple',
    duration: '3 Nights / 4 Days',
    activities: 'Sightseeing',
    featured: true,
    image: pkg('479719'),
    slug: '4-days-mirzapur-varanasi-and-durga-temple-tour',
  },
  {
    title: '5 Days Varanasi - Bodhgaya And Prayagraj Tour',
    location: 'Prayagraj, Varanasi, Bodhgaya, Sarnath, Gaya',
    duration: '4 Nights / 5 Days',
    activities: 'Pilgrimage',
    featured: true,
    image: pkg('479718'),
    slug: '5-days-varanasi-bodhgaya-and-prayagraj-tour',
  },
  {
    title: '1 Days Sarnath Tour Package',
    location: 'Sarnath',
    duration: '1 Day',
    activities: 'Sightseeing',
    featured: false,
    image: pkg('479717'),
    slug: '1-days-sarnath-tour-package',
  },
  {
    title: '1 Days Ramnagar Fort Tour',
    location: 'Ramnagar, Ramnagar Fort',
    duration: '1 Day',
    activities: 'Sightseeing',
    featured: false,
    image: pkg('479720'),
  },
]

export const processSteps = [
  {
    title: '1. Inspire & Connect',
    text: 'Share your travel dreams during a personal consultation.',
    icon: FaLightbulb,
  },
  {
    title: '2. Tailor & Plan',
    text: 'We craft a unique itinerary based on your preferences.',
    icon: FaMapMarkedAlt,
  },
  {
    title: '3. Book & Prepare',
    text: 'We handle all bookings and provide pre-travel support.',
    icon: FaPlaneDeparture,
  },
  {
    title: '4. Travel & Enjoy',
    text: 'Embark on your adventure with 24/7 assistance.',
    icon: FaSuitcaseRolling,
  },
]

export const aboutImage = asset('2025/04/Untitled-design-41-768x768.png')

export const aboutRoute = 'https://wptravelenginedemo.com/travel-monster/wp-content/uploads/sites/22/2022/09/bg-item.png'

export const aboutPlanes = 'https://wptravelenginedemo.com/travel-monster/wp-content/uploads/sites/22/2022/09/planes.png'

export const testimonials = [
  {
    name: '02 Mar 2026',
    text: 'I was reaching out to hundreds of travel agents in the past one year to get exclusive travel deals. I came in contact with this agent through my relative. And surprisingly, they offered me the best travel package including complete itinerary and other additional facilities such as car transfer, sightseeing, accommodation, and others.',
  },
  {
    name: '12 Mar 2026',
    text: 'Traveling is my passion. So, I always remain in search of the best travel deals. And, thus I hunt for reliable travel agents that offer the best deals in the market. I found this company while browsing different websites and it caught my attention as it was offering a 3 day and 4 night package at very reasonable prices. Since then, I recommend this website to everyone.',
  },
  {
    name: '19 Mar 2026',
    text: 'We are looking for a travel agent that provides tour packages to exotic locations. I am really glad that I found this organization. Unlike others, it has genuine connections and thus it offers interesting packages. I would genuinely like to recommend this company to everyone.',
  },
]

export const footerLinks = [
  {
    label: 'Trip types',
    children: [
      { label: 'Culture & Heritage', to: '/#trips' },
      { label: 'Religious & Pilgrimage', to: '/#trips' },
      { label: 'Monuments & History', to: '/#trips' },
      { label: 'Sightseeing', to: '/#trips' },
      { label: 'Boating', to: '/#trips' },
    ],
  },
]
