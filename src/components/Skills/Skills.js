import React from 'react';

// Component(s)
import { Title } from '../index.js';

// Styling
import styles from './Skills.styles';

// react-icons
import { IoLogoJavascript} from 'react-icons/io';
import { FaReact, FaGithub, FaFigma, FaNodeJs, FaPython, FaAppStoreIos, FaAndroid, FaDev } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiKubernetes, SiRubyonrails, SiAndroidstudio, SiXcode } from 'react-icons/si';
import { TbBrandReactNative, TbJson } from 'react-icons/tb';
import { GrUserManager } from 'react-icons/gr';
import { BsFiletypeSql } from 'react-icons/bs';
import { MdWeb, MdOutlineHtml, MdOutlineCss, MdOutlineDataObject } from 'react-icons/md';
import { HiChatBubbleLeftRight, HiCommandLine } from 'react-icons/hi2';
import { GiCycle, GiNotebook } from 'react-icons/gi';
import { FaBugSlash, FaFileCode } from 'react-icons/fa6';
import { BiSolidCabinet } from 'react-icons/bi';
import { PiFileMd, PiTestTubeFill } from 'react-icons/pi';
import { RiEmotionLine } from 'react-icons/ri';
import { LuClock8 } from 'react-icons/lu';
import { TfiThought } from 'react-icons/tfi';
import { FaHandsHelping, FaCalendarCheck } from 'react-icons/fa';
import { VscGithubAction } from 'react-icons/vsc';
import { IoLogoFirebase, IoColorPaletteOutline } from 'react-icons/io5';

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

const Skills = ({ isMobile, id }) => {
  const logoSize = 45;

  const skills = [
    {
      skillName: 'Android Development',
      IconLogo: <FaAndroid size={logoSize} />,
    },
    {
      skillName: 'Android Studio',
      IconLogo: <SiAndroidstudio size={logoSize}/>
    },
    {
      skillName: 'CLI',
      IconLogo: <HiCommandLine size={logoSize} />
    },
    {
      skillName: 'Communication',
      IconLogo: <HiChatBubbleLeftRight size={logoSize}/>
    },
    {
      skillName: 'Confidence',
      IconLogo: <RiEmotionLine size={logoSize}/>,
    },
    {
      skillName: 'CSS',
      IconLogo: <MdOutlineCss size={logoSize}/>
    },
    {
      skillName: 'C++', 
      IconLogo: <SiCplusplus size={logoSize}/>, 
    },
    {
      skillName: 'Debugging',
      IconLogo: <FaBugSlash size={logoSize}/>
    },
    {
      skillName: 'Documentation',
      IconLogo: <PiFileMd size={logoSize}/>,
    },
    {
      skillName: 'DevOps',
      IconLogo: <FaDev size={logoSize}/>
    },
    {
      skillName: 'Figma', 
      IconLogo: <FaFigma size={logoSize}/>, 
    },
    {
      skillName: 'Firebase',
      IconLogo: <IoLogoFirebase size={logoSize}/>
    },
    { 
      skillName: 'Github',
      IconLogo: <FaGithub size={logoSize} />,
    },
    {
      skillName: 'Github Actions',
      IconLogo: <VscGithubAction size={logoSize}/>
    },
    {
      skillName: 'HTML',
      IconLogo: <MdOutlineHtml size={logoSize}/>
    },
    {
      skillName: 'iOS Development',
      IconLogo: <FaAppStoreIos size={logoSize} />,
    },
    {
      skillName: 'Javascript', 
      IconLogo: <IoLogoJavascript size={logoSize} /> 
    },
    {
      skillName: 'JSON',
      IconLogo: <TbJson size={logoSize}/>
    },
    {
      skillName: 'Jupyter Notebooks',
      IconLogo: <GiNotebook size={logoSize}/>
    },
    {
      skillName: 'Kuberenetes',
      IconLogo: <SiKubernetes size={logoSize}/>
    },
    {
      skillName: 'Node.js',
      IconLogo: <FaNodeJs size={logoSize} />,
    },
    {
      skillName: 'OOP',
      IconLogo: <MdOutlineDataObject size={logoSize}/>
    },
    {
      skillName: 'Open Minded',
      IconLogo: <TfiThought size={logoSize}/>
    },
    {
      skillName: 'Organized',
      IconLogo: <BiSolidCabinet size={logoSize} />,
    },
    {
      skillName: 'Product Testing',
      IconLogo: <PiTestTubeFill size={logoSize}/>
    },
    {
      skillName: 'Project Management',
      IconLogo: <GrUserManager size={logoSize} />,
    },
    {
      skillName: 'Punctual',
      IconLogo: <LuClock8 size={logoSize}/>,
    },
    {
      skillName: 'Python', 
      IconLogo: <FaPython size={logoSize} /> 
    },
    {
      skillName: 'React', 
      IconLogo: <FaReact size={logoSize} /> 
    },
    {
      skillName: 'React Native',
      IconLogo: <TbBrandReactNative size={logoSize}/>
    },
    {
      skillName: 'Realse Cycle Management',
      IconLogo: <FaCalendarCheck size={logoSize}/>
    },
    {
      skillName: 'Reliable',
      IconLogo: <FaHandsHelping size={logoSize}/>,
    },
    {
      skillName: 'Ruby on Rails',
      IconLogo: <SiRubyonrails size={logoSize}/>
    },
    {
      skillName: 'Scripting',
      IconLogo: <FaFileCode size={logoSize} />
    },
    {
      skillName: 'SQL',
      IconLogo: <BsFiletypeSql size={logoSize} />,
    },
    {
      skillName: 'SDLC',
      IconLogo: <GiCycle size={logoSize}/>
    },
    {
      skillName: 'TypeScript', 
      IconLogo: <SiTypescript size={logoSize}/>, 
    },
    {
      skillName: 'UI/UX Designing',
      IconLogo: <IoColorPaletteOutline size={logoSize}/>
    },
    {
      skillName: 'Web Development',
      IconLogo: <MdWeb size={logoSize} />,
    },
    {
      skillName: 'Xcode',
      IconLogo: <SiXcode size={logoSize}/>
    },
  ];

  return (
    <div style={styles.outerContainer}>
      <Title title={'Skill Exposure'} isMobile={isMobile} id={id}/>
      <div style={styles.outerSkillsContainer}>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills;