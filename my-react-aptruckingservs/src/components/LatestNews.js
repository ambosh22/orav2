import React from 'react';

// --- THEME COLORS (Adopted from the Services component for visual consistency) ---
const ACCENT_COLOR = '#C6A96A'; // Softened Gold/Bronze
const BASE_DARK = '#0A0A0A'; // Rich, dark background
const TEXT_LIGHT = '#EAEAEA'; // Neutral off-white text
// Slightly lighter black for the card background
const CARD_BACKGROUND = '#1E1E1E'; 

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
  sectionTitleContainer: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: 900,
    color: TEXT_LIGHT, 
    marginBottom: '10px',
    textShadow: `0 4px 10px ${ACCENT_COLOR}99`, 
    letterSpacing: '1px',
  },
  // Accent line style
  accentDivider: {
    width: '80px', 
    height: '3px',
    backgroundColor: ACCENT_COLOR,
    margin: '0 auto',
    borderRadius: '2px',
  },
  newsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Adjusting minmax for better responsiveness
    gap: '40px', // Increased gap
  },
  newsPost: {
    backgroundColor: CARD_BACKGROUND,
    padding: '30px', // Increased padding
    borderRadius: '12px', // More rounded corners
    boxShadow: `0 8px 16px rgba(0, 0, 0, 0.6)`,
    // Removed borderTop, replaced with a subtle inner glow effect for a modern look
    transition: 'transform 0.3s ease-in-out',
  },
  postDate: {
    fontSize: '0.8rem',
    color: ACCENT_COLOR,
    marginBottom: '15px',
    fontWeight: 600,
    letterSpacing: '0.5px',
  },
  postTitle: {
    fontSize: '1.4rem', // Slightly larger title
    fontWeight: 700,
    color: TEXT_LIGHT,
    marginBottom: '20px',
  },
  // Style for the link (making it look like a primary button)
  postLink: {
    display: 'inline-block',
    color: BASE_DARK, // Dark text on a bright background
    backgroundColor: ACCENT_COLOR,
    padding: '10px 20px',
    textDecoration: 'none',
    fontWeight: 700,
    borderRadius: '6px',
    transition: 'background-color 0.3s, transform 0.2s',
    border: `1px solid ${ACCENT_COLOR}`,
    '&:hover': {
        backgroundColor: TEXT_LIGHT, // Change to white on hover
        transform: 'translateY(-2px)',
    }
  }
};

function LatestNews() {
  // UPDATED NEWS DATA with relevant titles and Facebook Reel links
  const newsData = [
    { 
      date: "Nov 20, 2025", 
      title: "New Trailer Upgrade: Unveiling Our Latest Hauling Power", 
      link: "https://www.facebook.com/reel/898519866183862" 
    },
    { 
      date: "Oct 15, 2025", 
      title: "Maintenance Check: Peak Performance on the Road", 
      link: "https://www.facebook.com/reel/1492767005172240" 
    },
    { 
      date: "Sep 05, 2025", 
      title: "Behind the Scenes: Precision Loading and Logistics", 
      link: "https://www.facebook.com/reel/1718771852136253" 
    },
  ];

  return (
    <section id="news" style={styles.section}>
      <div style={styles.sectionTitleContainer}>
        <h2 style={styles.sectionTitle}>LATEST NEWS & REELS</h2>
        <div style={styles.accentDivider}></div>
      </div>
      
      <div style={styles.newsGrid}>
        {newsData.map((post, index) => (
          <div 
            key={index} 
            style={styles.newsPost}
            // Added hover effect for the card itself
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <p style={styles.postDate}>{post.date}</p>
            <h3 style={styles.postTitle}>{post.title}</h3>
            
            {/* The link is styled as a clear, visible button */}
            <a 
                href={post.link} 
                style={styles.postLink}
                target="_blank" // Opens link in a new tab
                rel="noopener noreferrer" // Security best practice
                // Added hover logic for the link button (simulated)
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = TEXT_LIGHT;
                    e.currentTarget.style.color = BASE_DARK;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = ACCENT_COLOR;
                    e.currentTarget.style.color = BASE_DARK;
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                Watch Reel &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestNews;