import { motion } from 'framer-motion'
import AnimatedSection, { itemVariants } from './AnimatedSection'

const cards = [
  {
    num: '01',
    title: 'Citizenship is civic, identity is shared',
    body: (
      <>
        <p>
          We will treat citizenship as legal and equal for all, and we will build social
          cohesion through a shared-origin narrative rather than religious supremacy.
        </p>
        <p>
          The goal is a unifying story that <strong>includes</strong> Indian Muslims as full
          inheritors of the land&rsquo;s past and future, not tolerated outsiders; genetic
          studies show deep shared heritage between Indian Muslims and local non-Muslim
          populations.{' '}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2590854/" target="_blank" rel="noopener noreferrer">
            [source]
          </a>
        </p>
      </>
    ),
  },
  {
    num: '02',
    title: 'The Indian Alloy identity',
    body: (
      <>
        <p>
          India is an alloy: forged by multiple ancient streams that mixed on this land over
          millennia.
        </p>
        <p>
          We reject &ldquo;purity&rdquo; politics&mdash;caste purity, religious purity, and
          regional purity&mdash;because <strong>purity is a recipe for fragmentation</strong>.
        </p>
      </>
    ),
  },
  {
    num: '03',
    title: 'Social cohesion without myth wars',
    body: (
      <>
        <p>We will not demand uniform belief in religious stories.</p>
        <p>
          We will demand uniform commitment to <strong>civic standards</strong>: cleanliness,
          quiet, punctuality, lawfulness, and mutual respect.
        </p>
      </>
    ),
  },
]

export default function Manifesto() {
  return (
    <section className="section section-dark" id="manifesto">
      <AnimatedSection className="container">
        <motion.h2 className="section-title center" variants={itemVariants}>The Manifesto</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          India will not be rebuilt by arguments about gods, caste purity, or inherited status.
          India will be rebuilt by a new shared identity, civic discipline, and systems that
          reward competence and cooperation.
        </motion.p>
        <div className="manifesto-grid">
          {cards.map((c) => (
            <motion.div className="manifesto-card" key={c.num} variants={itemVariants}>
              <div className="card-number">{c.num}</div>
              <h3>{c.title}</h3>
              {c.body}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
