import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import styles from './AboutMeAndFAQs.styles';

import { FaGraduationCap } from 'react-icons/fa';

import { colors } from '../styles/colors.js';

import profilePic from '../images/jenna-image.jpeg';
import USULogo from '../images/USU.jpeg';


const NameTag = () => {
  return (
    <div style={styles.textBackgroundContainer}>
      <div style={styles.textBackgroundContainerTEXT}>
        Hi, I'm Jenna
      </div>
    </div>
  );
}

const StitchedCard = ({ style, img, imgStyle }) => {
  return (
    <div style={{  ...styles.cardContainer, ...style }}>
      <div style={styles.cardContainerStitching}>
        {img && (
          <img 
            alt='PIC'
            src={img}
            style={{...styles.image, ...imgStyle}}
          />
        )}
      </div>
    </div>
  );
}

const TopContainer = () => {
  return (
    <div style={{ backgroundColor: colors.palette2 }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={styles.topContainer}>
          <div style={styles.leftHalfTOP}>
            <NameTag />
          </div>
          <div style={styles.rightHalfTOP}>
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

const EduInfo = () => {
  return (
    <div style={styles.eduInfoContainer}>
      <div style={styles.icon}>
        <FaGraduationCap size={90} style={{color:colors.white}}/>
      </div>
      <div style={styles.eduInfo}>
        {/* information */}
        <div style={styles.eduInfoTextLine1}>
          Bachelors in Computer Science
        </div>
        <div style={styles.eduInfoTextLine2}>
          Utah State University, Logan UT
        </div>
        <div style={styles.eduInfoTextLine3}>
          Graduated May 2023
        </div>
      </div>
    </div>
  );
}

const MidContainer = () => {
  return (
    <div style={{ backgroundColor: colors.palette1 }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={styles.midContainer}>
          <div style={styles.leftHalfMID}>
            <StitchedCard
              style={{
                transform: 'rotate(30deg)',
                backgroundColor: colors.palette4,
                position: 'absolute',
                // top: 0,
                // left: 0,
              }}
            />
            <StitchedCard
              style={{
                transform: 'rotate(330deg)',
                backgroundColor: colors.palette5,
                position: 'absolute',
                // top: 0,
                // left: 0,
              }}
            />
            <StitchedCard
              img={USULogo}
              style={{
                transform: 'rotate(0deg)',
                backgroundColor: colors.white,
              }}
            />
          </div>
          <div style={styles.rightHalfMID}>
            <EduInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomContainer = () => {
  return (
    <div style={{ backgroundColor: colors.palette2 }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={styles.bottomContainer}>
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
          <MidContainer />
          <BottomContainer />
        </div>
      </div>
    </div>
  );
}
