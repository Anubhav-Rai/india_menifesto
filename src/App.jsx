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
import SectionDivider from './components/SectionDivider'

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <SectionDivider variant="wave" fromColor="#e8f4fd" toColor="#fdf8ef" />
      <CoreClaim />
      <SectionDivider variant="curve" fromColor="#fdf8ef" toColor="#e8f4fd" />
      <Manifesto />
      <SectionDivider variant="wave" fromColor="#e8f4fd" toColor="#fdf8ef" />
      <SocialEngineering />
      <SectionDivider variant="diagonal" fromColor="#fdf8ef" toColor="#e8f4fd" />
      <Policies />
      <SectionDivider variant="curve" fromColor="#e8f4fd" toColor="#fdf8ef" />
      <Research />
      <SectionDivider variant="wave" fromColor="#fdf8ef" toColor="#e8f4fd" />
      <FAQ />
      <SectionDivider variant="diagonal" fromColor="#e8f4fd" toColor="#5ba3d9" />
      <Join />
      <SectionDivider variant="wave" fromColor="#5ba3d9" toColor="#fdf8ef" />
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
