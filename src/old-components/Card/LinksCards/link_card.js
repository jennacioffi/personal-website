import React from 'react';
import styles from './link_card.styles.js'; // Import your CSS styles

export default function LinkCard({ icon, link }) {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.cardBackgroundContainer}>
        <div style={styles.dashedBorder}>
          <img src={icon} alt="Icon" style={styles.icon} /> {/* Display the icon */}
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" style={styles.link}>{link}</a>
          ) : (
            <div style={styles.link}>Send me an email in the "Contact Me" Card! </div>
          )}
        </div>
      </div>
    </div>
  );
}
