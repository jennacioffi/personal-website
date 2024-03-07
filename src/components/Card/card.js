import React from 'react';
import { colors } from '../../styles/colors.js'; // Import colors from colors.js
import styles from './card.styles.js'; // Import your CSS styles

export default function Card({ title, bulletPoints, color }) {
  const backgroundColor = colors[color] || colors.defaultColor;
  const bulletPointItems = bulletPoints.map((item, index) => (
    <div key={index} style={styles.bulletPointItemsContainer}>
      <div style={styles.bulletPointItem1}>{item.title}</div>
      <div style={styles.bulletPointItem2}>{item.subtitle}</div>
      <div style={styles.bulletPointItem3}>{item.date}</div>
    </div>
  ));

  return (
    <div
      style={{
        ...styles.mainContainer,
        height: `${200 + bulletPoints.length * 50}px`,
      }}
    >
      <div style={{ ...styles.cardBackgroundContainer, backgroundColor }}>
        <div style={styles.dashedBorderContainer}>
          <div style={styles.dashedBorder}></div>
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.cardTitleContainer}>
            <div style={styles.cardTitle}>{title}</div>
          </div>
          {bulletPointItems}
        </div>
      </div>
    </div>
  );
}
