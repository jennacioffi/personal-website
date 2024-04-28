import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { colors } from '../../styles/colors.js';

import styles from './ContactMe.styles';

const Title = () => {
  return (
    <div style={{ backgroundColor: colors.palette2 }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={styles.titleContainer}>
          <div style={styles.titleTEXT}>
            Contact Me
          </div>
        </div>
      </div>
    </div>
  )
};

export function ContactMe() {
  return (
    <div>
      <NavBar />
      <div style={styles.outerContainer}>
        <div style={styles.main}>
          <Title />
        </div>
      </div>
    </div>
  )
}