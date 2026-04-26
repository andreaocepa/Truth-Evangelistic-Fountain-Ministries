import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Users, Video, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/ministries', label: 'Ministries' },
  { path: '/events', label: 'Events' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/outreach', label: 'Outreach' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="site-footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">

            {/* Brand */}
            <div className="footer__brand-col">
              <Link to="/" className="footer__brand" id="footer-brand">
                <img src="/images/logo (1)_1753292252843.jpg" alt="Ministry Logo" className="footer__logo" />
                <div>
                  <span className="footer__brand-tagline">Truth Evangelistic Fountain Ministries</span>
                </div>
              </Link>
              <p className="footer__desc">
                Building Faithful Witnesses for Christ since 2002. Transforming lives through the Gospel across Uganda and beyond.
              </p>
              <div className="footer__socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook" id="footer-facebook">
                  <Users size={16} />
                </a>
                <a href="https://youtube.com/@truthfountaintv" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="YouTube" id="footer-youtube">
                  <Video size={16} />
                </a>
                <a href="https://wa.me/256777776082" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="WhatsApp" id="footer-whatsapp">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__links-col">
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__links">
                {quickLinks.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__contact-col">
              <h4 className="footer__heading">Get In Touch</h4>
              <ul className="footer__contact-list">
                <li>
                  <MapPin size={15} />
                  <span>Plot 1–3 Imat Maliam Rd, Lira, Uganda</span>
                </li>
                <li>
                  <Mail size={15} />
                  <a href="mailto:truthfountain@gmail.com">truthfountain@gmail.com</a>
                </li>
                <li>
                  <Phone size={15} />
                  <a href="tel:+256777776082">+256 777 776 082</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} Truth Evangelistic Fountain Ministries. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <Heart size={13} className="footer__heart" /> for the Kingdom
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top" id="scroll-to-top">
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
