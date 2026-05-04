import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Users, Video, Clock, Send, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for inquiries, prayer requests, partnership opportunities, or just to say hello."
        backgroundImage="/images/IMG_4921.jpg_1771869961088.jpeg"
        height="70vh"
        breadcrumb="Contact"
      />

      <section className="section" id="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <ScrollReveal direction="left" className="contact-info">
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title">We're Here For You</h2>
              <p className="contact-info__desc">
                Whether you need prayer, want to partner with us, or have questions about our ministry, 
                don't hesitate to reach out. We respond to all inquiries promptly.
              </p>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4>Our Location</h4>
                    <p>Plot 1-3 Imat Maliam Road & Plot 126 Aloi Road</p>
                    <p>Lira Municipality, Uganda</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:truthfountain@gmail.com">truthfountain@gmail.com</a>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4>Phone / WhatsApp</h4>
                    <a href="tel:+256777776082">+256 777 776 082</a>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4>Postal Address</h4>
                    <p>P.O. Box 382, Central Division, Lira District</p>
                  </div>
                </div>
              </div>

              <div className="contact-info__socials">
                <h4>Follow Us</h4>
                <div className="contact-info__social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" id="contact-fb">
                    <Users size={20} /> Facebook
                  </a>
                  <a href="https://youtube.com/@truthfountaintv" target="_blank" rel="noopener noreferrer" className="contact-social-btn" id="contact-yt">
                    <Video size={20} /> YouTube
                  </a>
                  <a href="https://wa.me/256777776082" target="_blank" rel="noopener noreferrer" className="contact-social-btn" id="contact-wa">
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <form className="contact-form glass-card" onSubmit={handleSubmit} id="contact-form">
                <h3 className="contact-form__title">Send Us a Message</h3>

                {submitted && (
                  <div className="contact-form__success">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                <div className="contact-form__group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-accent contact-form__submit" id="contact-submit">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="section contact-services" id="contact-services">
        <div className="container section-centered">
          <ScrollReveal>
            <span className="section-label" style={{ justifyContent: 'center' }}>Visit Us</span>
            <h2 className="section-title">Weekly Programs</h2>
          </ScrollReveal>
          <div className="contact-services__grid">
            {[
              { day: 'Sunday', time: '7:00 AM – 9:00 AM', name: '1st Service' },
              { day: 'Sunday', time: '9:00 AM – 11:30 AM', name: '2nd Service' },
              { day: 'Wednesday', time: '9:00 AM – 4:00 PM', name: "Women's Program" },
              { day: 'Wednesday', time: '5:00 PM – 6:30 PM', name: 'Youth Service' },
              { day: 'Wednesday', time: 'Evening Program', name: "Widows' Overnight" },
              { day: 'Thursday', time: '4:00 PM – 6:30 PM', name: 'Mid-week Deliverance' },
              { day: 'Friday', time: '9:00 PM till dawn', name: 'Overnight Prayers' },
            ].map((svc, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <div className="contact-svc glass-card">
                  <Clock size={24} className="contact-svc__icon" />
                  <h4>{svc.day}</h4>
                  <p className="contact-svc__name">{svc.name}</p>
                  <p className="contact-svc__time">{svc.time}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
