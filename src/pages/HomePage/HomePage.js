import React, { useState, useEffect } from 'react';

// Component(s)
import { Intro, ExperienceComponent } from '../../components/index.js';

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
      <ExperienceComponent 
        isMobile={isMobile}
      />
    </div>
  )
}