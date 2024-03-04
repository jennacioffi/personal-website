import React from "react";
import styles from "./card.styles.js"; // Import your CSS styles

export default function Card() {
  return (
    <div style={styles.cardContainer}>
        <div style={styles.outerCard}>
          <div style={styles.innerRectangle}>
            This is the inner rectangle.
          </div>
            This is a card component.
        </div>
    </div>
  );
};