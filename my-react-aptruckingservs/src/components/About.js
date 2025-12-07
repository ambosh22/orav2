import React from 'react';

// 1. IMPORT IMAGE ASSET (Assuming the path ../assets/main.jpg is correct)
import aboutImage from '../assets/main.jpg';

// --- THEME COLORS (Adopted from the Services component for consistency) ---
const ACCENT_COLOR = '#C6A96A'; // Softened Gold/Bronze
const BASE_DARK = '#0A0A0A'; // Rich, dark background
const TEXT_LIGHT = '#EAEAEA'; // Neutral off-white text

// --- INLINE STYLES ---
const styles = {
  section: {
    padding: '100px 20px', // Increased padding
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    color: TEXT_LIGHT,
    backgroundColor: BASE_DARK,
  },
  sectionTitle: {
    fontSize: '3rem', // Larger title
    fontWeight: 900,
    color: TEXT_LIGHT, 
    textAlign: 'center',
    marginBottom: '10px', // Reduced margin to place accent closer
    textShadow: `0 4px 10px ${ACCENT_COLOR}99`, 
    letterSpacing: '1px',
  },
  
  // NEW: Accent line style (used directly below the title)
  accentDivider: {
    width: '80px', 
    height: '3px',
    backgroundColor: ACCENT_COLOR,
    margin: '0 auto 60px auto', // Center the line and add bottom margin
    borderRadius: '2px',
  },
  
  // UPDATED: Content wrapper for responsive two-column layout
  contentWrapper: {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    // Mobile-first: stacks vertically, then switches to row
    flexDirection: 'column', 
    '@media (min-width: 900px)': {
      flexDirection: 'row',
    },
  },
  
  textColumn: {
    flex: 2,
    fontSize: '1.1rem',
    lineHeight: 1.8,
    padding: '20px 0',
  },
  
  // UPDATED: Image container style
  imageContainer: {
    flex: 1,
    minWidth: '250px',
    height: '400px', // Taller image container
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: `0 8px 16px rgba(0, 0, 0, 0.6), 0 0 10px ${ACCENT_COLOR}40`,
    // Align self ensures it stretches across if needed, but defaults to content height
    alignSelf: 'stretch', 
  },
  
  // NEW: Image element style
  imageStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the image covers the container without distortion
    transition: 'transform 0.5s ease-in-out',
    opacity: 0.9,
  },
};

function About() {
  return (
    <section id="about" style={styles.section}>
        <div style={styles.sectionTitleContainer}>
            <h2 style={styles.sectionTitle}>ABOUT ORAVA</h2>
            <div style={styles.accentDivider}></div>
        </div>
        
        <div 
          style={
            // Apply media query simulation for desktop layout
            window.innerWidth > 900 ? 
            { ...styles.contentWrapper, flexDirection: 'row' } : 
            styles.contentWrapper
          }
        >
          {/* Text Column */}
          <div style={styles.textColumn}>
            <p>
              Orava is a **Norwegian company** built on a passion for reliable machinery. Since our inception, we have helped customers in the Inland region and surrounding areas get their equipment back up and running **quickly and efficiently**. We deeply understand the cost of equipment failure, which is why we work purposefully and structured to deliver **solutions you can trust**. 
            </p>
            <p style={{ marginTop: '15px' }}>
              Our mission is to minimize your downtime through expert service, maintenance, and repair, allowing you to focus on your core business.
            </p>
          </div>
          
          {/* Image Column */}
          <div style={styles.imageContainer}>
            <img 
              src={aboutImage}
              alt="Heavy machinery maintenance and repair facility"
              style={styles.imageStyle}
              // Added subtle hover effect
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </div>
    </section>
  );
}

export default About;