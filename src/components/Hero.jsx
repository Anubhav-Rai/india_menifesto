import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home" ref={ref}>
      <motion.div className="hero-bg" style={{ y: bgY }} />
      <div className="hero-float-shape hero-float-shape--gold" />
      <div className="hero-float-shape hero-float-shape--green" />
      <motion.div
        className="container hero-content"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-tag" variants={fadeUp}>
          One people, many lineages, one future.
        </motion.p>
        <motion.h1 className="hero-title" variants={fadeUp}>
          A new Indian identity<br />&mdash;beyond caste.
        </motion.h1>
        <motion.p className="hero-desc" variants={fadeUp}>
          A movement for civic order, clean cities, quiet streets, fair opportunity,
          and a unifying story that includes every Indian&mdash;Hindu, Muslim, Christian,
          Sikh, atheist&mdash;without asking anyone to change their private faith.
        </motion.p>
        <motion.div className="hero-buttons" variants={fadeUp}>
          <button className="btn btn-primary" onClick={() => scrollTo('join')}>
            Join the Movement
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('manifesto')}>
            Read the Manifesto
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
