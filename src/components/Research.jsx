const studies = [
  {
    quote: 'India had a long period of broad mixture, followed by endogamy linked to caste group boundaries.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3769933/',
  },
  {
    quote: 'Substantial shared paternal heritage is observed across religious lines in India.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2590854/',
  },
  {
    quote: 'This movement does not use DNA to grant rights; it uses population history to reduce delusions of purity.',
    link: null,
  },
]

export default function Research() {
  return (
    <section className="section section-light" id="research">
      <div className="container">
        <h2 className="section-title center">Research &amp; Evidence</h2>
        <p className="section-subtitle">
          Our claims rest on published population genetics and history, not ideology.
        </p>
        <div className="research-grid">
          {studies.map((s, i) => (
            <div className="research-card" key={i}>
              <div className="research-quote">&ldquo;{s.quote}&rdquo;</div>
              {s.link && (
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="research-link">
                  Read the study &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="disclaimer">
          <strong>Disclaimer:</strong> We oppose discrimination based on caste, religion, language,
          or ancestry. We use history and genetics only to undermine false purity claims&mdash;not
          to rank people.
        </div>
      </div>
    </section>
  )
}
