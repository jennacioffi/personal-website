import React from "react";
import styles from "./card.styles.js"; // Import your CSS styles

export default function Card() {
  return (
    <div style={styles.cardContainer}>
        <div style={styles.outerCard}>
            This is a card component.
        </div>
    </div>
  );
};