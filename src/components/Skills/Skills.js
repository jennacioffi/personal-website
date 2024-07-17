import React from 'react';

// Component(s)
import { Title } from '../index.js';

// Styling
import styles from './Skills.styles';

// react-icons
import { IoLogoJavascript} from 'react-icons/io';
import { FaGit, FaJava, FaReact, FaFigma, FaNodeJs, FaPython, FaAppStoreIos, FaAndroid } from 'react-icons/fa';
import { SiCypress, SiTypescript } from 'react-icons/si';
import { BsFiletypeSql } from 'react-icons/bs';
import { MdOutlineHtml, MdOutlineCss } from 'react-icons/md';
import { HiCommandLine } from 'react-icons/hi2';
import { PiFileMd } from 'react-icons/pi';


const SkillItem = ({ skill }) => {
  return (
    <div style={styles.skillContainer}>
      <div style={styles.iconContainer}>
        {skill.IconLogo}
      </div>
      <div style={styles.skillName}>
        {skill.skillName}
      </div>
    </div>
  );
}

const logoSize = 60;

const languageSkills = [
  { skillName: 'Javascript', IconLogo: <IoLogoJavascript size={logoSize} /> },
  { skillName: 'TypeScript', IconLogo: <SiTypescript size={logoSize} /> },
  { skillName: 'Python', IconLogo: <FaPython size={logoSize} /> },
  { skillName: 'CSS', IconLogo: <MdOutlineCss size={logoSize} /> },
  { skillName: 'HTML', IconLogo: <MdOutlineHtml size={logoSize} /> },
  { skillName: 'Cypress', IconLogo: <SiCypress size={logoSize} /> },
  { skillName: 'Java', IconLogo: <FaJava size={logoSize} /> },
  { skillName: 'SQL', IconLogo: <BsFiletypeSql size={logoSize} /> },
];

const frameworkToolsSkills = [
  { skillName: 'Git', IconLogo: <FaGit size={logoSize} /> },
  { skillName: 'React & React Native', IconLogo: <FaReact size={logoSize} /> },
  { skillName: 'CLI', IconLogo: <HiCommandLine size={logoSize} /> },
  { skillName: 'Android Development', IconLogo: <FaAndroid size={logoSize} /> },
  { skillName: 'iOS Development', IconLogo: <FaAppStoreIos size={logoSize} /> },
  { skillName: 'Documentation', IconLogo: <PiFileMd size={logoSize} /> },
  { skillName: 'Node.js', IconLogo: <FaNodeJs size={logoSize} /> },
  { skillName: 'Figma', IconLogo: <FaFigma size={logoSize} /> },  
];

const Skills = ({ isMobile, id }) => {
  return (
    <div style={styles.outerContainer}>
      <Title title={'Skill Exposure'} isMobile={isMobile} id={id}/>
      <div style={styles.scrollableSkills}> 
        <div style={styles.subTitle}>
          Languages
        </div>
        <div style={styles.outerSkillsContainer}>
          {languageSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
        <div style={styles.subTitle}>
          Frameworks & Tools
        </div>
        <div style={styles.outerSkillsContainer}>
          {frameworkToolsSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;