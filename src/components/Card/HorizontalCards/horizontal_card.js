import React, { useState } from 'react';
import { colors } from '../../../styles/colors.js';
import styles from './horizontal_card.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function HorizontalCards({ title, bulletPoints, color }) {
  const backgroundColor = `${color}` || colors.defaultColor;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleInfo = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const bulletPointItems = bulletPoints.map((item, index) => (
    <div 
      key={index} 
      style={styles.bulletPointItemsContainer}
      onClick={() => toggleInfo(index)} // Make the outermost part clickable  
    >
      <div style={styles.bulletPointItem1}>
        <div>
          {item.title}
          {item.info && (
            <FontAwesomeIcon
              icon={faAngleDown}
              style={styles.arrowIcon}
            />
          )}
        </div>
      </div>
      {item.subtitle && item.subtitle.startsWith('http') ? (
        <div style={styles.bulletPointItem2}>
          <a href={item.subtitle} target="_blank" rel="noopener noreferrer">
            {item.subtitle}
          </a>
        </div>
      ) : (
        <div style={styles.bulletPointItem2}>{item.subtitle}</div>
      )}
      {item.date && <div style={styles.bulletPointItem3}>{item.date}</div>}
      {expandedIndex === index && item.info && (
        <div style={styles.infoExpanded}>
          <div style={styles.briefSummary}>
            {item.info.briefSummary}
          </div>
          {item.info.briefSummaryBP1 && 
            (<div style={styles.briefSummaryBPItems}>
              {item.info.briefSummaryBP1}
            </div>)
          }
          {item.info.briefSummaryBP2 && 
            (<div style={styles.briefSummaryBPItems}>
              {item.info.briefSummaryBP2}
            </div>)
          }
          {item.info.briefSummaryBP3 && 
            (<div style={styles.briefSummaryBPItems}>
              {item.info.briefSummaryBP3}
            </div>)
          }
          {item.info.briefSummaryBP4 && 
            (<div style={styles.briefSummaryBPItems}>
              {item.info.briefSummaryBP4}
            </div>)
          }
          {item.info.link && item.info.link.startsWith('http') ? (
            <div style={styles.briefSummaryBPItems}>
              <a href={item.info.link} target="_blank" rel="noopener noreferrer">
                {item.info.link}
              </a>
            </div>
          ) : (
            <div style={styles.briefSummaryBPItems}>
              {item.info.link}
            </div>
          )}
        </div>
      )}
    </div>
  ));

  return (
    <div style={{ ...styles.mainContainer, backgroundColor }}>
      <div style={styles.cardBackgroundContainer}>
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
