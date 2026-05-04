import { Link } from 'react-router-dom';
import { 
  Heart, Users, Globe, BookOpen, Church, Calendar, 
  ArrowRight, MapPin, Clock, Star, Sparkles, Cross,
  HandHeart, GraduationCap, Baby, Eye
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import './Home.css';

const stats = [
  { number: 30000, suffix: '+', label: 'Souls Saved', icon: Heart },
  { number: 40, suffix: '+', label: 'Villages Reached', icon: MapPin },
  { number: 900, suffix: '+', label: 'Orphans Supported', icon: Baby },
  { number: 24, suffix: '+', label: 'Years of Ministry', icon: Star },
];

const featuredMinistries = [
  {
    title: 'Children of the Nations',
    desc: 'Supporting over 900 orphans and vulnerable children through homes, education, and sustainable community projects.',
    icon: Baby,
    image: '/images/babies-home-community.jpg',
  },
  {
    title: 'Lango Evangelization',
    desc: 'A regional evangelism drive reaching 40+ villages, 100+ radio crusades, and 30,000+ souls saved across northern Uganda.',
    icon: Globe,
    image: '/images/lango-evangelization-agenda.jpg',
  },
  {
    title: 'Crown of Glory Ministry',
    desc: 'Feeding the vulnerable, providing hygiene kits, and drilling water wells in underserved communities.',
    icon: HandHeart,
    image: '/images/food-distribution-covid.jpg',
  },
  {
    title: 'Vocational Training',
    desc: 'Training school dropouts in carpentry, tailoring, and mechanics to empower their futures since 2013.',
    icon: GraduationCap,
    image: '/images/school-outreach-lira.jpg',
  },
  {
    title: 'Eye Camp Ministry',
    desc: 'Providing free eye exams and 1,000+ glasses to over 1,400 individuals, restoring sight and hope.',
    icon: Eye,
    image: '/images/babies-home-volunteers.jpg',
  },
  {
    title: "My Sister's Keeper",
    desc: 'A compassionate initiative for former sex workers and child mothers, offering counseling and vocational training.',
    icon: Heart,
    image: '/images/Widows_Conference_1771870421516-CVfzgNvl.jpg',
  },
];

const serviceSchedule = [
  { day: 'Sunday', time: '7:00 AM – 9:00 AM', service: '1st Service' },
  { day: 'Sunday', time: '9:00 AM – 11:30 AM', service: '2nd Service' },
  { day: 'Wednesday', time: '9:00 AM – 4:00 PM', service: "Women's Program" },
  { day: 'Wednesday', time: '5:00 PM – 6:30 PM', service: 'Youth Service' },
  { day: 'Wednesday', time: 'Evening Program', service: "Widows' Overnight" },
  { day: 'Thursday', time: '4:00 PM – 6:30 PM', service: 'Mid-week Deliverance' },
  { day: 'Friday', time: '9:00 PM till dawn', service: 'Overnight Prayers' },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      <HeroSection
        title="Building Faithful Witnesses for Christ"
        subtitle="Welcome to Truth Evangelistic Fountain Ministries — Sharing the Blessings of Redemption since 2002. Join us as we transform lives through the power of the Gospel across Uganda and beyond."
        backgroundImages={[
          "/images/Truth_Fountain_Mission_Cathedral.jpg_1771846227344-BiuEyWkq.jpeg",
          "/images/Home Hero.jpg",
          "/images/Home Hero 2.jpg",
          "/images/Home Hero 3.jpg",
          "/images/Home Hero 4.JPG",
          "/images/Home Hero 5.JPG",
          "/images/Home Hero 6 (1).jpg",
          "/images/Home Hero 6 (2).jpg"
        ]}
        showCta
        ctaText="Explore Our Mission"
        ctaLink="/about"
        ctaText2="Weekly Programs"
        ctaLink2="/events"
        height="100vh"
      />

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar" id="stats-section">
        <div className="container">
          <div className="stats-bar__grid">
            {stats.map((stat, i) => (
              <div key={i} className="stats-bar__item">
                <stat.icon className="stats-bar__icon" size={28} />
                <div className="stats-bar__number">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="stats-bar__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section home-about" id="about-preview">
        <div className="container">
          <div className="home-about__grid">
            <ScrollReveal direction="left" className="home-about__image-wrap">
              <div className="home-about__image-stack">
                <img 
                  src="/images/Rev_James_and_D_1771869949456-DwXEZCgO.jpeg" 
                  alt="Rev James and team" 
                  className="home-about__image home-about__image--main" 
                />
                <img 
                  src="/images/_DSC0372-2_1753361257056-5LSD0Ncv.jpg" 
                  alt="Church worship" 
                  className="home-about__image home-about__image--accent" 
                />
                <div className="home-about__image-badge">
                  <span className="home-about__badge-number">24+</span>
                  <span className="home-about__badge-text">Years of Faith</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" className="home-about__content">
              <span className="section-label">About Our Ministry</span>
              <h2 className="section-title">A Vision Born in Faith, Growing in Grace</h2>
              <p>
                Founded on February 25, 2002, Truth Evangelistic Fountain Ministries was birthed 
                through a vision for revival and evangelism by Rev. Dr. James Okalo Ekwang and 
                fellow university gospel ministers.
              </p>
              <p>
                Dedicated during a joint church service by the Pentecostal Assemblies of God (PAG), 
                TEFM has grown into a vibrant ministry touching thousands of lives through evangelism, 
                community outreach, and compassionate service across Uganda and beyond.
              </p>
              <div className="home-about__features">
                <div className="home-about__feature">
                  <BookOpen size={20} className="home-about__feature-icon" />
                  <span>Bible-Centered Teaching</span>
                </div>
                <div className="home-about__feature">
                  <Globe size={20} className="home-about__feature-icon" />
                  <span>Global Mission Outreach</span>
                </div>
                <div className="home-about__feature">
                  <Users size={20} className="home-about__feature-icon" />
                  <span>Community Transformation</span>
                </div>
                <div className="home-about__feature">
                  <Heart size={20} className="home-about__feature-icon" />
                  <span>Compassionate Care</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="section home-vm" id="vision-mission">
        <div className="container">
          <ScrollReveal className="section-centered">
            <span className="section-label">Our Purpose</span>
            <h2 className="section-title">Vision & Mission</h2>
          </ScrollReveal>
          <div className="home-vm__grid">
            <ScrollReveal delay={1} className="home-vm__card glass-card">
              <div className="home-vm__icon-wrap home-vm__icon-wrap--vision">
                <Sparkles size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>Building Faithful Witnesses for Christ — raising a generation that boldly proclaims the Gospel and lives as a testimony of God's transforming power.</p>
            </ScrollReveal>
            <ScrollReveal delay={2} className="home-vm__card glass-card">
              <div className="home-vm__icon-wrap home-vm__icon-wrap--mission">
                <Globe size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>Sharing the Blessings of Redemption — reaching the unreached, strengthening believers, and transforming communities through evangelism, discipleship, and acts of compassion.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FEATURED MINISTRIES ===== */}
      <section className="section home-ministries" id="featured-ministries">
        <div className="container">
          <ScrollReveal className="section-centered">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Ministries</h2>
            <p className="section-subtitle">
              From caring for orphans to evangelizing remote villages, our ministries touch lives across Uganda and beyond.
            </p>
          </ScrollReveal>

          <div className="home-ministries__grid">
            {featuredMinistries.map((ministry, i) => (
              <ScrollReveal key={i} delay={Math.min(i + 1, 6)}>
                <div className="ministry-card glass-card" id={`ministry-card-${i}`}>
                  <div className="ministry-card__image-wrap">
                    <img src={ministry.image} alt={ministry.title} className="ministry-card__image" />
                    <div className="ministry-card__image-overlay" />
                  </div>
                  <div className="ministry-card__body">
                    <div className="ministry-card__icon">
                      <ministry.icon size={22} />
                    </div>
                    <h4 className="ministry-card__title">{ministry.title}</h4>
                    <p className="ministry-card__desc">{ministry.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="section-centered" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/ministries" className="btn btn-outline">
              View All Ministries <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICE TIMES ===== */}
      <section className="section home-services" id="service-times">
        <div className="container">
          <div className="home-services__grid">
            <ScrollReveal direction="left" className="home-services__info">
              <span className="section-label">Join Us</span>
              <h2 className="section-title">Weekly Programs</h2>
              <p>
                Experience powerful worship, Spirit-filled teaching, and warm fellowship. 
                We'd love to welcome you and your family!
              </p>
              <div className="home-services__schedule">
                {serviceSchedule.map((svc, i) => (
                  <div key={i} className="home-services__svc-item">
                    <div className="home-services__svc-day">{svc.day}</div>
                    <div className="home-services__svc-details">
                      <span className="home-services__svc-name">{svc.service}</span>
                      <span className="home-services__svc-time">
                        <Clock size={14} /> {svc.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/events" className="btn btn-gold" style={{ marginTop: 'var(--space-xl)' }}>
                View All Events <ArrowRight size={18} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" className="home-services__image-wrap">
              <img 
                src="/images/high_voltage_birthday2_1771870213007-s8h4AoMC.jpg" 
                alt="Church worship service" 
                className="home-services__image" 
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section home-cta" id="cta-section">
        <div className="home-cta__bg" />
        <div className="container home-cta__content">
          <ScrollReveal>
            <span className="section-label" style={{ justifyContent: 'center' }}>Get Involved</span>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
              Be Part of Something Greater
            </h2>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--space-2xl)' }}>
              Whether through prayer, volunteering, or partnership, your involvement makes a lasting impact. 
              Join us in building faithful witnesses for Christ.
            </p>
            <div className="home-cta__buttons">
              <Link to="/contact" className="btn btn-accent">
                Get In Touch <ArrowRight size={18} />
              </Link>
              <Link to="/outreach" className="btn btn-outline">
                Our Outreach Programs
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
