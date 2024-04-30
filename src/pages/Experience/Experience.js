import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Experience.styles';
import ReactCardFlip from 'react-card-flip';
import { FaUniversity, FaHandsHelping } from 'react-icons/fa';

const expWorkHistory = [
  {
    compImg: <img 
      src='https://www.atomicjolt.com/img/vectors/logo-icon.svg' 
      alt="Company Logo" 
      style={{ width: '100%', height: '100%'}} 
    />,
    expTitle: 'App Developer (iOS & Android)',
    expCompany: 'Atomic Jolt',
    expCompanyLINK: 'https://www.atomicjolt.com/atomic-jolt-apps',
    expTimeWorked: 'August 2022 - Jan 2024',
    skillList: [
      'iOS Development', 
      'Android Development',
      'Git',
      'React-Native',
      'Problem-Solving',
      'Project Management',
      'Documentation',
    ],
    expSummary: {
      briefSummary: 'Contributed to the development and maintenance of mobile applications for iOS and Android platforms as a Software/App Developer. Engaged in all phases of the software development lifecycle, encompassing coding, testing, and debugging. Proficient in comprehensive testing procedures, including the creation of testing spreadsheets and contributing to Cypress tests. Emphasized meticulous documentation and project organization.',
      bulletPoints: [
        '- Initiated the creation of a comprehensive GitHub Wiki documentation, streamlining the onboarding process for new developers and providing a centralized resource for all team members to reference when working on projects under my ownership. This initiative significantly reduced the time required for new developers to acclimate and improved code consistency across projects',
        '- Assumed a leadership role in the development and management of the Know Your Lemons Breast Cancer Awareness app, serving as the primary point of contact for the client. Directed the creation and deployment of app builds to various app stores, ensuring timely releases. Facilitated bug-fixing efforts and spearheaded client meetings, contributing to the app\'s success and client satisfaction',
        '- Collaborated with MIT on the development of the Learner Credential Wallet app, pioneering solutions in the emerging field of digital credential management. Played a pivotal role in conceptualizing and implementing the app\'s functionalities, transforming the way users manage and showcase their educational achievements. This initiative represented a significant step forward in the digitization of academic credentials, positioning MIT at the forefront of innovation in education technology.',
      ]
    }
  },
  {
    compImg: <FaUniversity size={75} />,
    expTitle: 'TA - CS1440 - Methods in CS',
    expCompany: 'USU Dep. of Science',
    expTimeWorked: 'Jan 2022 - May 2024',
    skillList: ['Documentation', 'Python', 'CLI', 'Testing', 'Planning', 'git', 'Refactoring', 'Leadership', 'Time Management'],
    expSummary: {
      briefSummary: 'Served as a Teaching Assistant for a course focused on teaching students command line usage, git, and problem-solving techniques. Emphasized the importance of documentation throughout the software development process, from initial planning to post-testing analysis, fostering a culture of thoroughness and clarity in project execution.',
      bulletPoints: [
        '- Conducted regular office hours to provide additional support and assistance to students outside of class, fostering a conducive environment for learning and addressing individual queries and concerns effectively.',
        '- Delivered detailed feedback on student assignments, offering valuable insights to enhance their understanding and proficiency in the course material.',
        '- Collaborated with colleagues to develop and implement grading scripts, optimizing the grading process and enabling TAs and professors to allocate more time towards student assistance and mentoring.',
      ]
    }
  }
];

const expVolunteerHistory = [
  {
    compImg: <img 
      src='https://nevadahumanesociety.org/wp-content/uploads/2023/07/nhs_logo_header.png' 
      alt="Company Logo" 
      style={{ width: '90%', height: '40%'}} 
    />,
    expTitle: 'Animal Helping Volunteer',
    expCompany: 'Northern Nevada Humane Society',
    expTimeWorked: 'August 2013 - May 2017',
    skillList: [
      'flexible', 
      'organized',
      'reliable',
      'teamwork',
      'communication'
    ],
    expSummary: {
      briefSummary: 'Fulfilled volunteer hours at the Nevada Humane Society, providing specialized care and support to sick newborn kittens while collaborating with adoption counselors to facilitate successful adoptions.',
      bulletPoints: [
        '- Delivered specialized care to sick newborn kittens, administering medications and adhering to feeding schedules to promote their health and development.',
        '- Collaborated with veterinary professionals to ensure the well-being of kittens, implementing feeding schedules and administering medications as directed.',
        '- Worked closely with adoption counselors to facilitate successful adoptions, contributing to increased adoption rates and the placement of kittens into loving homes.',
        '- Demonstrated compassion and dedication in providing a nurturing environment for vulnerable animals, fostering positive community impact.'
      ]
    }
  },
  {
    compImg: <FaHandsHelping size={75}/>,
    expTitle: 'Food Shelter Volunteer',
    expCompany: 'Food Shelters',
    expTimeWorked: 'August 2013 - May 2017',
    skillList: [
      'empathetic', 
      'organized',
      'reliable',
      'teamwork',
      'understanding',
      'open-minded',
    ],
    expSummary: {
      briefSummary: 'Volunteered at local homeless shelters, assisting in donation drives aimed at collecting essentials for individuals and families in need, demonstrating dedication and compassion.',
      bulletPoints: [
        '- Provided hands-on assistance during donation drives, aiding in the setup, organization, and execution of events to ensure efficient operations and a positive experience for donors and recipients.',
        '- Demonstrated dedication and compassion by actively participating in donation initiatives and contributing personal donations to support individuals and families experiencing homelessness.',
        '- Engaged with donors and community members to promote awareness and participation in donation drives, fostering a spirit of generosity and community support for those in need.'
      ]
    }
  }
];

export function Experience() {
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

  const SkillItem = ({ skillName }) => {
    return (
      <div style={styles.skillItemContainer}>
        <div style={styles.skillItemText}>
          {skillName}
        </div>
      </div>
    );
  }

  const FrontCard = ({ expObj, onClick }) => {
    return (
      <div 
        onClick={onClick}
        style={styles.ExpItemContainer}
      >
        <div style={styles.topHalfContainer}>
          <TopHalf
            expObj={expObj}
          />
        </div>
        <div style={styles.bottomHalfContainer}>
          {expObj.skillList.map((skill, index) => (
            <SkillItem
              skillName={skill}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }

  const BackCard = ({ expObj, onClick }) => {
    return (
      <div onClick={onClick} style={styles.ExpItemContainer}>
        <div style={styles.experienceSummaryContainer}>
          <div style={styles.experienceSummaryText}>
            {expObj.expSummary.briefSummary}
          </div>
          {expObj.expSummary.bulletPoints.map((bulletPointItem, index) => (
            <div style={styles.bulletPointItem} key={index}>
              {bulletPointItem}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const IndvEXPItem = ({ expObj }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <ReactCardFlip
        flipDirection='horizontal'
        isFlipped={isFlipped}
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <FrontCard expObj={expObj} onClick={flipCard} />
        <BackCard expObj={expObj} onClick={flipCard}/>
      </ReactCardFlip>
    );
  }

  const EXPItems = ({ title, expHistory }) => {
    return (
      <div style={styles.ProjectItemsContainer}>
        <div>
          <Title title={title}/>
        </div>
        <div style={styles.IndividualProjectItemContainer}>
          {expHistory.map((expItem, index) => (
            <IndvEXPItem expObj={expItem} key={index} />
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
            <EXPItems 
              title='CS Experience'
              expHistory={expWorkHistory}
            />
            <EXPItems 
              title='Volunteer Experience'
              expHistory={expVolunteerHistory}
            />
          </div>
        </div>
      </div>
    </div>
  )
}