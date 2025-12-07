import React from 'react';

// --- THEME COLORS (Consistent with other components) ---
const ACCENT_COLOR = '#C6A96A'; // Softened Gold/Bronze
const BASE_DARK = '#0A0A0A'; // Rich, dark background for the section
const TEXT_LIGHT = '#EAEAEA'; // Neutral off-white text
// Dark background for the form container
const FORM_BG = '#1A1A1A'; 
// Input field background
const INPUT_BG = 'rgba(255, 255, 255, 0.05)'; 

// --- INLINE STYLES ---
const styles = {
  section: {
    padding: '100px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    color: TEXT_LIGHT,
    backgroundColor: BASE_DARK, // Ensure dark background is set
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  formContainer: {
    backgroundColor: FORM_BG,
    padding: '40px',
    borderRadius: '12px', // More rounded corners
    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.8), inset 0 0 10px ${ACCENT_COLOR}1A`, // Deeper shadow and subtle inner glow
    maxWidth: '600px', // Limiting form width for a better reading flow
    width: '100%',
  },
  inputBase: {
    width: '100%',
    padding: '15px 12px', // Increased vertical padding
    marginBottom: '20px',
    border: '1px solid transparent', // Base transparent border
    borderRadius: '6px',
    backgroundColor: INPUT_BG, 
    color: TEXT_LIGHT,
    fontSize: '1rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    outline: 'none',
  },
  // Style for inputs when focused (simulated)
  inputFocus: {
    borderColor: ACCENT_COLOR,
    boxShadow: `0 0 10px ${ACCENT_COLOR}60`,
  },
  textarea: {
    minHeight: '150px',
    resize: 'vertical',
  },
  submitButton: {
    width: '100%',
    padding: '18px', // Increased padding for a substantial button
    backgroundColor: ACCENT_COLOR,
    color: BASE_DARK, // Dark text on gold button
    border: 'none',
    borderRadius: '6px',
    fontSize: '1.2rem',
    fontWeight: 800,
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    letterSpacing: '0.5px',
  }
};

function ContactUs() {
  
  // State to handle input focus for simulated modern effect
  const [focusState, setFocusState] = React.useState({});
  
  const handleFocus = (name) => setFocusState({...focusState, [name]: true});
  const handleBlur = (name) => setFocusState({...focusState, [name]: false});

  // Function to apply dynamic focus style
  const getStyle = (name, baseStyle) => ({
    ...baseStyle,
    ...(focusState[name] ? styles.inputFocus : {}),
  });

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.sectionTitleContainer}>
        <h2 style={styles.sectionTitle}>GET IN TOUCH</h2>
        <div style={styles.accentDivider}></div>
      </div>
      
      <div style={styles.formContainer}>
        <p style={{textAlign: 'center', color: TEXT_LIGHT, marginBottom: '30px', opacity: 0.8}}>
          Have a question about our services or need a quick quote? Send us a message—we typically respond within 24 hours.
        </p>
        <form>
          <input 
            type="text" 
            placeholder="Your Full Name" 
            style={getStyle('name', styles.inputBase)} 
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email Address" 
            style={getStyle('email', styles.inputBase)} 
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            required 
          />
          <input 
            type="text" 
            placeholder="Subject (e.g., Quick Quote, Service Inquiry)" 
            style={getStyle('subject', styles.inputBase)} 
            onFocus={() => handleFocus('subject')}
            onBlur={() => handleBlur('subject')}
            required 
          />
          <textarea 
            placeholder="Your Detailed Message or Service Needs" 
            style={getStyle('message', {...styles.inputBase, ...styles.textarea})}
            onFocus={() => handleFocus('message')}
            onBlur={() => handleBlur('message')}
            required 
          />
          <button 
            type="submit" 
            style={styles.submitButton}
            // Add hover effects via handlers
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = TEXT_LIGHT; // Brighter on hover
              e.currentTarget.style.color = BASE_DARK;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = ACCENT_COLOR; // Reset
              e.currentTarget.style.color = BASE_DARK;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            SEND MESSAGE NOW &rarr;
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;