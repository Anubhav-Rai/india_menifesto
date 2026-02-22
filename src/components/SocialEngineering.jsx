import { motion } from 'framer-motion'
import AnimatedSection, { itemVariants } from './AnimatedSection'

export default function SocialEngineering() {
  return (
    <section className="section section-light" id="social-engineering">
      <AnimatedSection className="container">
        <motion.h2 className="section-title center" variants={itemVariants}>Social Engineering</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Content coming soon.
        </motion.p>
      </AnimatedSection>
    </section>
  )
}
