import React from 'react';
import { colors } from '../../../styles/colors.js'; // Import colors from colors.js
import styles from './interview_faqs_card.styles.js'; // Import your CSS styles

export default function InterviewFAQsCard({ title, bulletPoints, color }) {
  const backgroundColor = colors[color] || colors.defaultColor;

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
        height: `${Math.max('400px', bulletPoints.length * 80)}px`,
      }}
    >
      <div style={{ ...styles.cardBackgroundContainer, backgroundColor }}>
        <div style={styles.dashedBorder}></div>
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
