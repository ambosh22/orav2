import React from 'react';

// --- THEME COLORS ---
const ACCENT_COLOR = '#C6A96A'; 
const BASE_DARK = '#0A0A0A'; 
const TEXT_LIGHT = '#EAEAEA'; 
const SECONDARY_BG = '#1A1A1A'; // Darker background than the app base

// --- INLINE STYLES ---
const styles = {
    section: {
        // Reduced padding for a tighter section, but keeps it full width
        padding: '50px 20px', 
        backgroundColor: SECONDARY_BG,
        color: TEXT_LIGHT,
        borderBottom: `1px solid ${ACCENT_COLOR}40`,
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '30px',
    },
    item: {
        flex: '1 1 300px', // Allows items to grow/shrink but maintain a minimum width
        textAlign: 'center',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: BASE_DARK,
        boxShadow: `0 4px 15px rgba(0, 0, 0, 0.5)`,
        transition: 'transform 0.3s',
        borderBottom: `3px solid ${ACCENT_COLOR}`,
    },
    itemIcon: {
        fontSize: '2.5rem',
        marginBottom: '10px',
    },
    itemTitle: {
        fontSize: '1.2rem',
        fontWeight: 700,
        color: ACCENT_COLOR,
        marginBottom: '10px',
    },
    itemText: {
        fontSize: '0.95rem',
        color: TEXT_LIGHT,
        lineHeight: 1.5,
    }
};

function ValueProps() {
    const valuePropositions = [
        { 
            title: "1. Personal Follow-up", 
            text: "We listen, explain and follow up – you always know what is happening with your machine.",
            
        },
        { 
            title: "2. Diagnosis and Precision", 
            text: "We use special tools and experience to find exact faults, not just symptoms.",
           
        },
        { 
            title: "3. Effective Repair", 
            text: "Fast response and quality in every detail – so you can get your machine back up and running.",
            
        },
    ];

    return (
        <section id="value-props" style={styles.section}>
            <div style={styles.container}>
                {valuePropositions.map((item, index) => (
                    <div 
                        key={index} 
                        style={styles.item}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={styles.itemIcon}>{item.icon}</div>
                        <h3 style={styles.itemTitle}>{item.title}</h3>
                        <p style={styles.itemText}>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ValueProps;