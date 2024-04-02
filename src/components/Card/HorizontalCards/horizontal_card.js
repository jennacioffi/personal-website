import React from 'react';
import { colors } from '../../../styles/colors.js';
import styles from './horizontal_card.styles.js';

export default function HorizontalCards({ title, bulletPoints, color }) {
  const backgroundColor = `${color}` || colors.defaultColor;
  const containerHeight = bulletPoints.length * 0.75;

  const bulletPointItems = bulletPoints.map((item, index) => (
    <div key={index} style={styles.bulletPointItemsContainer}>
      <div 
        style={styles.bulletPointItem1}
      >
        {item.title}
      </div>
      {item.subtitle && item.subtitle.startsWith('http') ? (
        <div style={styles.bulletPointItem2}>
          <a href={item.subtitle} target="_blank" rel="noopener noreferrer" >
            {item.subtitle}
          </a>
        </div>
      ) : (
        <div style={styles.bulletPointItem2}>
          {item.subtitle}
        </div>
      )}
      {item.date && <div style={styles.bulletPointItem3}>{item.date}</div>}
    </div>
  ));

  return (
    <div
      style={{
        ...styles.mainContainer,
        height: `${containerHeight}%`,
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
