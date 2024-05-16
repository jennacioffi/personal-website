import { colors } from '../../styles/colors';
import { TextStyles } from '../../styles/fonts';

const styles = {
  // Projects Main Component
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  projectsContainer: {
    backgroundColor: colors.black,
    display: 'flex',
    width: '100vw',
    height: 'max-content',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '25px',
  },

  // ProjectItemContainer Component
  ProjectItemsMOBILE: { 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-around',
    alignItems: 'center', 
    width: '100%', 
    height: '100%',
  },
  ProjectItemContainer: {
    backgroundColor: colors.BlueAccent,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15px',
    marginBottom: '15px',
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  ProjectInfoContainer: {
    display: 'flex',
  },
  projectCardLeftSide: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  projectCardRightSide: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  // ProjectTitle Component
  ProjectTitleOuterContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  ProjectTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '15px',
    paddingTop: '15px',
    ...TextStyles.ProjectCardTitle,
  },

  // ProjectSummary Component
  ProjectSummaryContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: '10px',
    width: '500px',
    height: '350px',
    overflowY: 'auto',
    flexWrap: 'wrap',
  },
  ProjectSummaryContainerMOBILE: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: '10px',
    width: '350px',
    height: '350px',
    overflowY: 'auto',
    flexWrap: 'wrap',
  },
  ProjectSummaryTitleContainer: {
    display: 'flex',
    paddingTop: '10px',
    ...TextStyles.ProjectSummaryTitle,
  },
  ProjectSummaryInfoText: {
    padding: '15px',
    ...TextStyles.ProjectSummaryInfo,
  },

  // SkillItem Component
  SkillItemsOuterContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    width: '100%',
  },
  SkillItemContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.BlueAccent,
    borderRadius: '10px',
    padding: '4px',
    margin: '5px',
    ...TextStyles.ProjectSkillsText,
    textAlign: 'center',
  },

  // KeySkills Component
  KeySkillsContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: '10px',
    width: '500px',
    height: '350px',
    overflowY: 'auto',
    flexWrap: 'wrap',
  },
  innerKeySkillsBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '90%',
  },
  KeySkillsBoxTitle: {
    display: 'flex',
    paddingBottom: '15px',
    ...TextStyles.ProjectKeySkillsBoxTitle,
  },
}

export default styles;