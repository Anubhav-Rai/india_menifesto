import { motion } from 'framer-motion'
import AnimatedSection, { itemVariants } from './AnimatedSection'

export default function FAQ() {
  return (
    <section className="section section-dark" id="faq">
      <AnimatedSection className="container">
        <motion.h2 className="section-title center" variants={itemVariants}>Frequently Asked Questions</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Content coming soon.
        </motion.p>
      </AnimatedSection>
    </section>
  )
}
