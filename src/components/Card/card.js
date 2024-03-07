import React from 'react'
import styles from './card.styles.js' // Import your CSS styles

export default function Card() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.cardBackgroundContainer}>
        <div style={styles.outerCard}>
          <div style={styles.innerRectangle}>
            {/* This is the inner rectangle. */}
          </div>
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.cardTitleContainer}>
            <div style={styles.cardTitle}> Experience </div>
          </div>
          <div style={styles.bulletPointItemsContainer}>
            <div style={styles.bulletPointItem1}>- Atomic Jolt, Logan UT</div>
            <div style={styles.bulletPointItem2}>Software Developer</div>
            <div style={styles.bulletPointItem3}>August 2022 - Jan 2024</div>
          </div>
          <div style={styles.bulletPointItemsContainer}>
            <div style={styles.bulletPointItem1}>- USU Teaching Assistant</div>
            <div style={styles.bulletPointItem2}>
              CS 1440 - Methods in Computer Science
            </div>
            <div style={styles.bulletPointItem3}>August 2022 - Jan 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}
