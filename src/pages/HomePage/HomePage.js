import React, { useState, useEffect } from 'react';

// Component(s)
import { Intro, Experience, Skills, Projects, ContactMe } from '../../components/index.js';

// Styling
import styles from './HomePage.styles.js';

export function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.outerContainer}>
      <Intro isMobile={isMobile} id={'about-me'}/>
      <Experience isMobile={isMobile} id={'experience'}/>
      <Skills isMobile={isMobile} id={'skills'}/>
      <Projects isMobile={isMobile} id={'projects'}/>
      <ContactMe isMobile={isMobile} id={'contact-me'}/>
    </div>
  )
}