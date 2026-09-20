import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProofBar } from './components/ProofBar'
import { Services } from './components/Services'
import { RevenueLeaks } from './components/RevenueLeaks'
import { CaseStudies } from './components/CaseStudies'
import { LiveProjects } from './components/LiveProjects'
import { SuccessStories } from './components/SuccessStories'
import { VideoTestimonials } from './components/VideoTestimonials'
import { SalesVideos } from './components/SalesVideos'
import { Niches } from './components/Niches'
import { Studio } from './components/Studio'
import { ContactCta } from './components/ContactCta'
import { Footer } from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <ProofBar />
        <Services />
        <RevenueLeaks />
        <CaseStudies />
        <LiveProjects />
        <SuccessStories />
        <VideoTestimonials />
        <SalesVideos />
        <Niches />
        <Studio />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
