import { Link } from 'react-router-dom';
import { BookOpen, Globe, Users, Heart, Calendar, Award, Church, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const timeline = [
  { year: '2001', title: 'The Vision', desc: 'A vision for revival and evangelism birthed among university gospel ministers led by James Okalo Ekwang.' },
  { year: '2002', title: 'Official Registration', desc: 'Founded on February 25 and officially registered on August 25, 2002. Dedicated during a joint PAG church service.' },
  { year: '2005', title: 'Remnant Afire Launched', desc: 'Founded by Lenta Hall (USA), sponsoring children, distributing Bibles, and supporting Lango evangelism.' },
  { year: '2006', title: 'Children of the Nations', desc: 'COTN Uganda established under COTNI (USA), supporting over 900 orphans and vulnerable children.' },
  { year: '2013', title: 'Vocational Institute', desc: 'Truth Vocational & Technical Institute launched, training school dropouts in practical skills.' },
  { year: '2016', title: 'Crown of Glory Ministry', desc: 'Started by Laura, Jim Kress, and Shane Wallace (USA), serving vulnerable communities.' },
  { year: '2019', title: 'Lango Evangelization Agenda', desc: 'LEA launched — a regional evangelism drive reaching 40+ villages and 30,000+ souls.' },
  { year: '2024', title: 'Youth Expansion', desc: 'Outreach to 36 schools, reaching 24,000+ students with 2,446 decisions for Christ.' },
];

const leaders = [
  {
    name: 'Rev. Dr. James Okalo Ekwang',
    role: 'Senior Pastor & Founder',
    image: '/images/pastor-james-profile.jpg',
    desc: 'Visionary leader and founder of TEFM, Rev. Dr. James has dedicated over two decades to evangelism, church planting, and community transformation across Uganda, the USA, Europe, and the Arabian region.',
  },
  {
    name: 'Pastor Agnes Okalo Ekwang',
    role: 'Co-Pastor & Ministry Leader',
    image: '/images/pastor-agnes-profile.jpg',
    desc: 'A pillar of strength in TEFM, Pastor Agnes co-leads the ministry alongside Rev. James, overseeing women\'s ministries, community outreach, and the Sapphire Women\'s Conference.',
  },
];

export default function About() {
  return (
    <div className="about-page">
      <HeroSection
        title="About Our Ministry"
        subtitle="Discover the journey of faith that started with a vision and grew into a movement transforming thousands of lives across Uganda and beyond."
        backgroundImage="/images/_DSC0372-2_1753361257056-5LSD0Ncv.jpg"
        height="70vh"
        breadcrumb="About"
      />

      {/* Story Section */}
      <section className="section about-story" id="our-story">
        <div className="container">
          <div className="about-story__grid">
            <ScrollReveal direction="left">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Born from a Vision for Revival</h2>
              <p>
                Truth Evangelistic Fountain Ministries was birthed through a divine vision for revival 
                and evangelism. In 2001, James Okalo Ekwang and fellow university gospel ministers 
                received a calling that would transform the spiritual landscape of northern Uganda.
              </p>
              <p>
                Founded on February 25, 2002, and officially registered on August 25 of the same year, 
                TEFM was dedicated during a joint church service by the Pentecostal Assemblies of God (PAG). 
                What began as a small fellowship has grown into a vibrant ministry with multiple outreach 
                programs, community development initiatives, and a vision that extends beyond Uganda's borders.
              </p>
              <p>
                Today, TEFM stands as a beacon of hope in Lira Municipality and beyond, touching thousands 
                of lives through the Gospel, compassionate service, and community empowerment. Our ongoing 
                cathedral construction symbolizes our growing congregation and unwavering commitment to 
                worship and service.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="about-story__image-wrap">
              <img 
                src="/images/Truth_Fountain_Mission_Cathedral.jpg_1771846227344-BiuEyWkq.jpeg" 
                alt="TEFM Cathedral under construction" 
                className="about-story__image"
              />
              <div className="about-story__image-accent" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline" id="timeline-section">
        <div className="container">
          <ScrollReveal className="section-centered">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones of Faith</h2>
            <p className="section-subtitle">Over two decades of faithful service, growth, and impact.</p>
          </ScrollReveal>

          <div className="timeline">
            <div className="timeline__line" />
            {timeline.map((item, i) => (
              <ScrollReveal 
                key={i} 
                direction={i % 2 === 0 ? 'left' : 'right'}
                className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
              >
                <div className="timeline__dot" />
                <div className="timeline__card glass-card">
                  <span className="timeline__year">{item.year}</span>
                  <h4 className="timeline__title">{item.title}</h4>
                  <p className="timeline__desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section about-leadership" id="leadership-section">
        <div className="container">
          <ScrollReveal className="section-centered">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Our Shepherds</h2>
            <p className="section-subtitle">Led by anointed servants called to guide and inspire the body of Christ.</p>
          </ScrollReveal>

          <div className="about-leaders__grid">
            {leaders.map((leader, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <div className="leader-card glass-card" id={`leader-card-${i}`}>
                  <div className="leader-card__image-wrap">
                    <img src={leader.image} alt={leader.name} className="leader-card__image" />
                    <div className="leader-card__glow" />
                  </div>
                  <h3 className="leader-card__name">{leader.name}</h3>
                  <span className="leader-card__role">{leader.role}</span>
                  <p className="leader-card__desc">{leader.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values" id="our-values">
        <div className="container">
          <ScrollReveal className="section-centered">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
          </ScrollReveal>
          <div className="about-values__grid">
            {[
              { icon: BookOpen, title: 'Biblical Authority', desc: 'Grounded in the infallible Word of God as our supreme guide for faith and practice.' },
              { icon: Globe, title: 'Evangelism', desc: 'Passionately sharing the Gospel with every soul, from remote villages to bustling cities.' },
              { icon: Heart, title: 'Compassion', desc: 'Serving the vulnerable with love — orphans, widows, and the marginalized in our communities.' },
              { icon: Users, title: 'Community', desc: 'Building strong, faith-filled communities where every member grows and thrives.' },
              { icon: Star, title: 'Excellence', desc: 'Pursuing excellence in ministry, worship, and service to honor God in all we do.' },
              { icon: Church, title: 'Worship', desc: 'Creating an atmosphere of Spirit-filled worship where lives are transformed by God\'s presence.' },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={Math.min(i + 1, 6)}>
                <div className="value-card glass-card" id={`value-card-${i}`}>
                  <div className="value-card__icon">
                    <value.icon size={24} />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
