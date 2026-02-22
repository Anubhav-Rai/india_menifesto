const buckets = [
  { icon: '★', title: 'Cleanliness Campaigns', desc: 'Fund local clean-up drives, bins, waste collection systems, and public hygiene awareness.' },
  { icon: '⚖', title: 'Legal Aid', desc: 'Support legal representation for caste and religious discrimination cases.' },
  { icon: '♥', title: 'School Nutrition Pilots', desc: 'Protein-first school meals, micronutrient fortification, and early-childhood nutrition programs.' },
  { icon: '◓', title: 'Transparency Tools', desc: 'Public dashboards tracking government spending, scheme outcomes, and civic metrics.' },
]

export default function Donate() {
  return (
    <section className="section section-light" id="donate">
      <div className="container">
        <h2 className="section-title center">Donate</h2>
        <p className="section-subtitle">
          Fund measurable civic order. Every rupee goes toward tangible programs.
        </p>
        <div className="donate-grid">
          {buckets.map((b, i) => (
            <div className="donate-card" key={i}>
              <div className="donate-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="donate-cta">
          <a href="mailto:donate@indianalloy.org" className="btn btn-primary btn-large">
            Contact Us to Donate
          </a>
        </div>
      </div>
    </section>
  )
}
