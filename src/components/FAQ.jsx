import { useState } from 'react'

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
      <div className="container">
        <h2 className="section-title center">Frequently Asked Questions</h2>
        <div className="faq-grid" style={{ marginTop: '48px' }}>
          {faqs.map((f, i) => (
            <div className={`faq-item ${openIdx === i ? 'open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                {f.q}
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
