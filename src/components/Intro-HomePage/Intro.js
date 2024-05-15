import React from 'react';

// Styling
import styles from './Intro.styles'
import { colors } from '../../styles/colors';

// Data
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

const IntroRightComponent = ({ isMobile }) => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <div style={{
      ...styles.IntroRightSide, 
      ...(isMobile && {
        paddingTop: '15px',
        paddingBottom: '15px',
      })
    }}>
      <div style={{ 
        ...styles.HiImName, 
        ...(isMobile && { fontSize: 60 }) 
      }}>
        Hi, I'm Jenna
      </div> 
      <div style={{
        ...styles.IntroCareerTitle, 
        ...(isMobile && { fontSize: 20 })
      }}>
        Web Developer & Software Engineer
      </div>    
      <div style={{
        ...styles.IntroLinksContainer, 
        ...(isMobile && { fontSize: 24 })
      }}>
        <div
          style={{ 
            backgroundColor: colors.GitHub, 
            ...styles.buttonContainer 
          }}
          onClick={() => openLink('https://github.com/jennacioffi')}
        >
          GitHub
        </div>
        <div
          style={{ 
            backgroundColor: colors.LinkedIn, 
            ...styles.buttonContainer 
          }}
          onClick={() => openLink('https://www.linkedin.com/in/jenna-cioffi/')}
        >
          LinkedIn
        </div>
        <div
          style={{ 
            backgroundColor: colors.EmailMe, 
            ...styles.buttonContainer 
          }}
          onClick={() => openLink('/personal-website/#/contact-me')}
        >
          Email Me
        </div>
      </div>
    </div>
  )
}

const Intro = ({ isMobile }) => {
  return (
    <>
      <div 
        style={{
          ...styles.introComponentContainer, 
          ...(isMobile && 
            {flexDirection: 'column', height: 'max-content',})
        }}>
        <IntroLeftComponent/>
        <IntroRightComponent isMobile={isMobile}/>
      </div>
    </>
  )
}

export default Intro;