import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection({ 
  title, 
  subtitle, 
  backgroundImage,
  backgroundImages, 
  showCta = false,
  ctaText = 'Learn More',
  ctaLink = '/about',
  ctaText2,
  ctaLink2,
  overlay = true,
  height = '100vh',
  breadcrumb,
  children 
}) {
  const [offset, setOffset] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = backgroundImages && backgroundImages.length > 0 
    ? backgroundImages 
    : (backgroundImage ? [backgroundImage] : []);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section 
      className="hero" 
      style={{ '--hero-height': height }}
      id="hero-section"
    >
      {/* Parallax background */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`hero__bg ${images.length > 1 ? 'hero__bg--transition' : ''}`}
          style={{ 
            backgroundImage: `url('${img}')`,
            transform: `translateY(${offset}px)`,
            opacity: index === currentImageIndex ? 1 : 0,
            visibility: index === currentImageIndex || images.length > 1 ? 'visible' : 'hidden'
          }} 
        />
      ))}
      
      {/* Gradient overlay */}
      {overlay && <div className="hero__overlay" />}

      {/* Floating particles */}
      <div className="hero__particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__particle hero__particle--${i + 1}`} />
        ))}
      </div>

      {/* Content */}
      <div className="hero__content container">
        {breadcrumb && (
          <div className="hero__breadcrumb">
            <Link to="/">Home</Link>
            <span className="hero__breadcrumb-sep">/</span>
            <span>{breadcrumb}</span>
          </div>
        )}

        <h1 className="hero__title">
          {title.split(' ').map((word, i) => (
            <span key={i} className="hero__title-word" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
              {word}
            </span>
          ))}
        </h1>

        {subtitle && (
          <p className="hero__subtitle">{subtitle}</p>
        )}

        {showCta && (
          <div className="hero__cta-group">
            <Link to={ctaLink} className="btn btn-accent hero__cta">
              {ctaText}
            </Link>
            {ctaText2 && (
              <Link to={ctaLink2 || '/contact'} className="btn btn-outline hero__cta">
                {ctaText2}
              </Link>
            )}
          </div>
        )}

        {children}
      </div>

      {/* Bottom gradient fade */}
      <div className="hero__bottom-fade" />
    </section>
  );
}
