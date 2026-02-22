import { motion } from 'framer-motion'
import AnimatedSection, { itemVariants } from './AnimatedSection'

const buckets = [
  { icon: '★', title: 'Cleanliness Campaigns', desc: 'Fund local clean-up drives, bins, waste collection systems, and public hygiene awareness.' },
  { icon: '⚖', title: 'Legal Aid', desc: 'Support legal representation for caste and religious discrimination cases.' },
  { icon: '♥', title: 'School Nutrition Pilots', desc: 'Protein-first school meals, micronutrient fortification, and early-childhood nutrition programs.' },
  { icon: '◓', title: 'Transparency Tools', desc: 'Public dashboards tracking government spending, scheme outcomes, and civic metrics.' },
]

export default function Donate() {
  return (
    <section className="section section-light" id="donate">
      <AnimatedSection className="container">
        <motion.h2 className="section-title center" variants={itemVariants}>Donate</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Fund measurable civic order. Every rupee goes toward tangible programs.
        </motion.p>
        <div className="donate-grid">
          {buckets.map((b, i) => (
            <motion.div className="donate-card" key={i} variants={itemVariants}>
              <div className="donate-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div className="donate-cta" variants={itemVariants}>
          <a href="mailto:donate@indianalloy.org" className="btn btn-primary btn-large">
            Contact Us to Donate
          </a>
        </motion.div>
      </AnimatedSection>
    </section>
  )
}
