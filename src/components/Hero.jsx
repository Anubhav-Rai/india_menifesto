export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="container hero-content">
        <p className="hero-tag">One people, many lineages, one future.</p>
        <h1 className="hero-title">
          A new Indian identity<br />&mdash;beyond caste.
        </h1>
        <p className="hero-desc">
          A movement for civic order, clean cities, quiet streets, fair opportunity,
          and a unifying story that includes every Indian&mdash;Hindu, Muslim, Christian,
          Sikh, atheist&mdash;without asking anyone to change their private faith.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollTo('join')}>
            Join the Movement
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('manifesto')}>
            Read the Manifesto
          </button>
        </div>
      </div>
    </section>
  )
}
