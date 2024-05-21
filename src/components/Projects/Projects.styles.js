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
    flexWrap: 'wrap',
    wordWrap: 'break-word',
  },

  // ProjectTitle Component
  ProjectTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '15px',
  },
  ProjectTitleText: {    
    display: 'flex',
    paddingBottom: '5px',
    paddingTop: '5px',
    wordBreak: 'break-word',
    textAlign: 'center',
    ...TextStyles.ProjectCardTitle,
  },

  // Project Related To
  projectRelatedToContainer: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    width: 'fit-content',
    alignItems: 'center',
    margin: '5px',
    padding: '5px',
    borderRadius: '5px',
    display: 'flex',
    textAlign: 'center',
  },
  projectRelatedTo: {
    paddingBottom: '2px',
    paddingTop: '2px',
    display: 'flex',
    textDecoration: 'none',
    ...TextStyles.ProjectRelatedTo,
  },

  // ProjectItemContainer Component
  ProjectItemContainer: {
    backgroundColor: colors.BlueAccent,
    alignItems: 'center',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5px',
    marginBottom: '25px',
    paddingLeft: '25px',
    paddingRight: '25px',
    boxShadow: `
      2px 2px 7px ${colors.white}, /* Top left */
      -2px 2px 7px ${colors.white}, /* Top right */
      2px -2px 7px ${colors.white}, /* Bottom left */
      -2px -2px 7px ${colors.white} /* Bottom right */
    `,
  },
  ProjectInfoContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    marginBottom: '25px',
  },
  ProjectItemsMOBILE: { 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-around',
    alignItems: 'center', 
    width: '100%', 
    height: '100%',
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

  // KeySkills Component
  KeySkillsContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: '10px',
    width: '400px',
    height: '350px',
    overflowY: 'auto',
    flexWrap: 'wrap',
    marginLeft: '15px',
    marginRight: '15px',
  },
  KeySkillsContainerMOBILE: {
    width: '350px', 
    height: '350px', 
    marginTop: '15px', 
    marginBottom: '15px'
  },
  innerKeySkillsBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '98%',
  },
  KeySkillsBoxTitle: {
    display: 'flex',
    paddingBottom: '15px',
    ...TextStyles.ProjectKeySkillsBoxTitle,
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

  // ProjectSummary Component
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
  ProjectSummaryContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: '10px',
    width: '400px',
    height: '350px',
    overflowY: 'auto',
    flexWrap: 'wrap',
  },
  ProjectSummaryTitleContainer: {
    flexDirection: 'column',
    display: 'flex',
    paddingTop: '10px',
    alignItems: 'center',
    ...TextStyles.ProjectSummaryTitle,
  },
  ProjectSummaryInfoText: {
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '15px',
    paddingTop: '5px',
    textAlign: 'center',
    ...TextStyles.ProjectSummaryInfo,
  },

  // Github & LinkedText Component styling
  linkedTextContainer: {
    backgroundColor: colors.BlueAccent,
    margin: '5px',
    padding: '5px',
    borderRadius: '5px',
    display: 'flex',
  },
  linkedText: {
    display: 'flex',
    textDecoration: 'none',
    cursor: 'pointer',
    ...TextStyles.ProjectInfoLinks,
  },
}

export default styles;