const sections = [
  {
    icon: 'A',
    title: 'The Identity Swap: Caste → Alloy',
    desc: null,
    items: [
      <><strong>National messaging:</strong> &ldquo;Same land. Shared origins. Same future.&rdquo;</>,
      <><strong>Public metrics:</strong> Shift surveys from &ldquo;What caste are you?&rdquo; to &ldquo;What city do you serve?&rdquo; and &ldquo;What skills do you build?&rdquo;</>,
      <><strong>Role models:</strong> Celebrate inter-caste families, mixed communities, and merit-first institutions.</>,
    ],
  },
  {
    icon: 'B',
    title: 'The Caste Exit Ramps',
    desc: 'Caste persists because it provides matchmaking networks, jobs, and protection. Replace those functions:',
    items: [
      'Universal civic matchmaking platforms (optional, privacy-first).',
      'Skill-based hiring pipelines that bypass family networks.',
      'Community insurance and mutual-aid that is not caste-gated.',
    ],
  },
  {
    icon: 'C',
    title: 'The Endogamy Breaker',
    desc: (
      <>
        Voluntary, incentive-based. Genetic clustering intensified when endogamy hardened.{' '}
        <a href="https://www.eurekalert.org/news-releases/557047" target="_blank" rel="noopener noreferrer">[source]</a>
      </>
    ),
    items: [
      'Scholarships and housing priority for inter-caste couples (opt-in).',
      '"Surname-neutral" admissions and hiring where feasible.',
      'Anti-discrimination enforcement for housing and employment.',
    ],
  },
  {
    icon: 'D',
    title: 'A New Canon',
    desc: 'You cannot remove an identity vacuum; you must fill it.',
    items: [
      'City pride over caste pride.',
      'Engineer/doctor/teacher pride over birth pride.',
      'Cleanliness and silence as patriotism.',
    ],
  },
  {
    icon: 'E',
    title: 'Language & Symbols',
    desc: null,
    items: [
      'Keep symbols that unite; retire symbols used mainly to exclude.',
      'Emphasize shared civilizational achievements (urban planning, trade, science) over sectarian conquest narratives.',
    ],
  },
]

export default function SocialEngineering() {
  return (
    <section className="section section-light" id="social-engineering">
      <div className="container">
        <h2 className="section-title center">Social Engineering</h2>
        <p className="section-subtitle">
          How we dismantle caste identity and build a shared civic identity&mdash;without force,
          through incentives, education, and culture.
        </p>
        <div className="se-grid">
          {sections.map((s) => (
            <div className="se-card" key={s.icon}>
              <div className="se-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              {s.desc && <p>{s.desc}</p>}
              <ul>
                {s.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
