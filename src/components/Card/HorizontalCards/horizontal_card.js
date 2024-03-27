import React from 'react';
import { colors } from '../../../styles/colors.js'; // Import colors from colors.js
import styles from './horizontal_card.styles.js'; // Import your CSS styles

export default function HorizontalCards({ title, bulletPoints, color }) {
  const backgroundColor = colors[color] || colors.defaultColor;

  // Calculate the minimum height dynamically based on the number of bullet points
  let minHeight;
  if (title === 'Experience') {
    minHeight = 275; // Set the minimum height for Experience card
  } else if (title === 'Skills') {
    minHeight = 225; // Set the minimum height for Skills card
  } else if (title === 'Education') {
    minHeight = 200; // Set the minimum height for Education card
  } else {
    minHeight = 200; // Default minimum height
  }

  const bulletPointItems = bulletPoints.map((item, index) => (
    <div key={index} style={styles.bulletPointItemsContainer}>
      <div style={styles.bulletPointItem1}>{item.title}</div>
      {item.subtitle && (
        <div style={styles.bulletPointItem2}>{item.subtitle}</div>
      )}
      {item.date && <div style={styles.bulletPointItem3}>{item.date}</div>}
    </div>
  ));

  return (
    <div
      style={{
        ...styles.mainContainer,
        height: `${Math.max(minHeight, bulletPoints.length * 80)}px`,
      }}
    >
      <div style={{ ...styles.cardBackgroundContainer, backgroundColor }}>
        <div style={styles.dashedBorder}>
          <div style={styles.cardTitleContainer}>
            <div style={styles.cardTitle}>{title}</div>
          </div>
          {bulletPointItems}
        </div>
      </div>
    </div>
  );
}
