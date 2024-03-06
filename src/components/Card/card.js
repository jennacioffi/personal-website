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
          <div style={styles.bulletPointTitleContainer}>
            <div style={styles.bulletPointTitle}> Skills </div>
          </div>
          <div style={styles.bulletPointItemsContainer}>
            <div style={styles.bulletPointItem}>- 1st Bullet Point Item</div>
            <div style={styles.bulletPointItem}>- 2nd Bullet Point Item</div>
            <div style={styles.bulletPointItem}>- 3rd Bullet Point Item</div>
          </div>
        </div>
      </div>
    </div>
  )
}
