import React from 'react';
import { Calendar, Clock, Star, Users, Flame, Zap, Moon, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './WeeklyPrograms.css';

const WeeklyPrograms = () => {
  return (
    <section className="weekly-programs-section">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="wp-header">
          <div className="wp-title-wrap">
            <Calendar className="wp-title-icon" size={24} />
            <h2 className="wp-title">Weekly Programs</h2>
          </div>
          <div className="wp-subtitle-highlight">
            <span>Sunday Worship Times</span>
          </div>
        </ScrollReveal>

        {/* Sunday Services - 2 Column Layout */}
        <div className="sunday-grid">
          <ScrollReveal delay={1} className="sunday-card-wrapper">
            <div className="sunday-card glass-card">
              <div className="day-badge">
                <Star size={16} />
                <span>Sunday</span>
              </div>
              <div className="sunday-card-content">
                <h3 className="program-title">1st Service</h3>
                <div className="program-time">
                  <Clock size={16} />
                  <span>7:00 AM – 9:00 AM</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2} className="sunday-card-wrapper">
            <div className="sunday-card glass-card">
              <div className="day-badge">
                <Star size={16} />
                <span>Sunday</span>
              </div>
              <div className="sunday-card-content">
                <h3 className="program-title">2nd Service</h3>
                <div className="program-time">
                  <Clock size={16} />
                  <span>9:00 AM – 11:30 AM</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Weekday Grid - 3 Column Layout */}
        <div className="weekday-grid">
          {/* Wednesday - Stacked Sub-cards */}
          <ScrollReveal delay={3} className="weekday-column">
            <div className="parent-card glass-card">
              <div className="day-header">
                <Users size={20} className="day-icon" />
                <h3 className="day-title">Wednesday</h3>
              </div>
              <div className="sub-cards-container">
                <div className="program-sub-card">
                  <div className="sub-card-header">
                    <Heart size={14} className="sub-icon" />
                    <h4 className="sub-program-title">Women's Program</h4>
                  </div>
                  <span className="sub-program-time">9:00 AM – 4:00 PM</span>
                </div>
                <div className="program-sub-card">
                  <div className="sub-card-header">
                    <Zap size={14} className="sub-icon" />
                    <h4 className="sub-program-title">Youth Service</h4>
                  </div>
                  <span className="sub-program-time">5:00 PM – 6:30 PM</span>
                </div>
                <div className="program-sub-card">
                  <div className="sub-card-header">
                    <Heart size={14} className="sub-icon" />
                    <h4 className="sub-program-title">Widows' Overnight</h4>
                  </div>
                  <span className="sub-program-time">Evening Program</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Thursday - Mid-week Deliverance */}
          <ScrollReveal delay={4} className="weekday-column">
            <div className="parent-card glass-card focused-card">
              <div className="day-header">
                <Flame size={20} className="day-icon" />
                <h3 className="day-title">Thursday</h3>
              </div>
              <div className="focused-program-content">
                <h4 className="program-title">Mid-week Deliverance</h4>
                <div className="program-time">
                  <Clock size={16} />
                  <span>4:00 PM – 6:30 PM</span>
                </div>
                <p className="program-desc">
                  A focused service for spiritual freedom, healing, and restoration.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Friday - Overnight Prayers */}
          <ScrollReveal delay={5} className="weekday-column">
            <div className="parent-card glass-card">
              <div className="day-header">
                <Moon size={20} className="day-icon" />
                <h3 className="day-title">Friday</h3>
              </div>
              <div className="focused-program-content">
                <h4 className="program-title">Overnight Prayers</h4>
                <div className="program-time">
                  <Clock size={16} />
                  <span>9:00 PM – Dawn</span>
                </div>
                <p className="program-desc">
                  Join us for an intense night of prayer, seeking God's presence.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WeeklyPrograms;
