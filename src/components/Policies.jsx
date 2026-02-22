import { motion } from 'framer-motion'
import AnimatedSection, { itemVariants } from './AnimatedSection'

export default function Policies() {
  return (
    <section className="section section-dark" id="policies">
      <AnimatedSection className="container">
        <motion.h2 className="section-title center" variants={itemVariants}>Policies</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Content coming soon.
        </motion.p>
      </AnimatedSection>
    </section>
  )
}
