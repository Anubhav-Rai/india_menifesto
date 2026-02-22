import { motion } from 'framer-motion'
import AnimatedSection, { itemVariants } from './AnimatedSection'

export default function Donate() {
  return (
    <section className="section section-light" id="donate">
      <AnimatedSection className="container">
        <motion.h2 className="section-title center" variants={itemVariants}>Donate</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Content coming soon.
        </motion.p>
      </AnimatedSection>
    </section>
  )
}
