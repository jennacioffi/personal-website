import React from 'react';

// Styling
import styles from './EXPCard.styles';


const EXPCard = ({ EXPItem }) => {

  return (
    <>
      <div style={styles.outerContainer}>
        <div style={styles.cardContainer}>
          <div style={styles.SummaryOuterContainer}>
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
            {/* These 2 will be stacked in a column on the right of the Summary but the Summary will stack on top in Mobile View */}
            <div>
            Title Section
            </div>
            <div>
            Skills Section
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EXPCard;