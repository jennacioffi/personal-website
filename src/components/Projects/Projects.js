import React from 'react';

import { Title, Carousel } from '../index';

import ProjectData from '../../data/Projects.json';

import styles from './Projects.styles';

const ProjectTitle = ({ project, isMobile }) => {
  return (
    <div style={{...styles.ProjectTitleContainer, ...(isMobile && { maxWidth: '350px', })}}>
      <div style={styles.ProjectTitleText}>
        {project.projectName}
      </div>
      <ProjectRelatedTo project={project} isMobile={isMobile}/>
    </div>
  )
};

const ProjectRelatedTo = ({ project, isMobile }) => {
  return (
    <>
      {isMobile ? (
        project.projectRelatedTo && (
          <div style={styles.projectRelatedToContainer}>
            <div style={styles.projectRelatedTo}>
              {project.projectRelatedTo}
            </div>
          </div>
        )
      ) : (
        project.projectRelatedTo && (
          <div style={styles.projectRelatedToContainer}>
            <div style={styles.projectRelatedTo}>
              {project.projectRelatedTo}
            </div>
          </div>
        )
      )}
    </>
  );
};

const ProjectGithub = ({ project, isMobile }) => {
  return (
    <>
      {isMobile ? (
        project.projectGithub && (
          <div style={styles.linkedTextContainer}>
            <a href={project.projectGithub} target="_blank" rel="noopener noreferrer" style={styles.linkedText}>
              GitHub
            </a>
          </div>
        )
      ) : (
        project.projectGithub && (
          <div style={styles.linkedTextContainer}>
            <a href={project.projectGithub} target="_blank" rel="noopener noreferrer" style={styles.linkedText}>
              GitHub
            </a>
          </div>
        )
      )}
    </>
  );
};

const ProjectLinkedText = ({ project, isMobile }) => {
  return (
    <>
      {isMobile ? (
        project.projectLink && (
          <div style={styles.linkedTextContainer}>
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer" style={styles.linkedText}>
              {project.projectLinkText}
            </a>
          </div>
        )
      ) : (
        project.projectLink && (
          <div style={styles.linkedTextContainer}>
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer" style={styles.linkedText}>
              {project.projectLinkText}
            </a>
          </div>
        )
      )}
    </>
  );
};

const ProjectSummary = ({ project, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <div style={styles.ProjectSummaryContainerMOBILE}>
          <div style={styles.ProjectSummaryTitleContainer}>
            Project Summary
            <ProjectGithub project={project} isMobile={isMobile}/>
            <ProjectLinkedText project={project} isMobile={isMobile}/>
          </div>
          <div style={styles.ProjectSummaryInfoText}>
            {project.projectSummary}
          </div>
        </div>
      ) : (
        <div style={styles.ProjectSummaryContainer}>
          <div style={styles.ProjectSummaryTitleContainer}>
            Project Summary
            <ProjectGithub project={project} isMobile={isMobile}/>
            <ProjectLinkedText project={project} isMobile={isMobile}/>
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
    <div style={{...styles.KeySkillsContainer, ...(isMobile && styles.KeySkillsContainerMOBILE)}}>
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
      <ProjectTitle project={project} isMobile={isMobile}/>
      
      { isMobile ? (
        <div style={{maxWidth: '350px', height: '750px' , ...styles.ProjectInfoContainer}}>
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

export default function Projects({ isMobile, id }) {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.projectsContainer}>
        <Title title={'Projects'} isMobile={isMobile} id={id} />
        <Carousel
          items={ProjectData.projects}
          isMobile={isMobile}
          renderItem={(project, isMobile) => <ProjectItem project={project} isMobile={isMobile} />}
        />
      </div>
    </div>
  );
}