import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaLightbulb, FaMapMarkedAlt, FaPlaneDeparture, FaSuitcaseRolling } from 'react-icons/fa'
import { FiGift, FiHeadphones, FiMap, FiShield } from 'react-icons/fi'

const asset = (path) => `https://packurbags.in/wp-content/uploads/${path}`

export const heroVideo = asset('2025/04/Untitled-design-13.mp4')

export const heroLead = 'Dream. Explore.'

export const heroWords = ['Create.', 'Experience.', 'Achieve.', 'Discover.']

export const heroParagraphs = [
  'True discovery isn’t just about the places you go—it’s about how you see them.',
  'At Travel With Baba, we intend to reintroduce you to the world with new perspectives and stories worth telling.',
  'As the best travel agent in Bangalore, your passport to unforgettable journeys starts right here.',
]

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  {
    label: 'Packages',
    to: '/#trips',
    children: [
      { label: 'Group Trips', to: '/#trips' },
      { label: 'Honeymoon Packages', to: '/#trips' },
    ],
  },
  { label: 'Blog', to: '/#blog' },
  { label: 'Contact Us', to: '/#contact' },
]

export const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com', icon: FaYoutube },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF },
]

export const searchSuggestions = ['Andaman', 'Dandeli', 'Darjeeling', 'Dubai']

export const features = [
  { title: 'Personalized Itineraries', icon: FiMap },
  { title: '24/7 Traveler Support', icon: FiHeadphones },
  { title: 'Exclusive Access & Perks', icon: FiGift },
  { title: 'ATOL & ABTA Protected', icon: FiShield },
]

export const destinations = [
  { name: 'India', alt: 'tajmahal', image: asset('2025/04/1-819x1024.png') },
  { name: 'Malaysia', alt: 'image from plane window', image: asset('2025/04/Untitled-design-72.png') },
  { name: 'UAE', alt: 'tower from plane windoe', image: asset('2025/04/2.png') },
  { name: 'Thailand', alt: 'plane window image', image: asset('2025/04/5-819x1024.png') },
  { name: 'Vietnam', alt: 'aeroplane window', image: asset('2025/04/4-819x1024.png') },
  { name: 'Singapore', alt: 'view frim aeroplane window', image: asset('2025/04/3-819x1024.png') },
]

export const destinationMap = asset('2025/04/Untitled-design-71.png')

