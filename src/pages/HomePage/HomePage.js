import React, { useState, useEffect } from 'react';

// React Icons
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

// Component(s)
import { EXPCard } from '../../components/index.js';

// Styling
import styles from './HomePage.styles.js';
import { colors } from '../../styles/colors.js';

// Image(s)
import jennaImage from '../../images/jenna-image.jpeg';

// Data
import { expWorkHistory } from '../../data/WorkExperience.json';


const Title = ({ title, isMobile }) => {

  return (
    <div style={styles.TitleElement}>
      <div style={styles.lineTitleItem}></div>
      <div style={{
        ...styles.TitleText,
        ...(isMobile && { fontSize: 40 }),
      }}>
        {title}
      </div>
      <div style={styles.lineTitleItem}></div>
    </div>
  )
}

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

const IntroComponent = ({ isMobile }) => {

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

const EXPCarousel = ({ EXPHistory, isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === EXPHistory.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? EXPHistory.length - 1 : prevIndex - 1));
  };

  return (
    <>
      {isMobile ? (
        <div style={{...styles.EXPCarouselContainer, flexDirection: 'column'}}>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px', }}>
            <div 
              style={styles.EXPArrows}
              onClick={goToPrevCard}
            >
              <FaArrowCircleLeft size={isMobile ? 35 : 50} />
            </div>
            <div 
              style={styles.EXPArrows}
              onClick={goToNextCard}
            >
              <FaArrowCircleRight size={isMobile ? 35 : 50} />
            </div>
          </div>
          {EXPHistory.map((EXPItem, index) => (
            <div 
              key={index}
              style={index === currentIndex ? { display: 'none' } : {}}
            >
              <EXPCard EXPItem={EXPItem} isMobile={isMobile}/>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.EXPCarouselContainer}>
          <div 
            style={styles.EXPArrows}
            onClick={goToPrevCard}
          >
            <FaArrowCircleLeft size={isMobile ? 35 : 50} />
          </div>
          {EXPHistory.map((EXPItem, index) => (
            <div 
              key={index}
              style={index === currentIndex ? { display: 'none' } : {}}
            >
              <EXPCard EXPItem={EXPItem} isMobile={isMobile}/>
            </div>
          ))}
          <div 
            style={styles.EXPArrows}
            onClick={goToNextCard}
          >
            <FaArrowCircleRight size={isMobile ? 35 : 50} />
          </div>
        </div>
      )}
    </>
  );
};


const ExperienceComponent = ({ isMobile, EXPHistory }) => {
  return (
    <>
      <div style={styles.ExpComponentContainer}>
        <Title 
          title={'Experience'}
          isMobile={isMobile}
        />
        <EXPCarousel 
          EXPHistory={EXPHistory}
          isMobile={isMobile}
        />
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
      <ExperienceComponent 
        isMobile={isMobile}
        EXPHistory={expWorkHistory}
      />
    </div>
  )
}