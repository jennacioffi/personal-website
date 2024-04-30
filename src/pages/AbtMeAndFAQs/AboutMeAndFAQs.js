/* eslint-disable indent */
import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar.js';
import styles from './AboutMeAndFAQs.styles.js';
import dotenv from 'dotenv';
import ReactCardFlip from 'react-card-flip';
import { FaGraduationCap } from 'react-icons/fa';
import { colors } from '../../styles/colors.js';
import profilePic from '../../images/jenna-image.jpeg';
import USULogo from '../../images/USU.jpeg';

export function AboutMeAndFAQs() {
  dotenv.config();
  const faqQuestions = [
    '1. Tell me about yourself and your background in software/web development', 
    '2. What motivated you to pursue a career in software/web development?', 
    '3. Describe a time when you had to work under pressure to meet a tight deadline. How did you handle it?', 
    '4. How do you handle constructive criticism or feedback on your code?', 
    '5. Describe a time when you faced a challenge and what you did to overcome it.',
    '6. Can you discuss a situation where you had to learn a new technology or programming language quickly? How did you approach it?', 
    '7. Describe a time when you had a disagreement with a team member during a project. How did you handle it?', 
    '8. How do you prioritize tasks and manage your time effectively when working on multiple projects or deadlines?', 
    '9. How do you approach documentation in your projects?', 
    '10. What do you enjoy most about software/web development, and what do you find most challenging?'
  ];
  const faqAnswers = [
    'The most challenging aspect of software/web development for me is grappling with poorly written documentation, which often lacks clarity and coherence. As a developer who prioritizes user-centric thinking, bridging the gap between everyday visualization and the technical intricacies of documentation can be daunting. To address this challenge, I focus on crafting clear and understandable documentation, seeking feedback to ensure its accessibility. Despite these hurdles, the most enjoyable aspect of software/web development lies in witnessing the transformation of ideas into tangible solutions. The satisfaction derived from seeing projects evolve from concept to reality, coupled with the continuous learning experience, remains immensely rewarding.', 
    'My motivation to pursue a career in software/web development stems from the realization that coding opens doors to endless possibilities. In today\'s digital age, where most users interact with the internet through various platforms like smartphones, tablets, and computers, web development offers the opportunity to reach the widest audience. Social media platforms exemplify this reach, enabling users to connect and share experiences globally. I am driven by the potential to make a positive impact through technology. My deep interest in psychology fuels my desire to leverage app and web development to create solutions that benefit individuals on a global scale.', 
    'During my academic experience, I encountered several instances where I had to navigate tight deadlines, particularly with school assignments. Recognizing the importance of punctuality in the professional world, I made it a personal priority to stay ahead of my tasks and avoid the risk of falling behind.\n\nI remained proactive in managing my workload to prevent any last-minute rushes. In the academic setting, I maintained open communication with my professors.\n\nThis approach ensured that I fulfilled my commitments responsibly while maintaining a professional standard of work and communication.', 
    'I approach constructive criticism and feedback on my code with an open mind and a growth-oriented mindset. Recognizing that I\'m still evolving in this field, I genuinely value code reviews as opportunities for learning and improvement. I welcome kind and constructive criticism, as it provides invaluable insights that contribute to my professional development. Viewing every feedback session as a learning experience, I strive to implement suggested improvements and refine my coding practices continuously.', 
    'In navigating life\'s challenges, I adopt a methodical approach centered around pausing, analyzing, and adapting accordingly. When confronted with a challenge, I take a moment to pause and thoroughly analyze the situation. I identify the root cause, assess its potential impacts, and brainstorm potential solutions. This analysis involves questioning whether I possess the necessary skills to address the issue independently or if I require assistance.\n\nIf I determine that I may require assistance, I initially attempt to resolve the challenge on my own, allocating a reasonable timeframe to explore potential solutions. I prioritize efficiency and avoid unnecessary delays. Should I encounter difficulty in finding a resolution, I proactively seek assistance from colleagues or mentors.\n\nFor challenges that prove too complex or beyond my expertise, I acknowledge limitations and promptly seek alternative solutions. This may involve compiling a comprehensive overview of the challenge and engaging the expertise of individuals or resources better equipped to provide assistance, ensuring effective problem-solving and forward progress.',
    'Early in my career, I encountered a scenario where I had to swiftly acquire proficiency in iOS and Android app development for a project aimed at supporting a non-profit foundation\'s breast cancer awareness initiative. Despite lacking prior experience in app development, I was determined to meet the client\'s expectations and deliver impactful results.\n\nTo expedite my learning process, I leveraged online learning platforms such as Codecademy and YouTube, focusing on mastering the necessary programming languages. Additionally, I received guidance from the development lead, who provided clear direction on key areas to prioritize.\n\nThrough dedicated self-study and mentorship, I rapidly acquired the requisite skills, enabling me to contribute effectively to the project. Subsequently, my newfound expertise proved valuable when we secured a project with MIT, where I assisted the tech lead in optimizing the app deployment process for their digital wallet solution.\n\nThis experience underscored the effectiveness of proactive learning and collaboration in adapting to new technologies and fulfilling project requirements efficiently.', 
    'Throughout my career, I\'ve encountered differing perspectives and occasional disagreements with team members. Embracing the diversity of backgrounds and experiences within a team, I prioritize fostering understanding and collaboration.\n\nIn one instance, I found myself at odds with a colleague regarding our approaches to problem-solving. Despite the discord, I maintained a composed demeanor and advocated for a brief period of reflection to de-escalate tensions. This allowed both parties to regroup and revisit the discussion with a calmer mindset.\n\nPreferring resolution over conflict, I actively seek to understand others\' viewpoints and remain receptive to alternative approaches, provided they align with the project\'s objectives. By fostering open communication and demonstrating flexibility, I\'ve successfully mitigated conflicts and fostered constructive collaboration among team members.', 
    'I prioritize tasks by using task management tools to organize them from highest to lowest priority. While I\'m still exploring the best software for this purpose, I\'ve found success with tools like the Reminders app and calendar app on Apple products. Each morning, I create a strategic plan of action, ensuring that essential tasks are completed first while allowing flexibility for tasks that can be tackled later if time permits.', 
    'Documentation is integral to my project approach, underscored by professional experience. While teaching a freshman CS course at USU as a student, I learned firsthand the importance of documentation through practical application in coursework. Upon entering the professional realm after graduation, I encountered challenges with poorly documented projects, realizing the significant impact on team productivity and collaboration. Confronted with an undocumented app development project, I invested additional time to decipher its complexities and promptly authored comprehensive documentation, alleviating team setbacks and facilitating smoother collaboration. Subsequently, my colleagues consistently sought my documentation expertise, recognizing its value in navigating projects efficiently.', 
    'The most challenging aspect of software/web development for me is grappling with poorly written documentation, which often lacks clarity and coherence. As a developer who prioritizes user-centric thinking, bridging the gap between everyday visualization and the technical intricacies of documentation can be daunting. To address this challenge, I focus on crafting clear and understandable documentation, seeking feedback to ensure its accessibility. Despite these hurdles, the most enjoyable aspect of software/web development lies in witnessing the transformation of ideas into tangible solutions. The satisfaction derived from seeing projects evolve from concept to reality, coupled with the continuous learning experience, remains immensely rewarding.'
  ];
  
  const NameTag = () => {
    return (
      <div style={styles.textBackgroundContainer}>
        <div style={styles.textBackgroundContainerTEXT}>Hi, I'm Jenna</div>
      </div>
    );
  };

  const StitchedCard = ({ style, img, imgStyle }) => {
    return (
      <div style={{ ...styles.cardContainer, ...style }}>
        <div style={styles.cardContainerStitching}>
          {img && <img alt='PIC' src={img} style={{ ...styles.image, ...imgStyle }} />}
        </div>
      </div>
    );
  };

  const TopContainer = () => {
    return (
      <div style={{ backgroundColor: colors.palette2 }}>
        <div style={styles.inner}>
          <div style={styles.topContainer}>
            <div style={styles.leftHalfTOP}>
              <NameTag />
            </div>
            <div style={styles.rightHalfTOP}>
              <div style={{ position: 'relative' }}>
                <StitchedCard
                  style={{
                    transform: 'rotate(30deg)',
                    backgroundColor: colors.palette4,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
                <StitchedCard
                  style={{
                    transform: 'rotate(330deg)',
                    backgroundColor: colors.palette5,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
                <StitchedCard img={profilePic} style={{ transform: 'rotate(0deg)', backgroundColor: colors.white }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EduInfo = () => {
    return (
      <div style={styles.eduInfoContainer}>
        <div style={styles.icon}>
          <FaGraduationCap size={90} style={{ color: colors.white }} />
        </div>
        <div style={styles.eduInfo}>
          <div style={styles.eduInfoTextLine1}>Bachelors in Computer Science</div>
          <div style={styles.eduInfoTextLine2}>Utah State University, Logan UT</div>
          <div style={styles.eduInfoTextLine3}>Graduated May 2023</div>
        </div>
      </div>
    );
  };

  const MidContainer = () => {
    return (
      <div style={{ boxShadow: `inset 2px 2px 4px ${colors.black}`, backgroundColor: colors.palette1 }}>
        <div style={styles.inner}>
          <div style={styles.midContainer}>
            <div style={styles.leftHalfMID}>
              <StitchedCard
                style={{
                  transform: 'rotate(30deg)',
                  backgroundColor: colors.palette4,
                  position: 'absolute',
                }}
              />
              <StitchedCard
                style={{
                  transform: 'rotate(330deg)',
                  backgroundColor: colors.palette5,
                  position: 'absolute',
                }}
              />
              <StitchedCard img={USULogo} style={{ transform: 'rotate(0deg)', backgroundColor: colors.white }} />
            </div>
            <div style={styles.rightHalfMID}>
              <EduInfo />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FAQItem = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <div style={styles.FAQsCardItem}>
        <ReactCardFlip 
          flipDirection="vertical" isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
          <div onClick={flipCard} style={styles.FAQsCardContainer}>
            <div style={styles.FAQsCardContainerStitching}>
              <div style={styles.FAQquestion}>
                  {question}
                </div>
              </div>
          </div>
          <div onClick={flipCard} style={styles.FAQsCardContainer}>
            <div style={styles.FAQsCardContainerStitching}>
              <div style={styles.FAQanswer}>
                  {answer}
                </div>
              </div>
          </div>
        </ReactCardFlip>
      </div>
    );
  };

  const Title = () => {
    return (
      <div style={styles.FAQsOuterTitleContainer}>
        <div style={styles.FAQsTitleContainer}>
          <div style={styles.FAQsTitle}>Interview FAQs</div>
        </div>
      </div>
    );
  };

  const BottomContainer = () => {
    return (
      <div style={{ boxShadow: `inset 2px 2px 4px ${colors.black}`, backgroundColor: colors.palette2 }}>
        <div style={styles.inner}>
          <div style={styles.bottomContainer}>
            <Title />
          </div>
          <div style={styles.outerFAQItemContainer}>
            {faqQuestions.map((question, index) => (
                <FAQItem question={question} answer={faqAnswers[index]} />
          ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      <div style={styles.outerContainer}>
        <div style={styles.main}>
          <TopContainer />
          <MidContainer />
          <BottomContainer />
        </div>
      </div>
    </div>
  );
}
