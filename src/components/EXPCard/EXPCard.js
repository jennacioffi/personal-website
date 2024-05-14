import React, { useState } from 'react';

// Components
import { Title } from '../index.js';

// React Icons
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

// Styling
import styles from './EXPCard.styles';

// Data
import { expWorkHistory } from '../../data/WorkExperience.json';

const EXPSkilItem = ({ skillItem }) => {
  return (
    <>
      <div style={styles.EXPSkillItemContainer}>
        <div style={styles.EXPSKillItemTEXT}>
          {skillItem}
        </div>
      </div>
    </>
  )
}


const EXPCard = ({ isMobile, EXPItem }) => {
  const handleCompanyLinkClick = (event) => {
    event.stopPropagation(); 
  };

  return (
    <>
      <div style={{...styles.outerContainer, ...(isMobile && { height: '900px', width: '425px'})}}>
        <div style={{...styles.cardContainer, ...(isMobile && { flexDirection: 'column' })}}>
          <div style={{...styles.SummaryOuterContainer, ...(isMobile && { width: '375px' })}}>
            <div style={styles.SummaryContainer}>
              <div style={styles.SummaryText}>
                {EXPItem.expSummary && (
                  <>
                    {EXPItem.expSummary.briefSummary && (
                      <div>{EXPItem.expSummary.briefSummary}</div>
                    )}
                    {EXPItem.expSummary.bulletPoints && (
                      <ul>
                        {EXPItem.expSummary.bulletPoints.map((point, index) => (
                          <li key={index} style={styles.SummaryBulletPoints}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div style={styles.TitleAndSkillsContainer}>
            <div style={styles.EXPJobInfoContainer}>
              <div style={styles.expTitle}>
                {EXPItem.expTitle}
              </div>
              <div style={styles.expCompanyText}>
                {EXPItem.expCompanyLINK ? (
                  <a 
                    href={EXPItem.expCompanyLINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={handleCompanyLinkClick}
                  >
                    {EXPItem.expCompany}
                  </a>
                ) : (
                  <div>{EXPItem.expCompany}</div>
                )}
              </div>
              <div style={styles.expTimeWorked}>
                {EXPItem.expTimeWorked}
              </div>
            </div>
            <div style={styles.EXPSkillsContainer}>
              <div style={{...styles.EXPSkillsBox, ...(isMobile && { width: '375px' })}}>
                {EXPItem.skillList.map((skillItem, index) => (
                  <EXPSkilItem key={index} isMobile={isMobile} skillItem={skillItem}/>
                ))}
              </div>
            </div>
          </div>
        </div>
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

const ExperienceComponent = ({ isMobile }) => {
  return (
    <>
      <div style={styles.ExpComponentContainer}>
        <Title 
          title={'Experience'}
          isMobile={isMobile}
        />
        <EXPCarousel 
          EXPHistory={expWorkHistory}
          isMobile={isMobile}
        />
      </div>
    </>
  )
}

export default ExperienceComponent;