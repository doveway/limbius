import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CollectionSection from './components/CollectionSection'
import BillingSection from './components/BillingSection'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CollectionSection />
      <BillingSection />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
