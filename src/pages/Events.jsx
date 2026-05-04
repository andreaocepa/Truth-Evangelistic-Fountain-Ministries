import { Clock, Calendar, MapPin, Users, Star, Zap, Flame, Heart } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import WeeklyPrograms from '../components/WeeklyPrograms';
import './Events.css';

const services = [
  { day: 'Sunday', time: '7:00 AM – 9:00 AM', name: '1st Service', desc: 'A powerful time of praise, worship, and the preaching of the Word.', icon: Star },
  { day: 'Sunday', time: '9:00 AM – 11:30 AM', name: '2nd Service', desc: 'A continuation of our Sunday celebration with deep spiritual insights.', icon: Star },
  { day: 'Wednesday', time: '9:00 AM – 4:00 PM', name: "Women's Program", desc: 'A dedicated time for women to grow, share and pray together.', icon: Heart },
  { day: 'Wednesday', time: '5:00 PM – 6:30 PM', name: 'Youth Service', desc: 'A vibrant gathering for young people to grow in faith and fellowship.', icon: Zap },
  { day: 'Wednesday', time: 'Evening Program', name: "Widows' Overnight", desc: 'A special overnight program of prayer and fellowship for widows.', icon: Heart },
  { day: 'Thursday', time: '4:00 PM – 6:30 PM', name: 'Mid-week Deliverance', desc: 'Powerful deliverance service seeking God\'s freedom and healing.', icon: Flame },
  { day: 'Friday', time: '9:00 PM till dawn', name: 'Overnight Prayers', desc: 'All-night prayer vigil to seek God\'s face and presence.', icon: Flame },
];

const conferences = [
  {
    title: 'High Voltage Miracle Conference',
    desc: 'Our flagship annual event drawing over 20,000 attendees from East Africa and beyond. Experience powerful miracles, anointed worship, and life-changing encounters.',
    image: '/images/high_voltage_birthday2_1771870213007-s8h4AoMC.jpg',
    attendees: '20,000+',
    tag: 'Annual',
  },
  {
    title: 'Resurrection Crusade',
    desc: 'Organized in communities where the number of unbelievers outweigh believers. Strengthening local churches and seeing thousands come to Christ.',
    image: '/images/resurrection-crusade-oyam.jpg',
    attendees: '5,000+',
    tag: 'Regional',
  },
  {
    title: 'Pass The Fire Conference',
    desc: 'An igniting conference designed to stir up the fire of the Holy Spirit in every believer, equipping them for effective ministry and witness.',
    image: '/images/Pass_The_Fire_1771870407322-yUgzDIle.jpg',
    attendees: '3,000+',
    tag: 'Annual',
  },
  {
    title: "Sapphire Women's Conference",
    desc: 'A special gathering for women to be empowered, encouraged, and equipped for their God-given roles in the family, church, and community.',
    image: '/images/Widows_Conference_1771870421516-CVfzgNvl.jpg',
    attendees: '2,000+',
    tag: 'Women',
  },
];

export default function Events() {
  return (
    <div className="events-page">
      <HeroSection
        title="Events & Services"
        subtitle="Join us for Spirit-filled worship, powerful conferences, and life-transforming gatherings throughout the year."
        backgroundImage="/images/high_voltage_birthday2_1771870213007-s8h4AoMC.jpg"
        height="70vh"
        breadcrumb="Events"
      />

      {/* Weekly Programs */}
      <WeeklyPrograms />

      {/* Conferences */}
      <section className="section events-conferences" id="conferences">
        <div className="container">
          <ScrollReveal className="section-centered">
            <span className="section-label">Flagship Events</span>
            <h2 className="section-title">Conferences & Crusades</h2>
            <p className="section-subtitle">Large-scale events that draw thousands from across East Africa and beyond.</p>
          </ScrollReveal>

          <div className="conferences-grid">
            {conferences.map((conf, i) => (
              <ScrollReveal key={i} delay={Math.min(i + 1, 4)}>
                <div className="conference-card" id={`conference-${i}`}>
                  <div className="conference-card__image-wrap">
                    <img src={conf.image} alt={conf.title} className="conference-card__image" />
                    <div className="conference-card__overlay" />
                    <span className="conference-card__tag">{conf.tag}</span>
                  </div>
                  <div className="conference-card__body">
                    <h3 className="conference-card__title">{conf.title}</h3>
                    <p className="conference-card__desc">{conf.desc}</p>
                    <div className="conference-card__meta">
                      <span className="conference-card__attendees">
                        <Users size={16} /> {conf.attendees} Attendees
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Radio Ministry */}
      <section className="section" id="radio-ministry">
        <div className="container">
          <div className="radio-section">
            <ScrollReveal direction="left" className="radio-section__content">
              <span className="section-label">Radio Ministry</span>
              <h2 className="section-title">Reaching Beyond Walls</h2>
              <p>
                Through our radio ministry, we extend our reach to thousands across the Lango region. 
                Over 100 radio crusades have been broadcast, carrying the Gospel message to homes, 
                markets, and communities that our physical crusades cannot reach.
              </p>
              <p>
                Broadcasting on Radio Unity 97.7 FM Lira, our radio programs include Bible teaching, 
                prayer sessions, testimonies, and live crusade broadcasts.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="radio-section__image-wrap">
              <img 
                src="/images/Lango_Evangelization_Agenda_at_Radio_Unity_97.7_Fm_Lira_1771869818252-CbEwxOlS.jpg" 
                alt="Radio Ministry" 
                className="radio-section__image"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
