import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import styles from './AboutMeAndFAQs.styles';

import { colors } from '../styles/colors.js';

import profilePic from '../images/jenna-image.jpeg';

const TopContainer = () => {
  return (
    <div style={{ backgroundColor: colors.palette2 }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={styles.topContainer}>
          <div style={styles.leftHalf}>
            <NameTag />
          </div>
          <div style={styles.rightHalf}>
            <div style={{ position: 'relative' }}>
              <StitchedCard
                style={{
                  transform: 'rotate(30deg)',
                  backgroundColor: colors.palette4,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              <StitchedCard
                style={{
                  transform: 'rotate(330deg)',
                  backgroundColor: colors.palette5,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              <StitchedCard
                img={profilePic}
                style={{
                  transform: 'rotate(0deg)',
                  backgroundColor: colors.white,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const NameTag = () => {
  return (
    <div style={styles.textBackgroundContainer}>
      <div style={styles.textBackgroundContainerTEXT}>
        Hi, I'm Jenna
      </div>
    </div>
  );
}

const StitchedCard = ({ style, img }) => {
  return (
    <div style={{  ...styles.cardContainer, ...style }}>
      <div style={styles.cardContainerStitching}>
        {img && (
          <img 
            src={profilePic} alt="Jenna" 
            style={styles.profilePic}
          />
        )}
      </div>
    </div>
  );
}

const MidContainer = () => {
  return (
    <div style={{ backgroundColor: colors.palette2 }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={styles.midContainer}>
          
        </div>
      </div>
    </div>
  );
}

export function AboutMeAndFAQs() {
  return (
    <div>
      <NavBar />
      <div style={styles.outerContainer}>
        <div style={styles.main}>
          <TopContainer />
          <div style={styles.midContainer}>
            <MidContainer />
          </div>
          <div style={styles.bottomContainer}>
            {/* Hello3 */}
          </div>
        </div>
      </div>
    </div>
  );
}
