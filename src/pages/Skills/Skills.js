import React from 'react';
import styles from './Skills.styles';
import { colors } from '../../styles/colors.js';
import { IoLogoJavascript} from 'react-icons/io';
import { FaReact, FaGithub, FaFigma, FaNodeJs, FaPython, FaAppStoreIos, FaAndroid } from 'react-icons/fa';
import { SiCplusplus, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { GrUserManager } from 'react-icons/gr';
import { BsFiletypeSql } from 'react-icons/bs';
import { MdWeb } from 'react-icons/md';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';

const Title = ({ title }) => {
  return (
    <div style={{ backgroundColor: colors.palette2 }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={styles.titleContainer}>
          <div style={styles.titleTEXT}>
            {title}
          </div>
        </div>
      </div>
    </div>
  )
};

const SkillItem = ({ skillName, IconLogo}) => {
  return (
    <div style={styles.SkillItemContainer}>
      <div style={styles.icon}>
        {IconLogo}
      </div>
      <div style={styles.text}>
        {skillName}
      </div>
    </div>
  );
}

export function Skills() {

  const skills = [
    { 
      skillName: 'Javascript', 
      IconLogo: <IoLogoJavascript size={35} /> 
    },
    { 
      skillName: 'React', 
      IconLogo: <FaReact size={35} /> 
    },
    { 
      skillName: 'Python', 
      IconLogo: <FaPython size={35} /> 
    },
    {
      skillName: 'C++', 
      IconLogo: <SiCplusplus size={35}/>, 
    },
    {
      skillName: 'TypeScript', 
      IconLogo: <SiTypescript size={35}/>, 
    },
    {
      skillName: 'Figma', 
      IconLogo: <FaFigma size={35}/>, 
    },
    {
      skillName: 'React Native',
      IconLogo: <TbBrandReactNative size={35}/>
    },
    {
      skillName: 'Nodejs',
      IconLogo: <FaNodeJs size={35} />,
    },
    {
      skillName: 'Github',
      IconLogo: <FaGithub size={35} />,
    },
    {
      skillName: 'Project Management',
      IconLogo: <GrUserManager size={35} />,
    },
    {
      skillName: 'iOS Development',
      IconLogo: <FaAppStoreIos size={35} />,
    },
    {
      skillName: 'Android Development',
      IconLogo: <FaAndroid size={35} />,
    },
    {
      skillName: 'SQL',
      IconLogo: <BsFiletypeSql size={35} />,
    },
    {
      skillName: 'Web Development',
      IconLogo: <MdWeb size={35} />,
    },
    {
      skillName: 'Communication',
      IconLogo: <HiChatBubbleLeftRight size={35}/>
    },
  ];

  return (
    <div>
      <div style={styles.outerContainer}>
        <div style={styles.main}>
          <div style={styles.inner}>
            <Title title="Skills"/>
            <div style={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <SkillItem
                  key={index}
                  skillName={skill.skillName}
                  IconLogo={skill.IconLogo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}