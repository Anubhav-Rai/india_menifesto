export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4><span className="logo-icon">&#9670;</span> The Indian Alloy Project</h4>
            <p>One people, many lineages, one future.</p>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#home" onClick={() => scrollTo('home')}>Home</a></li>
              <li><a href="#manifesto" onClick={() => scrollTo('manifesto')}>Manifesto</a></li>
              <li><a href="#social-engineering" onClick={() => scrollTo('social-engineering')}>How It Works</a></li>
              <li><a href="#policies" onClick={() => scrollTo('policies')}>Policies</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Involved</h4>
            <ul>
              <li><a href="#research" onClick={() => scrollTo('research')}>Research</a></li>
              <li><a href="#faq" onClick={() => scrollTo('faq')}>FAQ</a></li>
              <li><a href="#join" onClick={() => scrollTo('join')}>Volunteer</a></li>
              <li><a href="#donate" onClick={() => scrollTo('donate')}>Donate</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>info@indianalloy.org</p>
            <p className="footer-small">
              Faith is private. The state is civic.<br />Equal citizenship for all.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 The Indian Alloy Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
