import React, { useState, useEffect } from 'react';

// Component(s)
import { Intro, Experience, Skills, ContactMe } from '../../components/index.js';

// Styling
import styles from './HomePage.styles.js';

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
      <Intro isMobile={isMobile}/>
      <Experience isMobile={isMobile}/>
      <Skills isMobile={isMobile}/>
      <ContactMe isMobile={isMobile}/>
    </div>
  )
}