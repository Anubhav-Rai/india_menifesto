import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection, { itemVariants } from './AnimatedSection'

const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Join() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section section-accent" id="join">
      <AnimatedSection className="container">
        <motion.h2 className="section-title center" variants={itemVariants}>Join the Movement</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Every hand counts. Here&rsquo;s how you can help build a new India.
        </motion.p>
        <div className="join-grid">
          <motion.div className="join-actions" variants={slideFromLeft}>
            <h3>What you can do</h3>
            <ul>
              <li>Run a local &ldquo;Quiet &amp; Clean&rdquo; drive with measured results.</li>
              <li>Mentor students for skills and placements.</li>
              <li>Help inter-caste couples access support services.</li>
              <li>Translate content into regional languages.</li>
            </ul>
          </motion.div>
          <motion.div className="join-form" variants={slideFromRight}>
            {submitted ? (
              <div className="form-success">
                Thank you for signing up! We&rsquo;ll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" required placeholder="Your city" />
                </div>
                <div className="form-group">
                  <label htmlFor="skills">Skills</label>
                  <input type="text" id="skills" placeholder="e.g., Design, Writing, Law, Tech" />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Weekly time available</label>
                  <select id="time">
                    <option value="">Select...</option>
                    <option value="1-2">1&ndash;2 hours</option>
                    <option value="3-5">3&ndash;5 hours</option>
                    <option value="5-10">5&ndash;10 hours</option>
                    <option value="10+">10+ hours</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="interest">Area of interest</label>
                  <select id="interest">
                    <option value="">Select...</option>
                    <option value="clean-drives">Quiet &amp; Clean drives</option>
                    <option value="mentoring">Student mentoring</option>
                    <option value="couples-support">Inter-caste couple support</option>
                    <option value="translation">Translation</option>
                    <option value="tech">Tech &amp; data</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Sign Up to Volunteer
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  )
}