export const trips = [
  {
    title: 'Thailand Adventure',
    location: 'Asia, Thailand',
    duration: '5 Days',
    activities: '8 Activities',
    featured: true,
    image: asset('2025/03/grand-palace-1822487_1920-1536x592.jpg'),
  },
  {
    title: 'Shimla Manali Escape',
    location: 'Manali, Shimla',
    duration: '6 Days',
    activities: '7 Activities',
    featured: true,
    image: asset('2025/03/snowfall-shimla-2-1536x1024.jpg'),
  },
  {
    title: 'Lakshadweep Island Escape: 3 Nights/4 Days of Serenity and Adventure',
    location: 'Lakshadweep',
    duration: '4 Days',
    activities: '6 Activities',
    featured: true,
    image: asset('2025/03/beautiful-tropical-island-zanzibar-aerial-view-sea-zanzibar-beach-tanzania-1536x1023.jpg'),
  },
  {
    title: 'Royal Rajasthan Escape: 5 Nights/6 Days of Heritage, Culture, and Luxury',
    location: 'India, Rajasthan',
    duration: '6 Days',
    activities: '5 Activities',
    featured: true,
    image: asset('2025/03/sea-beach-hotel-habitat-species-landscape-india-design-pool-1536x1024.jpg'),
  },
  {
    title: 'Vietnam Explorer: 7-Day Cultural and Scenic Journey',
    location: 'Asia, Vietnam',
    duration: '7 Days',
    activities: '9 Activities',
    featured: true,
    image: asset('2025/03/traditional-boats-front-ancient-architecture-hoi-vietnam-1536x1024.jpg'),
  },
  {
    title: 'Dandeli Adventure: 2-Day Jungle Safari & Water Activities Escape',
    location: 'Dandeli, India',
    duration: '2 Days',
    activities: '9 Activities',
    featured: true,
    image: asset('2025/03/tourists-camping-with-tent-near-fire-forest-1536x861.jpg'),
  },
  {
    title: 'Maldives',
    location: 'Maldives, Maldives',
    duration: '6 Days',
    activities: '6 Activities',
    featured: false,
    image: asset('2025/11/beach-666122_1920-1536x1028.jpg'),
  },
  {
    title: 'Majestic Kashmir: 5N/6D Scenic Escape with Gulmarg Gondola & Houseboat Stay',
    location: 'Asia, India, Kashmir',
    duration: '6 Days',
    activities: '6 Activities',
    featured: false,
    image: asset('2025/05/beautiful-winter-landscape-with-snow-mountains-icy-water-1-1536x1024.jpg'),
  },
  {
    title: 'Ladakh X-treme Bike Expedition with Travel With Baba',
    location: 'Asia, India, Ladakh',
    duration: '1 Day',
    activities: '9 Activities',
    featured: false,
    image: asset('2025/05/ladakh-DSC06593-1536x1024.jpg'),
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
    name: 'Divyashree R',
    text: 'We booked the Kashmir package with them. We had a wonderful experience with this team. They are a great team with good accommodations and food. They guided us very well and took good care of us.',
  },
  {
    name: 'Bhuvana Raj',
    text: 'We booked a 5 day trip to Kashmir through a friend’s recommendation. All through our trip, every event was organised day wise and hour wise. We visited Gulmarg, Pahalgam, Sonmarg, and Srinagar.',
  },
  {
    name: 'Ashik E',
    text: 'Special thanks for helping me travel to Kashmir. Throughout the journey the team stayed in touch every day. Kudos!',
  },
  {
    name: 'Shradda P',
    text: 'From start to finish, everything was seamless. I truly appreciate the effort and care that made our Kashmir trip special. I am looking forward to choosing this agency for future travels.',
  },
]

export const posts = [
  {
    title: 'Best International Holiday Destinations for 2026: Where Should You Travel Next?',
    date: '2026-09-25',
    excerpt:
      'Find the best international holiday destinations for 2026 including Thailand, Bali, Vietnam, and more. Budget tips and real travel advice for Indian travelers.',
    image: asset('2026/08/image_0-14.png'),
  },
  {
    title: 'Vietnam Travel Guide 2026: Best Places to Visit, Visa Tips, and Real Travel Costs',
    date: '2026-09-22',
    excerpt:
      'Planning your Vietnam trip? This Vietnam travel guide covers the best places to visit in 2026, visa requirements, real costs, and insider tips.',
    image: asset('2026/08/image_0-13.png'),
  },
  {
    title: 'Maldives Islands Travel Guide: Best Atolls and Resorts for Your 2026 Trip',
    date: '2026-09-19',
    excerpt:
      'Plan your Maldives trip right. Best islands, atolls, resorts, and island hopping tips from travel experts. Book smart, dive better.',
    image: asset('2026/08/image_0-12.png'),
  },
]

export const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'All Trips', to: '/#trips' },
  {
    label: 'Trip Types',
    children: [
      { label: 'Nature Friendly', to: '/#trips' },
      { label: 'Child-friendly', to: '/#trips' },
      { label: 'Cultural', to: '/#trips' },
      { label: 'Budget Travel', to: '/#trips' },
      { label: 'Home Stay', to: '/#trips' },
    ],
  },
  { label: 'Blog', to: '/#blog' },
  { label: 'Pages', to: '/#about' },
  { label: 'India', to: '/#destinations' },
  { label: 'Hiking', to: '/#trips' },
  { label: 'Rafting', to: '/#trips' },
]
