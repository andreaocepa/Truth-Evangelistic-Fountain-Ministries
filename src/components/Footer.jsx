import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Users, Video, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="site-footer">
      {/* Wave top divider */}
      <div className="footer__wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,40 1440,50 L1440,100 L0,100 Z" fill="rgba(10, 22, 40, 0.5)" />
          <path d="M0,60 C320,10 640,90 960,40 C1200,0 1360,70 1440,30 L1440,100 L0,100 Z" fill="var(--bg-dark)" />
        </svg>
      </div>

      <div className="footer__content container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__brand">
              <img src="/images/logo (1)_1753292252843.jpg" alt="TEFM Logo" className="footer__logo" />
              <div>
                <h3 className="footer__brand-name">TEFM</h3>
                <p className="footer__brand-tagline">Truth Evangelistic Fountain Ministries</p>
              </div>
            </Link>
            <p className="footer__desc">
              Building Faithful Witnesses for Christ. Sharing the Blessings of Redemption since 2002.
            </p>
            <div className="footer__socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook" id="footer-facebook">
                <Users size={18} />
              </a>
              <a href="https://youtube.com/@truthfountaintv" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="YouTube" id="footer-youtube">
                <Video size={18} />
              </a>
              <a href="https://wa.me/256777776082" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp" id="footer-whatsapp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/ministries">Ministries</Link></li>
              <li><Link to="/events">Events & Services</Link></li>
              <li><Link to="/outreach">Outreach & Missions</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Ministries */}
          <div className="footer__col">
            <h4 className="footer__heading">Ministries</h4>
            <ul className="footer__links">
              <li><Link to="/ministries">Children of the Nations</Link></li>
              <li><Link to="/ministries">Crown of Glory</Link></li>
              <li><Link to="/ministries">Vocational Institute</Link></li>
              <li><Link to="/ministries">My Sister's Keeper</Link></li>
              <li><Link to="/ministries">Remnant Afire</Link></li>
              <li><Link to="/ministries">Eye Camp</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={16} className="footer__icon" />
                <span>Plot 1-3 Imat Maliam Road, Lira Municipality, Uganda</span>
              </li>
              <li>
                <Mail size={16} className="footer__icon" />
                <a href="mailto:truthfountain@gmail.com">truthfountain@gmail.com</a>
              </li>
              <li>
                <Phone size={16} className="footer__icon" />
                <a href="tel:+256777776082">+256 777 776 082</a>
              </li>
              <li>
                <Mail size={16} className="footer__icon" />
                <span>P.O. Box 382, Lira District</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Truth Evangelistic Fountain Ministries. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <Heart size={14} className="footer__heart" /> for the Kingdom
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top" id="scroll-to-top">
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
