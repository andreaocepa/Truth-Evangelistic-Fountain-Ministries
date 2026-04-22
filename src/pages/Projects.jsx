import { Link } from 'react-router-dom';
import { Church, Hospital, Home, Droplets, Users, BookOpen, ArrowRight, Heart } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import './Projects.css';

const projects = [
  {
    title: 'Cathedral Building',
    icon: Church,
    desc: 'Constructing a beautiful and lasting place of worship to accommodate our growing congregation and serve as a beacon of hope in Lira Municipality.',
    image: '/images/Truth_Fountain_Mission_Cathedral.jpg_1771846227344-BiuEyWkq.jpeg',
    status: 'In Progress',
    progress: 65,
  },
  {
    title: 'Mission Hospital',
    icon: Hospital,
    desc: 'Delivering quality, accessible healthcare to the community. The hospital will serve thousands who currently lack access to proper medical care.',
    image: '/images/bruno-hospital-ministry.jpg',
    status: 'Planning',
    progress: 25,
  },
  {
    title: 'Majesty Guesthouse',
    icon: Home,
    desc: 'Clean and serene accommodation for visiting ministers, missionaries, and guests who come to serve alongside our ministry.',
    image: '/images/IMG_4921.jpg_1771869961088-DgUPSgQ6.jpeg',
    status: 'In Progress',
    progress: 50,
  },
  {
    title: 'Community Water Project',
    icon: Droplets,
    desc: 'Providing safe, clean water to rural communities through well drilling and water purification systems.',
    image: '/images/okwang-lea.jpg',
    status: 'Ongoing',
    progress: 40,
  },
  {
    title: 'Youth Empowerment Program',
    icon: Users,
    desc: 'Mentorship and skills development for young people, preparing them for meaningful careers and Kingdom service.',
    image: '/images/school-outreach-lira.jpg',
    status: 'Active',
    progress: 70,
  },
  {
    title: 'Bible Distribution',
    icon: BookOpen,
    desc: 'Giving free Bibles to those in need across remote villages, schools, hospitals, and prisons throughout the region.',
    image: '/images/rev-james-preaching.jpg',
    status: 'Ongoing',
    progress: 80,
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      <HeroSection
        title="Ongoing Projects"
        subtitle="Building for the future — from a cathedral to a hospital, each project serves our mission to transform lives and communities."
        backgroundImage="/images/Truth_Fountain_Mission_Cathedral.jpg_1771846227344-BiuEyWkq.jpeg"
        height="70vh"
        breadcrumb="Projects"
      />

      <section className="section" id="projects-grid">
        <div className="container">
          <ScrollReveal className="section-centered">
            <span className="section-label">Building the Kingdom</span>
            <h2 className="section-title">Current Projects</h2>
            <p className="section-subtitle">
              Each project represents our commitment to holistic ministry — serving spiritual, physical, and community needs.
            </p>
          </ScrollReveal>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <ScrollReveal key={i} delay={Math.min(i + 1, 6)}>
                <div className="project-card glass-card" id={`project-${i}`}>
                  <div className="project-card__image-wrap">
                    <img src={project.image} alt={project.title} className="project-card__image" />
                    <div className="project-card__image-overlay" />
                    <span className={`project-card__status project-card__status--${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="project-card__body">
                    <div className="project-card__icon">
                      <project.icon size={22} />
                    </div>
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__desc">{project.desc}</p>
                    <div className="project-card__progress">
                      <div className="project-card__progress-header">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="project-card__progress-bar">
                        <div 
                          className="project-card__progress-fill" 
                          style={{ width: `${project.progress}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="section-centered" style={{ marginTop: 'var(--space-3xl)' }}>
            <div className="projects-cta glass-card">
              <Heart size={32} className="projects-cta__icon" />
              <h3>Support Our Projects</h3>
              <p>Your generous contribution helps us build facilities that serve communities for generations.</p>
              <Link to="/contact" className="btn btn-accent">
                Get In Touch <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
