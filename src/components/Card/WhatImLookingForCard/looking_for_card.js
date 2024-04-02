import React from 'react';
import { colors } from '../../../styles/colors.js'; // Import colors from colors.js
import styles from './looking_for_card.styles.js'

export default function LookingForCard({ title, bulletPoints, color }) {
  const backgroundColor = `${color}` || colors.defaultColor;

  const  containerHeight = bulletPoints.length * .75

  const bulletPointItems = bulletPoints.map((item, index) => (
    <div key={index} style={styles.bulletPointItemsContainer}>
      <div style={styles.paragraph}>{item.paragraph}</div>
    </div>
  ));

  return  (
    <div
      style = {{
        ...styles.mainContainer,
        height: `${containerHeight}%`,
      }}>
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