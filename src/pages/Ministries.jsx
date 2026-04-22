import { Link } from 'react-router-dom';
import { Baby, GraduationCap, HandHeart, Eye, Flame, Heart, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import './Ministries.css';

const ministries = [
  {
    id: 'cotn',
    title: 'Children of the Nations Uganda (COTN)',
    icon: Baby,
    year: '2006',
    image: '/images/babies-home-community.jpg',
    desc: 'Supporting over 900 orphans and vulnerable children through homes, education, and sustainable projects.',
    highlights: ['900+ orphans', 'Poultry & dairy', 'Beekeeping', 'Education'],
  },
  {
    id: 'vocational',
    title: 'Truth Vocational & Technical Institute',
    icon: GraduationCap,
    year: '2013',
    image: '/images/school-outreach-lira.jpg',
    desc: 'Training school dropouts in practical skills like carpentry, tailoring, and mechanics to empower their futures.',
    highlights: ['Carpentry', 'Tailoring', 'Mechanics', 'Empowerment'],
  },
  {
    id: 'crown-of-glory',
    title: 'Crown of Glory Ministry',
    icon: HandHeart,
    year: '2016',
    image: '/images/food-distribution-covid.jpg',
    desc: 'Feeding the vulnerable, providing hygiene kits, and drilling water wells in underserved areas of northern Uganda.',
    highlights: ['Food distribution', 'Hygiene kits', 'Water wells', 'Support'],
  },
  {
    id: 'eye-camp',
    title: 'Eye Camp Ministry',
    icon: Eye,
    year: 'Ongoing',
    image: '/images/babies-home-volunteers.jpg',
    desc: 'Providing free eye exams and over 1,000 glasses to more than 1,400 individuals, restoring sight and hope.',
    highlights: ['1,400+ patients', '1,000+ glasses', 'Free exams', 'Restoring sight'],
  },
  {
    id: 'remnant-afire',
    title: 'Remnant Afire',
    icon: Flame,
    year: '2005',
    image: '/images/rev-james-preaching.jpg',
    desc: 'Sponsoring children, distributing Bibles, supporting Lango evangelism, and holding revival meetings.',
    highlights: ['Child sponsorship', 'Bible distribution', 'Revivals', 'Evangelism'],
  },
  {
    id: 'msk',
    title: "My Sister's Keeper (MSK)",
    icon: Heart,
    year: 'Ongoing',
    image: '/images/Widows_Conference_1771870421516-CVfzgNvl.jpg',
    desc: 'A compassionate initiative for former sex workers and child mothers, offering counseling and vocational training.',
    highlights: ['Counseling', 'Training', 'Mentorship', 'Rebuilding'],
  },
];

export default function Ministries() {
  return (
    <div className="ministries-page">
      <HeroSection
        title="Our Ministries"
        subtitle="Serving with purpose, impacting lives. Reaching those who need it most."
        backgroundImage="/images/babies-home-community.jpg"
        height="70vh"
        breadcrumb="Ministries"
      />

      <section className="section" id="ministries-list">
        <div className="container">
          <ScrollReveal className="section-centered">
            <span className="section-label">Making a Difference</span>
            <h2 className="section-title">How We Serve</h2>
          </ScrollReveal>

          <div className="ministries-list">
            {ministries.map((ministry, i) => (
              <ScrollReveal key={ministry.id} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`ministry-detail ${i % 2 !== 0 ? 'ministry-detail--reversed' : ''}`} id={ministry.id}>
                  <div className="ministry-detail__image-wrap">
                    <img src={ministry.image} alt={ministry.title} className="ministry-detail__image" />
                    <div className="ministry-detail__year-badge">{ministry.year}</div>
                  </div>
                  <div className="ministry-detail__content">
                    <div className="ministry-detail__icon">
                      <ministry.icon size={24} />
                    </div>
                    <h3 className="ministry-detail__title">{ministry.title}</h3>
                    <p className="ministry-detail__desc">{ministry.desc}</p>
                    <ul className="ministry-detail__highlights">
                      {ministry.highlights.map((h, j) => (
                        <li key={j}>
                          <span className="ministry-detail__highlight-dot" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
