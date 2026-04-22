import { Link } from 'react-router-dom';
import { Globe, Users, School, Heart, Hospital, ArrowRight, Radio, MapPin } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import './Outreach.css';

const impactStats = [
  { number: 30000, suffix: '+', label: 'Souls Saved' },
  { number: 40, suffix: '+', label: 'Villages Reached' },
  { number: 100, suffix: '+', label: 'Radio Crusades' },
  { number: 24000, suffix: '+', label: 'Students Reached' },
];

const outreachPrograms = [
  {
    title: 'Lango Evangelization Agenda (LEA)',
    icon: Globe,
    image: '/images/lango-evangelization-agenda.jpg',
    desc: 'Launched in 2019, LEA is a regional evangelism drive reaching 40+ villages with over 30,000 souls saved. These crusades target the deepest and most remote locations in northern Uganda, reaching people who have never heard the Gospel.',
    stats: '30,000+ souls saved across 40+ villages',
    quote: '"This is a divine mandate to reach the Lango tribe, calling on churches, the diaspora, and global partners to join the mission."',
  },
  {
    title: 'Resurrection Crusades',
    icon: Heart,
    image: '/images/resurrection-crusade-oyam.jpg',
    desc: 'Organized in communities where the number of unbelievers outweigh the believers. Through these crusades, we strengthen local churches and see thousands of people coming to Christ and being rooted into a local church.',
    stats: 'Thousands reached across northern Uganda',
  },
  {
    title: 'Campus & School Outreach',
    icon: School,
    image: '/images/school-outreach-lira.jpg',
    desc: 'Taking crusades into secondary schools and colleges, focusing on students at a critical stage of decision-making. In 2024, we reached 36 schools, meeting over 24,000 students with 2,446 giving their lives to Christ.',
    stats: '24,000+ students reached in 2024',
  },
  {
    title: 'Youth-Led Crusades',
    icon: Users,
    image: '/images/bruno-street-ministry.jpg',
    desc: 'Every January, our vibrant youth organize crusades in local villages with door-to-door outreaches and street evangelism. In January 2025, a crusade in Bala village saw 292 people give their lives to Christ in just three days.',
    stats: '292 saved in a single 3-day crusade',
  },
  {
    title: 'Hospital & Prison Ministry',
    icon: Hospital,
    image: '/images/bruno-hospital-ministry.jpg',
    desc: 'Regular visits to hospitals and prisons to share the Gospel. Hundreds have given their lives to Jesus and been healed. We distribute Bibles and reading glasses to inmates, transforming lives behind bars.',
    stats: 'Hundreds of lives transformed',
  },
  {
    title: 'Charity & Community Relief',
    icon: Heart,
    image: '/images/food-distribution-covid.jpg',
    desc: 'During the COVID-19 lockdown, we distributed food to 1,200 households of vulnerable people — the elderly, teenage mothers, and pregnant women. We regularly distribute clothes, shoes, food, and basic needs during outreaches.',
    stats: '1,200 households served during COVID-19',
  },
];

export default function Outreach() {
  return (
    <div className="outreach-page">
      <HeroSection
        title="Outreach & Missions"
        subtitle="From remote villages to urban schools, from hospital wards to prison cells — we carry the Gospel to every corner, transforming lives through the love of Christ."
        backgroundImage="/images/village-crusade-northern-uganda.jpg"
        height="70vh"
        breadcrumb="Outreach"
      />

      {/* Impact Stats */}
      <section className="outreach-stats" id="outreach-impact">
        <div className="container">
          <div className="outreach-stats__grid">
            {impactStats.map((stat, i) => (
              <div key={i} className="outreach-stats__item">
                <div className="outreach-stats__number">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="outreach-stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section" id="outreach-programs">
        <div className="container">
          <ScrollReveal className="section-centered">
            <span className="section-label">Our Outreach</span>
            <h2 className="section-title">How We Reach the Lost</h2>
          </ScrollReveal>

          <div className="outreach-programs">
            {outreachPrograms.map((program, i) => (
              <ScrollReveal key={i}>
                <div className={`outreach-card ${i % 2 !== 0 ? 'outreach-card--reversed' : ''}`} id={`outreach-${i}`}>
                  <div className="outreach-card__image-wrap">
                    <img src={program.image} alt={program.title} className="outreach-card__image" />
                  </div>
                  <div className="outreach-card__content">
                    <div className="outreach-card__icon">
                      <program.icon size={24} />
                    </div>
                    <h3>{program.title}</h3>
                    <p>{program.desc}</p>
                    {program.quote && (
                      <blockquote className="outreach-card__quote">{program.quote}</blockquote>
                    )}
                    <div className="outreach-card__stat">
                      <MapPin size={16} /> {program.stats}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="section outreach-goals" id="future-goals">
        <div className="container section-centered">
          <ScrollReveal>
            <span className="section-label" style={{ justifyContent: 'center' }}>Future Goals 2025–2026</span>
            <h2 className="section-title">The Vision Continues</h2>
          </ScrollReveal>
          <div className="goals-grid">
            <ScrollReveal delay={1}>
              <div className="goal-card glass-card">
                <div className="goal-card__number">100,000</div>
                <p>Youth to be reached with the Gospel</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="goal-card glass-card">
                <div className="goal-card__number">12,000+</div>
                <p>Expected decisions for Christ</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="goal-card glass-card">
                <div className="goal-card__number">∞</div>
                <p>Expand charitable programs across more communities</p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <Link to="/contact" className="btn btn-accent" style={{ marginTop: 'var(--space-2xl)' }}>
              Partner With Us <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
