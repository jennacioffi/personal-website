import React, { useState, useEffect } from 'react';

// Styling
import styles from './HomePage.styles.js';
import { colors } from '../../styles/colors.js';

// Image(s)
import jennaImage from '../../images/jenna-image.jpeg';

const IntroLeftComponent = () => {

  return (
    <div style={styles.IntroLeftSide}>
      <div style={styles.IntroImageContainer}>
        <img 
          src={jennaImage} 
          alt=''
          style={styles.IntroImage}
        />
      </div>
    </div>
  )
}

const IntroRightComponent = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <div style={styles.IntroRightSide}>
      <div style={styles.HiImName}>
        Hi, I'm Jenna
      </div> 
      <div style={styles.IntroCareerTitle}>
        Web Developer & Software Engineer
      </div>    
      <div style={styles.IntroLinksContainer}>
        <div
          style={{ backgroundColor: colors.GitHub, ...styles.buttonContainer }}
          onClick={() => openLink('https://github.com/jennacioffi')} // Update the link here
        >

          {/* window.open('https://github.com/jennacioffi', '_blank'); */}
          GitHub
        </div>
        <div
          style={{ backgroundColor: colors.LinkedIn, ...styles.buttonContainer }}
          onClick={() => openLink('https://www.linkedin.com/in/jenna-cioffi/')} // Update the link here
        >
          {/* window.open('https://www.linkedin.com/in/jenna-cioffi/', '_blank'); */}
          LinkedIn
        </div>
        <div
          style={{ backgroundColor: colors.EmailMe, ...styles.buttonContainer }}
          onClick={() => openLink('/personal-website/#/contact-me')} // Update the link here
        >
          {/* window.location.href = '/personal-website/#/contact-me'; */}
          Email Me
        </div>
      </div>
    </div>
  )
}

const IntroComponent = ({ isMobile }) => {

  return (
    <>
      <div 
        style={isMobile ? 
          styles.introComponentContainerMOBILE 
          : 
          styles.introComponentContainerDESKTOP
        }>
        <IntroLeftComponent/>
        <IntroRightComponent/>
      </div>
    </>
  )
}

export function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.outerContainer}>
      <IntroComponent isMobile={isMobile}/>
    </div>
  )
}