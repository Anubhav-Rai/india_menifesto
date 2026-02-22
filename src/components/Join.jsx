import { motion } from 'framer-motion'
import AnimatedSection, { itemVariants } from './AnimatedSection'

export default function Join() {
  return (
    <section className="section section-accent" id="join">
      <AnimatedSection className="container">
        <motion.h2 className="section-title center" variants={itemVariants}>Join the Movement</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Content coming soon.
        </motion.p>
      </AnimatedSection>
    </section>
  )
}
