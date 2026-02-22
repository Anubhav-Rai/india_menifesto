import { useState } from 'react'

export default function Join() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section section-accent" id="join">
      <div className="container">
        <h2 className="section-title center">Join the Movement</h2>
        <p className="section-subtitle">
          Every hand counts. Here&rsquo;s how you can help build a new India.
        </p>
        <div className="join-grid">
          <div className="join-actions">
            <h3>What you can do</h3>
            <ul>
              <li>Run a local &ldquo;Quiet &amp; Clean&rdquo; drive with measured results.</li>
              <li>Mentor students for skills and placements.</li>
              <li>Help inter-caste couples access support services.</li>
              <li>Translate content into regional languages.</li>
            </ul>
          </div>
          <div className="join-form">
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
          </div>
        </div>
      </div>
    </section>
  )
}
