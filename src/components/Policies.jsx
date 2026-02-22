import { useState } from 'react'

const policies = [
  {
    id: 'economy',
    title: 'Economic Policy',
    goal: 'High-productivity, high-trust capitalism with a strong safety net.',
    items: [
      <><strong>Jobs:</strong> Manufacturing clusters, logistics corridors, apprenticeship-first skilling.</>,
      <><strong>Cities:</strong> Zoning simplification, fast permits, enforceable building codes.</>,
      <><strong>Welfare:</strong> Direct cash + nutrition; reduce leakage through digitization and audits.</>,
      <><strong>Human capital:</strong> Universal early-childhood nutrition, strong public schools, merit scholarships.</>,
    ],
  },
  {
    id: 'finance',
    title: 'Finance & Anti-Corruption',
    goal: 'Stable money, clean credit, honest taxation.',
    items: [
      <><strong>Tax:</strong> Fewer slabs, simpler compliance, ruthless action on evasion.</>,
      <><strong>Credit access:</strong> MSME credit guarantees tied to invoice trails, not connections.</>,
      <><strong>Public spending:</strong> Outcome-based budgeting; publish dashboards for every scheme.</>,
      <><strong>Anti-corruption:</strong> Time-bound services, &ldquo;deemed approval&rdquo; where safe, public procurement transparency.</>,
    ],
  },
  {
    id: 'food-agriculture',
    title: 'Food & Agriculture',
    goal: 'Cheap, safe, nutritious food without wrecking soil and water.',
    items: [
      <><strong>Nutrition:</strong> Protein and micronutrient focus; upgrade school meals, fortification where appropriate.</>,
      <><strong>Food safety:</strong> Strict testing, cold-chain expansion, clean street-food zones with licensing.</>,
      <><strong>Farmer income:</strong> Diversify beyond water-heavy crops, better price discovery, storage and transport.</>,
      <><strong>Water:</strong> Meter where possible, incentivize drip irrigation, protect aquifers.</>,
    ],
  },
  {
    id: 'law-justice',
    title: 'Law Enforcement & Justice',
    goal: 'Order with dignity.',
    items: [
      <><strong>Community policing:</strong> Beat accountability, response-time targets, body cams where lawful.</>,
      <><strong>Swift justice:</strong> Expand fast-track courts for violent crime and corruption.</>,
      <><strong>Public order:</strong> Enforce noise rules, illegal encroachment removal with due process.</>,
      <><strong>Prison reform:</strong> Decongest, skills inside prisons, reduce repeat offenses.</>,
    ],
  },
  {
    id: 'transport-cities',
    title: 'Transportation & Cities',
    goal: 'Move people and goods fast, safely, and quietly.',
    items: [
      <><strong>Public transport first:</strong> Buses + metros + safe walking/cycling.</>,
      <><strong>Road discipline:</strong> Strict lane enforcement, camera-based fines, blackspot redesigns.</>,
      <><strong>Freight:</strong> Truck logistics parks, night freight corridors, rail freight upgrades.</>,
      <><strong>Last-mile:</strong> Footpaths that actually work, universal ramps, shaded streets.</>,
    ],
  },
  {
    id: 'aesthetics',
    title: 'Aesthetics & Public Order',
    goal: 'A beautiful India as a signal of self-respect.',
    items: [
      <><strong>Cleanliness as enforcement:</strong> Fines for littering, but also bins, collection, and predictable schedules.</>,
      <><strong>Noise:</strong> Decibel enforcement, festival permits with time limits, silence zones near hospitals/schools.</>,
      <><strong>Visual order:</strong> Signage standards, underground cabling targets, fa&ccedil;ade guidelines on key streets.</>,
      <><strong>Public spaces:</strong> Parks, toilets, lighting, benches; maintain like critical infrastructure.</>,
    ],
  },
]

export default function Policies() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <section className="section section-dark" id="policies">
      <div className="container">
        <h2 className="section-title center">Policies</h2>
        <p className="section-subtitle">
          Concrete plans across six domains. Click each to expand.
        </p>
        <div className="policy-accordion">
          {policies.map((p) => (
            <div
              className={`policy-item ${openId === p.id ? 'open' : ''}`}
              key={p.id}
              id={p.id}
            >
              <button className="policy-header" onClick={() => toggle(p.id)}>
                <span className="policy-icon">&#9670;</span>
                <span>{p.title}</span>
                <span className="policy-toggle">+</span>
              </button>
              <div className="policy-body">
                <p className="policy-goal"><strong>Goal:</strong> {p.goal}</p>
                <ul>
                  {p.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
