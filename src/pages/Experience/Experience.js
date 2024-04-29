import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Experience.styles';
import { colors } from '../../styles/colors.js';
import { IoLogoJavascript, IoLogoReact, IoLogoCss3 } from 'react-icons/io';

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
      {IconLogo}
      {skillName}
    </div>
  );
}

export function Experience() {

  return (
    <div>
      <NavBar />
      <div style={styles.outerContainer}>
        <div style={styles.main}>
          <div style={styles.inner}>
            <div style={styles.csExpContainer}>
              <Title title="CS Experience"/>
              {/* <SkillItem
                skillName="Javascript"
                IconLogo={<IoLogoJavascript size={35} />}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}