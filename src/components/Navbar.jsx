import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useMotionValueEvent, useScroll } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location])

  const scrollTo = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => scrollTo('home')}>
          <span className="logo-icon">&#9670;</span> The Indian Alloy Project
        </Link>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={() => scrollTo('home')}>Home</Link></li>
          <li><Link to="/" className="nav-link" onClick={() => scrollTo('manifesto')}>The Manifesto</Link></li>
          <li><Link to="/" className="nav-link" onClick={() => scrollTo('social-engineering')}>Social Engineering</Link></li>
          <li
            className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              className="nav-link dropdown-toggle"
              onClick={(e) => {
                e.preventDefault()
                setDropdownOpen(!dropdownOpen)
                scrollTo('policies')
              }}
              href="#policies"
            >
              Policies <span className="arrow">&#9662;</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#economy" onClick={() => scrollTo('economy')}>Economy</a></li>
              <li><a href="#food-agriculture" onClick={() => scrollTo('food-agriculture')}>Food &amp; Agriculture</a></li>
              <li><a href="#law-justice" onClick={() => scrollTo('law-justice')}>Law &amp; Justice</a></li>
              <li><a href="#transport-cities" onClick={() => scrollTo('transport-cities')}>Transport &amp; Cities</a></li>
              <li><a href="#aesthetics" onClick={() => scrollTo('aesthetics')}>Aesthetics &amp; Public Order</a></li>
              <li><a href="#finance" onClick={() => scrollTo('finance')}>Finance &amp; Anti-Corruption</a></li>
            </ul>
          </li>
          <li><Link to="/" className="nav-link" onClick={() => scrollTo('research')}>Research</Link></li>
          <li><Link to="/" className="nav-link" onClick={() => scrollTo('join')}>Join</Link></li>
          <li><Link to="/" className="nav-link btn-nav" onClick={() => scrollTo('donate')}>Donate</Link></li>
        </ul>
      </div>
    </nav>
  )
}
