import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <CoreClaim />
      <Manifesto />
      <SocialEngineering />
      <Policies />
      <Research />
      <FAQ />
      <Join />
      <Donate />
    </motion.div>
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
