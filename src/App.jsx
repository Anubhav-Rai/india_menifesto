import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoreClaim from './components/CoreClaim'
import Manifesto from './components/Manifesto'
import SocialEngineering from './components/SocialEngineering'
import Policies from './components/Policies'
import Research from './components/Research'
import FAQ from './components/FAQ'
import Join from './components/Join'
import Donate from './components/Donate'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <CoreClaim />
      <Manifesto />
      <SocialEngineering />
      <Policies />
      <Research />
      <FAQ />
      <Join />
      <Donate />
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}
