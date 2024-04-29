import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Projects.styles';
import { MdEmojiEmotions } from 'react-icons/md';
import KYL_LOGO from '../../images/KYL-LOGO.png';
import PROFILE_PIC from '../../images/jenna-image.jpeg'

export function Projects() {
  const projectsList = [
    {
      compImg: <img 
        src={KYL_LOGO}
        alt="Company Logo" 
        style={{ 
          ...styles.logo,
          width: '80%',
          height: '80%',
        }}
      />,
      expTitle: 'KYL Breast Cancer Awareness App',
      expCompany: 'KnowYourLemons.org',
      expCompanyLINK: 'https://www.knowyourlemons.org/app',
      expSummary: 'While working at Atomic Jolt, I was privileged to learn from and work on an app meant to help people learn the warning signs of breast cancer. There are helpful guides on how to talk to your doctor, what to push for in doctor appointments, finding a nearby free mammogram, and much more.',
    },
    {
      compImg: <img 
        src='https://lcw.app/images/lcw-icon.png'
        alt="Company Logo" 
        style={{ 
          ...styles.logo, 
          width: '100%',
          height: '100%',
        }}
      />,
      expTitle: 'MIT Learner Credential Wallet',
      expCompany: 'MIT',
      expCompanyLINK: 'https://lcw.app/',
      expSummary: 'MIT\'s Learner Credential Wallet is the next generation technology for academic credentials. It is open source. Users can share their credentials, such as diplomas, easily. I was one of the developers who helped to create the standards for the SVG templates of credentials and converting those into PDFs.',
    },
    {
      compImg: <img 
        src={PROFILE_PIC}
        alt="profile pic" 
        style={{ 
          ...styles.logo, 
          width: '150%',
          height: '150%',
        }}
      />,
      expTitle: 'This Personal Website',
      expCompany: '(Git Repo)',
      expCompanyLINK: 'https://github.com/jennacioffi/personal-website',
      expSummary: 'Utilizing technologies like React, JavaScript, CSS, and Figma, this project represents an endeavor to enhance my proficiency in web development. Motivated by the opportunity for skill enrichment, I embarked on creating this website. Additionally, I derive personal enjoyment from the creative process of designing websites and applications, and I anticipate further growth as I engage with insights and ideas shared by the online community.',
    },
    {
      compImg: <MdEmojiEmotions 
        size={75} 
        style={{
          ...styles.logo,
        }} 
      />,
      expTitle: 'Moodee',
      expCompany: '(Git Repo)',
      expCompanyLINK: 'https://github.com/AnneMarieJetton/Moodee',
      expSummary: 'This project employs a range of technologies including React, MongoDB, SQL, and Figma. Collaborating closely with a colleague, we are committed to expanding our skill set while delivering excellence in project development.',
    },
  ];

  const Title = ({ title }) => {
    return (
      <div style={styles.titleContainer}>
        <div style={styles.titleTEXT}>
          {title}
        </div>
      </div>
    );
  };

  const TopHalf = ({ expObj, onClick }) => {
    const handleCompanyLinkClick = (event) => {
      event.stopPropagation(); 
    };

    return (
      <>
        <div style={styles.leftSide}>
          <div style={styles.outerLogoContainer}>
            <div style={styles.innerLogoContainer}>
              {expObj.compImg}
            </div>
          </div>
        </div>
        <div style={styles.rightSide}>
          <div style={styles.infoTextContainer}>
            <div style={styles.infoTitle}>
              {expObj.expTitle}
            </div>
            <div style={styles.infoCompany}>
              {expObj.expCompanyLINK ? (
                <a 
                  href={expObj.expCompanyLINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={handleCompanyLinkClick}
                >
                  {expObj.expCompany}
                </a>
              ) : (
                <div>{expObj.expCompany}</div>
              )}
            </div>
            {expObj.expTimeWorked && <div style={styles.infoTimeWorked}>
              {expObj.expTimeWorked}
            </div>}
          </div>
        </div>
      </>
    );
  }

  const TLDRSummary = ({ skillName }) => {
    return (
      <div style={styles.TLDRSummaryContainer}>
        <div style={styles.TLDRSummaryText}>
          {skillName}
        </div>
      </div>
    );
  }

  const IndividualProjectItem = ({ expObj }) => {
    return (
      <div style={styles.ExpItemContainer}>
        <div style={styles.topHalfContainer}>
          <TopHalf
            expObj={expObj}
          />
        </div>
        <div style={styles.bottomHalfContainer}>
          <TLDRSummary
            skillName={expObj.expSummary}
          />
        </div>
      </div>
    );
  }

  const ProjectItems = ({ title, expHistory }) => {
    return (
      <div style={styles.ProjectItemsContainer}>
        <div>
          <Title title={title}/>
        </div>
        <div style={styles.IndividualProjectItemContainer}>
          {expHistory.map((expItem, index) => (
            <IndividualProjectItem expObj={expItem} key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div style={styles.outerContainer}>
        <div style={styles.main}>
          <div style={styles.inner}>
            <ProjectItems 
              title='Projects'
              expHistory={projectsList}
            />
          </div>
        </div>
      </div>
    </div>
  )
}