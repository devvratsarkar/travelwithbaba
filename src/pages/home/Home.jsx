import { useMemo, useState } from 'react'
import AboutSection from '../../components/home/AboutSection'
import BlogSection from '../../components/home/BlogSection'
import DestinationSection from '../../components/home/DestinationSection'
import FeatureBar from '../../components/home/FeatureBar'
import HeroSection from '../../components/home/HeroSection'
import PopularTrips from '../../components/home/PopularTrips'
import ProcessSection from '../../components/home/ProcessSection'
import SearchSection from '../../components/home/SearchSection'
import TestimonialsSection from '../../components/home/TestimonialsSection'
import { trips } from '../../data/homeContent'

export default function HomePage() {
  const [query, setQuery] = useState('')
  const [activeQuery, setActiveQuery] = useState('')

  const visibleTrips = useMemo(() => {
    const term = activeQuery.trim().toLowerCase()
    if (!term) return trips
    return trips.filter((trip) => `${trip.title} ${trip.location}`.toLowerCase().includes(term))
  }, [activeQuery])

  function onSearch(value) {
    setActiveQuery(value)
    document.getElementById('trips')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <HeroSection />
      <SearchSection query={query} onQueryChange={setQuery} onSearch={onSearch} />
      <FeatureBar />
      <DestinationSection />
      <PopularTrips trips={visibleTrips} />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  )
}
