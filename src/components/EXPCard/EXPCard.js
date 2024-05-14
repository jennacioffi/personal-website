import React from 'react';

// Styling
import styles from './EXPCard.styles';

const EXPSkilItem = ({ isMobile, skillItem }) => {

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
                {EXPItem.skillList.map((skillItem) => (
                  <EXPSkilItem isMobile={isMobile} skillItem={skillItem}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EXPCard;