import React from 'react';
import styles from './Skills.styles';
import { IoLogoJavascript} from 'react-icons/io';
import { FaReact, FaGithub, FaFigma, FaNodeJs, FaPython, FaAppStoreIos, FaAndroid, FaDev } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiKubernetes } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
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
  const logoSize = 30;

  const skills = [
    {
      skillName: 'Android Development',
      IconLogo: <FaAndroid size={logoSize} />,
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
      skillName: 'Web Development',
      IconLogo: <MdWeb size={logoSize} />,
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