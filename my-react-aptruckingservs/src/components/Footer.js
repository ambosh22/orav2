import React from 'react';
// 1. IMPORT THE SOCIAL ICONS COMPONENT
import { SocialIcon } from 'react-social-icons'; 

// --- THEME COLORS (Consistent with other components) ---
const ACCENT_COLOR = '#C6A96A'; // Softened Gold/Bronze
const BASE_DARK = '#0A0A0A'; // Deepest dark background
const TEXT_LIGHT = '#EAEAEA'; // Neutral off-white text
const TEXT_MUTED = '#AAAAAA'; // Muted text for secondary info
const FOOTER_BG = '#1A1A1A'; // Slightly lighter dark background for the footer itself

// --- FONT AWESOME UNICODE ICONS ---
// Only keeping the Truck icon, as Facebook/TikTok are now handled by SocialIcon
const Icons = {
    Truck: '\uf0d1', // Truck (Solid/Generic placeholder)
};

// Define the styles object here
const styles = {
  // Base Footer Styles
  appFooter: {
    backgroundColor: FOOTER_BG,
    color: TEXT_LIGHT, 
    paddingTop: '60px',
    fontFamily: 'Arial, sans-serif',
    borderTop: `3px solid ${ACCENT_COLOR}40`, 
  },
  
  // Main Content Container (Flexbox)
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between', 
    gap: '30px',
    padding: '0 25px 40px 25px',
    flexWrap: 'wrap', 
  },
  
  // Column Styling
  footerColumn: {
    flex: 1, 
    minWidth: '280px', 
    marginBottom: '30px',
  },
  columnHeading: {
    color: ACCENT_COLOR, 
    fontSize: '1.4rem', 
    fontWeight: 800,
    marginBottom: '25px',
    paddingBottom: '5px',
    letterSpacing: '0.5px',
  },
  
  // Logo and Info
  footerLogo: {
    fontSize: '1.8rem',
    fontWeight: 900,
    color: ACCENT_COLOR,
    marginBottom: '10px',
    textShadow: `0 0 5px ${ACCENT_COLOR}40`,
  },
  tagline: {
    fontSize: '0.95rem',
    color: TEXT_MUTED,
    lineHeight: 1.6,
  },
  
  // Social Links
  socialLinks: {
    marginTop: '25px',
    display: 'flex',
    // Reduced gap slightly to fit the SocialIcon component size better
    gap: '10px', 
    alignItems: 'center',
  },
  
  // Generic Icon Style (Used only for the Truck icon now)
  socialIcon: {
    color: ACCENT_COLOR,
    fontSize: '1.8rem',
    textDecoration: 'none',
    transition: 'color 0.3s, transform 0.3s',
    fontFamily: 'Font Awesome 6 Brands', 
  },

  // Contact Info (No Change)
  contactInfo: {
    fontSize: '0.95rem',
    lineHeight: 1.8,
    color: TEXT_LIGHT,
  },
  
  // Google Map Container Styles (No Change)
  mapContainer: {
    width: '100%',
    height: '250px',
    backgroundColor: FOOTER_BG, 
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: `0 0 25px rgba(0, 0, 0, 0.6)`,
    border: `1px solid ${ACCENT_COLOR}40`,
    boxSizing: 'border-box',
  },
  
  // Bottom Bar (No Change)
  footerBottom: {
    borderTop: `1px solid ${TEXT_MUTED}40`,
    padding: '20px 25px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  copyright: {
    fontSize: '0.85rem',
    color: TEXT_MUTED,
  },
  legalLinks: {
    display: 'flex',
    gap: '20px',
  },
  legalLink: {
    textDecoration: 'none',
    color: TEXT_MUTED,
    fontSize: '0.85rem',
    transition: 'color 0.3s',
  }
};

// --- Map Component (No Change) ---
const MapEmbed = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15357.25150916053!2d-1.890045!3d52.486243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bd9e9882269c7%3A0x6b77207604d5d999!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sid!4v1678886400000!5m2!1sen!2sid"; 

  return (
    <iframe 
      src={mapSrc}
      width="100%" 
      height="100%" 
      style={{ border: 0, borderRadius: '12px' }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Company Location Map"
    ></iframe>
  );
};


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.appFooter}>
      <div style={styles.footerContainer}>
        
        {/* Column 1: Company Info & Socials */}
        <div style={styles.footerColumn}>
          <div style={styles.footerLogo}>ORAVA SERVICE</div>
          <p style={styles.tagline}>Expert machinery repair and maintenance serving the Inland region.</p>
          <div style={styles.socialLinks}>
            
            {/* 2. FACEBOOK ICON: Using react-social-icons */}
            <SocialIcon 
                url="https://www.facebook.com/p/Orava-61566442282006/" 
                fgColor={FOOTER_BG} // Foreground color (the icon itself)
                bgColor={ACCENT_COLOR} // Background color (the circle)
                style={{ height: 40, width: 40 }} // Set size
                target="_blank"
                rel="noopener noreferrer"
            />

            {/* 2. TIKTOK ICON: Using react-social-icons */}
            <SocialIcon 
                url="https://www.tiktok.com/@oravafirma" 
                fgColor={FOOTER_BG} 
                bgColor={ACCENT_COLOR}
                style={{ height: 40, width: 40 }}
                target="_blank"
                rel="noopener noreferrer"
            />
            
            {/* Placeholder for LinkedIn/Other (Still using Font Awesome Unicode if linked) */}
            <a 
                href="#!" 
                style={{...styles.socialIcon, fontFamily: 'Font Awesome 6 Solid'}}
                aria-label="Trucking Service"
                onMouseOver={(e) => e.currentTarget.style.color = TEXT_LIGHT}
                onMouseOut={(e) => e.currentTarget.style.color = ACCENT_COLOR}
            >
                {Icons.Truck} 
            </a>

          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div style={styles.footerColumn}>
          <h3 style={styles.columnHeading}>Contact & Location</h3>
          <p style={styles.contactInfo}>Email: info@oravaservice.com</p>
          <p style={styles.contactInfo}>Phone: +47 12 34 56 78</p>
          <p style={styles.contactInfo}>Service Area: Inland Region, Norway</p>
        </div>
        
        {/* Column 3: Location Map */}
        <div style={styles.footerColumn}>
          <h3 style={styles.columnHeading}>Service Map</h3>
          <div style={styles.mapContainer}>
            <MapEmbed />
          </div>
        </div>

      </div>

      {/* Legal/Copyright Bar */}
      <div style={styles.footerBottom}>
        <p style={styles.copyright}>© {currentYear} ORAVA Service. All rights reserved.</p>
        <div style={styles.legalLinks}>
          <a href="/privacy" style={styles.legalLink} onMouseOver={(e) => e.currentTarget.style.color = ACCENT_COLOR} onMouseOut={(e) => e.currentTarget.style.color = TEXT_MUTED}>Privacy Policy</a>
          <a href="/terms" style={styles.legalLink} onMouseOver={(e) => e.currentTarget.style.color = ACCENT_COLOR} onMouseOut={(e) => e.currentTarget.style.color = TEXT_MUTED}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;