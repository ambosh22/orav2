// src/components/Header.jsx

import React, { useState } from 'react';
// 1. IMPORT THE IMAGE: Assuming the path is correct relative to Header.jsx
import OraLogo from '../assets/ora2.png'; 

// --- THEME COLORS ---
const GOLD_ACCENT = '#FFD700';
const LIGHT_BLACK = '#ffffffff';
const OFF_WHITE = '#121111ff';

// --- INLINE STYLES ---
const styles = {
  header: {
    backgroundColor: OFF_WHITE,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '15px 25px',
  },
  // ADJUSTED: Apply flex properties to logoText to align image and text
  logoText: { 
    fontSize: '1.8rem',
    fontWeight: 700,
    color: LIGHT_BLACK,
    margin: 0,
    textDecoration: 'none',
    display: 'flex',          // Enables alignment of image and text
    alignItems: 'center',     // Vertically centers image and text
  },
  // NEW STYLE: For the image itself
  logoImage: {
    height: '35px',          // Set image height
    width: 'auto',
    marginRight: '8px',      // Space between image and text
    borderRadius: '4px',     // Subtle rounding for a modern look
  },
  navMenu: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: '30px',
  },
  navLink: {
    textDecoration: 'none',
    color: LIGHT_BLACK,
    fontSize: '1rem',
    fontWeight: 500,
    padding: '5px 0',
    transition: 'color 0.3s',
    borderBottom: `2px solid transparent`,
  },
  ctaButton: {
    backgroundColor: GOLD_ACCENT,
    color: LIGHT_BLACK,
    padding: '8px 16px',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    fontWeight: 600,
  },
  menuToggle: {
    display: 'none', 
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: LIGHT_BLACK,
  },
};

// Simple check for mobile view (768px threshold)
const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // NOTE: Smooth scroll logic is assumed to be present here as per previous steps.
  // For simplicity, I've omitted the handleScroll function here but it should exist.
  const handleScroll = (e, targetId) => {
    e.preventDefault(); 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (isMobile) { setIsOpen(false); }
    }
  };


  const mobileNavStyle = isMobile ? {
    display: isOpen ? 'flex' : 'none', 
    flexDirection: 'column',
    position: 'absolute',
    top: '70px', 
    left: 0,
    right: 0,
    backgroundColor: OFF_WHITE,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '10px 0',
    borderTop: `1px solid ${GOLD_ACCENT}`
  } : styles.navMenu;
  
  const mobileToggleStyle = isMobile ? {...styles.menuToggle, display: 'block'} : styles.menuToggle;


  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <a 
          href="#home" 
          style={styles.logoText}
          onClick={(e) => handleScroll(e, 'home')} 
        >
          {/* 2. LOGO IMPLEMENTATION: Image beside text */}
          <img src={OraLogo} alt="Orava Logo" style={styles.logoImage} />
          <span style={{color: LIGHT_BLACK}}></span>
        </a>
        
        <button style={mobileToggleStyle} onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
          {isOpen ? '✕' : '☰'} 
        </button>

        <nav>
          <ul style={mobileNavStyle}>
            <li><a href="#services" style={styles.navLink} onClick={(e) => handleScroll(e, 'services')}>Services</a></li>
            <li><a href="#about" style={styles.navLink} onClick={(e) => handleScroll(e, 'about')}>About</a></li>
            <li><a href="#news" style={styles.navLink} onClick={(e) => handleScroll(e, 'news')}>Latest News</a></li>
            <li><a href="#contact" style={styles.ctaButton} onClick={(e) => handleScroll(e, 'contact')}>Contact Us</a></li> 
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;