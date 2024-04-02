import React, { useState } from 'react';
import { colors } from '../../../styles/colors.js';
import styles from './interview_faqs_card.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default function InterviewFAQsCard({ title, bulletPoints, color }) {
  const backgroundColor = `${color}` || colors.defaultColor;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const collapseAnswer = () => {
    setExpandedIndex(null); // Collapse the answer when clicked directly
  };

  const bulletPointItems = bulletPoints.map((item, index) => (
    <div key={index} style={styles.bulletPointItemsContainer}>
      <div style={styles.question} onClick={() => toggleAnswer(index)}>
        {item.question}
        <FontAwesomeIcon icon={faAngleDown} style={styles.arrowIcon} />
      </div>
      {expandedIndex === index && item.answer && (
        <div style={styles.answer}onClick={collapseAnswer}>{item.answer}</div>
      )}
    </div>
  ));

  return (
    <div style={styles.mainContainer}>
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
