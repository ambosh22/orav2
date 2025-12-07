import React from 'react';

// 1. FIX: Corrected import paths
import trobImage from '../assets/trob.jpg';
import mainteImage from '../assets/mainte.jpg';
import repImage from '../assets/rep.jpg';
import assemImage from '../assets/assem.jpg';

// --- THEME COLORS ---
const ACCENT_COLOR = '#C6A96A'; 
const BASE_DARK = '#0A0A0A'; 
const TEXT_LIGHT = '#ffffffff'; 
const OVERLAY_DARK_FADE = 'rgba(0, 0, 0, 0.9)'; 

// --- INLINE STYLES ---
const styles = {
  section: {
    padding: '100px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    color: TEXT_LIGHT,
    backgroundColor: BASE_DARK,
  },
  sectionTitleContainer: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: 900,
    color: TEXT_LIGHT, 
    textAlign: 'center',
    marginBottom: '10px', // Reduced margin to bring the line closer
    textShadow: `0 4px 10px ${ACCENT_COLOR}99`, 
    letterSpacing: '1px',
  },
  
  // NEW STYLE: The half-line accent
  accentDivider: {
    width: '80px', 
    height: '3px',
    backgroundColor: ACCENT_COLOR,
    margin: '0 auto', // Center the line
    borderRadius: '2px',
  },
  
  contentContainer: {
    display: 'flex',
    flexDirection: 'column', 
    gap: '40px',
    alignItems: 'center', 
    width: '100%',
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    maxWidth: '1200px', 
    width: '100%',
  },

  serviceCard: {
    padding: '0', 
    borderRadius: '12px',
    boxShadow: `0 8px 16px rgba(0, 0, 0, 0.6)`,
    transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.5s',
    minHeight: '350px', 
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#1E1E1E', 
  },
  
  // UPDATED: Inner content wrapper for centering
  cardContentWrapper: {
    padding: '30px',
    position: 'absolute',
    bottom: 0, 
    width: '100%',
    zIndex: 3, 
    background: `linear-gradient(to top, ${OVERLAY_DARK_FADE} 0%, transparent 80%)`,
    minHeight: '100%', 
    display: 'flex',
    flexDirection: 'column',
    // NEW: Align items to the center
    alignItems: 'center', 
    // NEW: Text content centered
    textAlign: 'center',
    justifyContent: 'flex-end',
  },

  cardImageStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1, 
    transition: 'transform 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
    opacity: 0.4, 
  },

  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: ACCENT_COLOR,
    marginBottom: '8px', 
    // Removed display: flex and margin-right on icon since content is centered
    alignItems: 'center',
    textShadow: '0 0 5px rgba(0, 0, 0, 1.0)',
    letterSpacing: '0.5px',
  },
  titleMarker: {
    color: ACCENT_COLOR,
    // Removed margin-right as content is centered
    fontSize: '1em',
    lineHeight: 1,
  },
  cardText: {
    fontSize: '0.9rem',
    lineHeight: 1.6,
    color: TEXT_LIGHT,
    opacity: 0.85, 
    textShadow: '0 0 3px rgba(0, 0, 0, 1.0)', 
  },
};

function Services() {
  const serviceData = [
    { 
      title: "Troubleshooting", 
      description: "We carry out systematic troubleshooting to find out what is wrong – quickly and accurately. We collect information, use diagnostic tools and eliminate possible causes until we are left with the most likely error. You will receive a clear explanation and suggestions for further action – including a price estimate.",
      image: trobImage,
      icon: '🔍',
    },
    { 
      title: "Maintenance", 
      description: "Maintenance is the key to avoiding costly repairs and unexpected downtime. We carry out thorough checks, lubrication and adjustments. With a fixed agreement, we ensure regular reviews and predictable costs – so you can focus on what matters most to you.",
      image: mainteImage,
      icon: '🔧',
    },
    { 
      title: "Repair", 
      description: "When your machine stops, every minute counts. We deliver fast and safe repairs, based on accurate diagnosis and the use of quality parts. Our mechanics have extensive experience with various machine types and work efficiently to get your machine back up and running – the right way.",
      image: repImage,
      icon: '🔩',
    },
    { 
      title: "Assembly", 
      description: "Have you purchased new equipment for your tractor and need help with installation? We at Orava are happy to assist! We help you with installation of, among other things, GPS, extra lights, flash beams and other equipment you want in place.",
      image: assemImage,
      icon: '🔌',
    },
  ];

  return (
    <section id="services" style={styles.section}>
      
      {/* Container for the Title and the new Accent Divider */}
      <div style={styles.sectionTitleContainer}>
        <h2 style={styles.sectionTitle}>OUR CORE SERVICES</h2>
        <div style={styles.accentDivider}></div> {/* The new half-line */}
      </div>
      
      <div style={styles.contentContainer}>
        
        <div style={styles.servicesGrid}>
          {serviceData.map((service, index) => (
            <div 
              key={index} 
              style={styles.serviceCard}
              
              // Hover effects
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.9)`;
                e.currentTarget.firstChild.style.transform = 'scale(1.05)';
                e.currentTarget.firstChild.style.opacity = '0.6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 8px 16px rgba(0, 0, 0, 0.6)`;
                e.currentTarget.firstChild.style.transform = 'scale(1)';
                e.currentTarget.firstChild.style.opacity = '0.4';
              }}
            >
              {/* 1. Dynamic Background Image */}
              <div 
                  style={{
                      ...styles.cardImageStyle,
                      backgroundImage: `url(${service.image})`,
                  }}
              />
              
              {/* 2. Content Wrapper (contains overlay and centered text) */}
              <div style={styles.cardContentWrapper}>
                <h3 style={styles.cardTitle}>
                  {/* Icon displayed above title text */}
                  <span style={styles.titleMarker}>{service.icon}</span>
                  <br />
                  {service.title}
                </h3>
                <p style={styles.cardText}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;