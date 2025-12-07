// src/App.jsx - FINAL VERSION WITH VIDEO BACKGROUND

import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';

// 1. IMPORT THE NEW COMPONENT
import ValueProps from './components/ValueProps'; 

import OraLogo from './assets/ora2.png'; 
// Import the new sectional components
import Services from './components/Services';
import About from './components/About';
import LatestNews from './components/LatestNews';
import ContactUs from './components/ContactUs';

// 1. IMPORT THE VIDEO FILE: Using the correct relative path for React
import OravaVideo from './assets/orav1.mp4'; 


// --- THEME COLORS ---
const GOLD_ACCENT = '#C6A96A'; 
const TEXT_LIGHT = '#EAEAEA';
const VIDEO_OVERLAY = 'rgba(0, 0, 0, 0.65)'; 

// --- INLINE STYLES ---
const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', 
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#0A0A0A', // Base dark background
  },
  
  homeSection: {
    flexGrow: 1, 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',    
    textAlign: 'center',
    color: TEXT_LIGHT,
    minHeight: 'calc(100vh - 70px)',
    position: 'relative', 
    overflow: 'hidden',
  },
  
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    zIndex: 1, 
    filter: 'blur(2px)', 
  },
  
  contentOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: VIDEO_OVERLAY, 
    zIndex: 2,
  },

  homeContent: {
    position: 'relative',
    zIndex: 3,
    padding: '40px 20px',
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
  },

  logoImage: {
    height: '80px', 
    width: 'auto',
    marginRight: '8px',
    borderRadius: '4px',
  },
  
  homeLogoContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '3rem',
    fontWeight: 800,
    color: GOLD_ACCENT,
    marginBottom: '20px',
  },
  
  heading: {
    fontSize: '3rem',
    fontWeight: 800,
    color: GOLD_ACCENT, 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)', 
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '1.5rem',
    fontWeight: 400,
    color: TEXT_LIGHT,
    maxWidth: '600px',
    lineHeight: 1.5,
    marginBottom: '40px', 
  },
  
  ctaButton: {
    backgroundColor: GOLD_ACCENT,
    color: '#0A0A0A', 
    padding: '15px 30px',
    fontSize: '1.2rem',
    fontWeight: 700,
    textDecoration: 'none',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
  }
};


function App() {
  return (
    <div style={styles.app}>
      
      <Header />
      
      {/* 1. HOME SECTION (Target: #home) */}
      <main id="home" style={styles.homeSection}>
        
        {/* VIDEO BACKGROUND ELEMENT */}
        <video 
          style={styles.videoBackground} 
          src={OravaVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        
        {/* DARK OVERLAY LAYER */}
        <div style={styles.contentOverlay}></div>
        
        {/* TEXT CONTENT */}
        <div style={styles.homeContent}>
          <div style={styles.homeLogoContainer}>
            <img src={OraLogo} alt="Orava Logo" style={styles.logoImage} />
          </div>
          <p style={styles.subHeading}>
          -  Machine Service you can trust -
          </p>
          
          <a 
            href="#services" 
            style={styles.ctaButton}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = TEXT_LIGHT; 
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = GOLD_ACCENT;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            VIEW OUR SERVICES
          </a>
        </div>
      </main> 
      
      {/* 2. VALUE PROPS SECTION (NEW) */}
      <ValueProps />
      
      {/* 3. SERVICES SECTION (Target: #services) */}
      <Services />
      
      {/* 4. ABOUT SECTION (Target: #about) */}
      <About />
      
      {/* 5. LATEST NEWS SECTION (Target: #news) */}
      <LatestNews />
      
      {/* 6. CONTACT SECTION (Target: #contact) */}
      <ContactUs />

      <Footer />
    </div>
  );
}

export default App;