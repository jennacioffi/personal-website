import React, { useState, useEffect } from 'react';

import { Title } from '../../components/index';

import ProjectData from '../../data/Projects.json';

import styles from './Projects.styles';

const ProjectTitle = ({ project }) => {
  return (
    <div style={styles.ProjectTitleOuterContainer}>
      <div style={styles.ProjectTitleContainer}>
        {project.projectName}
      </div>
      {project.Github && (
        <>
        </>
      )}
      {project.projectLink && (
        <>
        </>
      )}
      {project.ProjectRelatedTo && (
        <>
        </>
      )}
    </div>
  )
}

const ProjectSummary = ({ project, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <div style={styles.ProjectSummaryContainerMOBILE}>
          <div style={styles.ProjectSummaryTitleContainer}>
            Project Summary
          </div>
          <div style={styles.ProjectSummaryInfoText}>
            {project.projectSummary}
          </div>
        </div>
      ) : (
        <div style={styles.ProjectSummaryContainer}>
          <div style={styles.ProjectSummaryTitleContainer}>
            Project Summary
          </div>
          <div style={styles.ProjectSummaryInfoText}>
            {project.projectSummary}
          </div>
        </div>
      )}
    </>
  )
}

const SkillItem = ({ skill }) => {
  return (
    <div style={styles.SkillItemContainer}>
      {skill}
    </div>
  )
}

const KeySkills = ({ project, isMobile }) => {
  return (
    <div style={{...styles.KeySkillsContainer, ...(isMobile && { width: '350px', height: '350px',})}}>
      <div style={styles.innerKeySkillsBox}>
        <div style={styles.KeySkillsBoxTitle}>
          Key Skills
        </div>
        <div style={styles.SkillItemsOuterContainer}>
          {project.projectSkills.map((skill, index) => (
            <SkillItem skill={skill} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

const ProjectItem = ({ isMobile, project }) => {
  return (
    <div style={styles.ProjectItemContainer}>
      <ProjectTitle project={project} />
      { isMobile ? (
        <div style={{width: '350px', height: '750px' , ...styles.ProjectInfoContainer}}>
          <div style={styles.ProjectItemsMOBILE}>
            <KeySkills project={project} isMobile={isMobile} />
            <ProjectSummary project={project} isMobile={isMobile}/>
          </div>
        </div>
      ) : (
        <div style={{height: '400px', width: '1100px' , ...styles.ProjectInfoContainer}}>
          <div style={styles.projectCardLeftSide}>
            <div>
              <KeySkills project={project} isMobile={isMobile}/>
            </div>
          </div>
          <div style={styles.projectCardRightSide}>
            <ProjectSummary project={project}/>
          </div>
        </div>
      )}
    </div>
  )
}

export function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.outerContainer}>
      <div style={styles.projectsContainer}>
        <Title title={'Projects'} isMobile={isMobile}/>
        {ProjectData.projects.map((project, index) => (
          <ProjectItem key={index} isMobile={isMobile} project={project} />
        ))}
      </div>
    </div>
  )
}