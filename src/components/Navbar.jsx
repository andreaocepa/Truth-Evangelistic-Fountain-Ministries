import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/ministries', label: 'Ministries' },
  { path: '/events', label: 'Events' },
  { path: '/outreach', label: 'Outreach' },
  { path: '/projects', label: 'Projects' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__brand" id="navbar-brand">
          <img
            src="/images/logo (1)_1753292252843.jpg"
            alt="TEFM Logo"
            className="navbar__logo"
          />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">TEFM</span>
            <span className="navbar__brand-tagline">Truth Evangelistic Fountain Ministries</span>
          </div>
        </Link>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          <div className="navbar__links-inner">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
                id={`nav-link-${label.toLowerCase()}`}
              >
                {label}
                <span className="navbar__link-indicator" />
              </Link>
            ))}
            <Link to="/contact" className="btn btn-accent navbar__cta" id="nav-cta">
              Join Us
            </Link>
          </div>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="navbar-toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="navbar__overlay" onClick={() => setMobileOpen(false)} />
      )}
    </nav>
  );
}
