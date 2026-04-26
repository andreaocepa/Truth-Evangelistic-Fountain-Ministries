import { useState } from 'react';
import { X, ZoomIn, Images } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import './Gallery.css';

const categories = ['All', 'Worship', 'Outreach', 'Community', 'Leadership', 'Conferences'];

const galleryItems = [
  {
    src: '/images/Truth_Fountain_Mission_Cathedral.jpg_1771846227344-BiuEyWkq.jpeg',
    title: 'TEFM Mission Cathedral',
    category: 'Worship',
    desc: 'Our home church — a place of worship, prayer and revival in Lira.',
  },
  {
    src: '/images/_DSC0372-2_1753361257056-5LSD0Ncv.jpg',
    title: 'Sunday Worship',
    category: 'Worship',
    desc: 'Congregants gathered in Spirit-filled worship at TEFM.',
  },
  {
    src: '/images/high_voltage_birthday2_1771870213007-s8h4AoMC.jpg',
    title: 'High Voltage Youth Service',
    category: 'Worship',
    desc: 'Youth celebrating and worshipping together in the house of God.',
  },
  {
    src: '/images/village-crusade-northern-uganda.jpg',
    title: 'Village Crusade — Northern Uganda',
    category: 'Outreach',
    desc: 'Taking the Gospel to the villages across northern Uganda.',
  },
  {
    src: '/images/resurrection-crusade-oyam.jpg',
    title: 'Resurrection Crusade — Oyam',
    category: 'Outreach',
    desc: 'A powerful crusade in Oyam district drawing thousands.',
  },
  {
    src: '/images/lango-evangelization-agenda.jpg',
    title: 'Lango Evangelization Agenda',
    category: 'Outreach',
    desc: 'Strategic evangelism planning and radio outreach across the Lango region.',
  },
  {
    src: '/images/rev-james-preaching.jpg',
    title: 'Rev. James Preaching',
    category: 'Outreach',
    desc: 'Rev. Dr. James Okalo Ekwang delivering the Word with power.',
  },
  {
    src: '/images/Pass_The_Fire_1771870407322-yUgzDIle.jpg',
    title: 'Pass the Fire Conference',
    category: 'Conferences',
    desc: 'An interdenominational conference igniting passion for Christ.',
  },
  {
    src: '/images/Okwang_LEA_1771869750059-C4YoBCBW.jpg',
    title: 'Okwang LEA Outreach',
    category: 'Outreach',
    desc: 'Reaching underserved communities in Okwang with the love of Christ.',
  },
  {
    src: '/images/Widows_Conference_1771870421516-CVfzgNvl.jpg',
    title: "Widows' Conference",
    category: 'Conferences',
    desc: "Empowering and encouraging widows through the ministry's annual conference.",
  },
  {
    src: '/images/babies-home-community.jpg',
    title: 'Babies Home — Community',
    category: 'Community',
    desc: 'Children of the Nations ministry caring for orphans in our community.',
  },
  {
    src: '/images/babies-home-volunteers.jpg',
    title: 'Babies Home — Volunteers',
    category: 'Community',
    desc: 'Dedicated volunteers serving the orphaned children with love.',
  },
  {
    src: '/images/food-distribution-covid.jpg',
    title: 'Food Distribution — COVID Relief',
    category: 'Community',
    desc: 'Crown of Glory ministry distributing food to vulnerable families during COVID.',
  },
  {
    src: '/images/school-outreach-lira.jpg',
    title: 'School Outreach — Lira',
    category: 'Community',
    desc: 'Vocational training and school outreach empowering youth in Lira.',
  },
  {
    src: '/images/bruno-hospital-ministry.jpg',
    title: 'Hospital Ministry',
    category: 'Community',
    desc: 'Bringing hope and healing to the sick through hospital ministry.',
  },
  {
    src: '/images/bruno-street-ministry.jpg',
    title: 'Street Ministry',
    category: 'Outreach',
    desc: 'Taking the Gospel to the streets and reaching the unreached.',
  },
  {
    src: '/images/Rev_James_and_D_1771869949456-DwXEZCgO.jpeg',
    title: 'Rev. James & Leadership Team',
    category: 'Leadership',
    desc: 'Rev. Dr. James Okalo Ekwang with the ministry leadership team.',
  },
  {
    src: '/images/pastor-james-mummy-agnes.jpg',
    title: 'Pastor James & Pastor Agnes',
    category: 'Leadership',
    desc: 'The founding pastors of Truth Evangelistic Fountain Ministries.',
  },
  {
    src: '/images/pastor-james-profile.jpg',
    title: 'Rev. Dr. James Okalo Ekwang',
    category: 'Leadership',
    desc: 'Founder and Senior Pastor of Truth Evangelistic Fountain Ministries.',
  },
  {
    src: '/images/pastor-agnes-profile.jpg',
    title: 'Pastor Agnes Okalo',
    category: 'Leadership',
    desc: "Co-founder and Women's Ministry leader at TEFM.",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  const navigate = (dir) => {
    const currentIndex = filtered.findIndex((i) => i.src === lightbox.src);
    const next = (currentIndex + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next]);
  };

  return (
    <div className="gallery-page">
      <HeroSection
        title="Our Gallery"
        subtitle="A glimpse into the life and ministry of Truth Evangelistic Fountain Ministries — moments of worship, outreach, and community transformation."
        backgroundImage="/images/Truth_Fountain_Mission_Cathedral.jpg_1771846227344-BiuEyWkq.jpeg"
        height="60vh"
      />

      {/* Filter bar */}
      <section className="gallery-filter-section">
        <div className="container">
          <ScrollReveal className="gallery-filter-wrap">
            <div className="gallery-filter" id="gallery-filter">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`gallery-filter__btn ${activeCategory === cat ? 'gallery-filter__btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  id={`filter-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section gallery-section" id="gallery-grid">
        <div className="container">
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.src} delay={Math.min((i % 6) + 1, 6)}>
                <div
                  className="gallery-item"
                  onClick={() => openLightbox(item)}
                  id={`gallery-item-${i}`}
                >
                  <div className="gallery-item__img-wrap">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-item__img"
                      loading="lazy"
                    />
                    <div className="gallery-item__overlay">
                      <div className="gallery-item__overlay-content">
                        <ZoomIn size={28} className="gallery-item__zoom-icon" />
                        <h4 className="gallery-item__title">{item.title}</h4>
                        <span className="gallery-item__cat">{item.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery-empty">
              <Images size={48} />
              <p>No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" id="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            <X size={24} />
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="lightbox__img" />
            <div className="lightbox__info">
              <h3 className="lightbox__title">{lightbox.title}</h3>
              <span className="lightbox__cat">{lightbox.category}</span>
              <p className="lightbox__desc">{lightbox.desc}</p>
            </div>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
