import React from 'react';
import styles from './Skills.styles';
import { IoLogoJavascript} from 'react-icons/io';
import { FaReact, FaGithub, FaFigma, FaNodeJs, FaPython, FaAppStoreIos, FaAndroid } from 'react-icons/fa';
import { SiCplusplus, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { GrUserManager } from 'react-icons/gr';
import { BsFiletypeSql } from 'react-icons/bs';
import { MdWeb, MdOutlineHtml, MdOutlineCss, MdOutlineDataObject } from 'react-icons/md';
import { HiChatBubbleLeftRight, HiCommandLine } from 'react-icons/hi2';
import { GiCycle } from "react-icons/gi";
import { FaBugSlash } from "react-icons/fa6";



const Title = ({ title }) => {
  return (
    <div>
      <div>
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
      skillName: 'Android Development',
      IconLogo: <FaAndroid size={35} />,
    },
    {
      skillName: 'CLI',
      IconLogo: <HiCommandLine size={35} />
    },
    {
      skillName: 'Communication',
      IconLogo: <HiChatBubbleLeftRight size={35}/>
    },
    {
      skillName: 'CSS',
      IconLogo: <MdOutlineCss size={35}/>
    },
    {
      skillName: 'C++', 
      IconLogo: <SiCplusplus size={35}/>, 
    },
    {
      skillName: 'Debugging',
      IconLogo: <FaBugSlash size={35}/>
    },
    {
      skillName: 'Figma', 
      IconLogo: <FaFigma size={35}/>, 
    },
    { 
      skillName: 'Github',
      IconLogo: <FaGithub size={35} />,
    },
    {
      skillName: 'HTML',
      IconLogo: <MdOutlineHtml size={35}/>
    },
    {
      skillName: 'iOS Development',
      IconLogo: <FaAppStoreIos size={35} />,
    },
    {
      skillName: 'Javascript', 
      IconLogo: <IoLogoJavascript size={35} /> 
    },
    {
      skillName: 'Node.js',
      IconLogo: <FaNodeJs size={35} />,
    },
    {
      skillName: 'OOP',
      IconLogo: <MdOutlineDataObject size={35}/>
    },
    {
      skillName: 'Project Management',
      IconLogo: <GrUserManager size={35} />,
    },
    {
      skillName: 'Python', 
      IconLogo: <FaPython size={35} /> 
    },
    {
      skillName: 'React', 
      IconLogo: <FaReact size={35} /> 
    },
    {
      skillName: 'React Native',
      IconLogo: <TbBrandReactNative size={35}/>
    },
    {
      skillName: 'SQL',
      IconLogo: <BsFiletypeSql size={35} />,
    },
    {
      skillName: 'Software Dev Life Cycle',
      IconLogo: <GiCycle size={35}/>
    },
    {
      skillName: 'TypeScript', 
      IconLogo: <SiTypescript size={35}/>, 
    },
    {
      skillName: 'Web Development',
      IconLogo: <MdWeb size={35} />,
    },
  ];


  return (
    <>
      <div style={styles.outerContainer}>
        <div>
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
    </>
  )
}