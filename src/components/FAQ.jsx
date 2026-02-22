import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { itemVariants } from './AnimatedSection'

const faqs = [
  {
    q: 'Are you anti-Hindu or anti-religion?',
    a: 'No. Faith is private; the state is civic. We protect every citizen\'s right to worship while keeping governance secular and equal.',
  },
  {
    q: 'Do you want to classify citizens by DNA?',
    a: 'No. No rights are based on DNA. DNA is used to debunk purity myths and show that Indians share deep common ancestry.',
  },
  {
    q: 'How is this different from "blood and soil" nationalism?',
    a: 'We reject supremacy. We build unity through shared origin plus equal law. No group is ranked above another.',
  },
  {
    q: 'What about minorities and immigrants?',
    a: 'Equal citizenship and equal protection for everyone. No citizen is "guest" or "owner" based on religion or origin.',
  },
  {
    q: 'How will you actually reduce caste discrimination?',
    a: 'Through incentive-based programs: inter-caste scholarships, surname-neutral hiring, skill-based pipelines, anti-discrimination enforcement, and a new civic identity that replaces caste pride with city and competence pride.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="section section-dark" id="faq">
      <AnimatedSection className="container">
        <motion.h2 className="section-title center" variants={itemVariants}>Frequently Asked Questions</motion.h2>
        <motion.div className="faq-grid" style={{ marginTop: '48px' }} variants={itemVariants}>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                {f.q}
                <motion.span
                  className="faq-toggle"
                  animate={{ rotate: openIdx === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden', maxHeight: 'none' }}
                  >
                    <p style={{ paddingBottom: 20 }}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </AnimatedSection>
    </section>
  )
}
