import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

const styles = {
  // MAIN CONTAINER
  outerContainer: {
    display: 'flex', 
    justifyContent: 'center',
    backgroundColor: colors.palette2,
    minHeight: '100vh',
  },
  main: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
  },
  inner: {
    maxWidth: '1440px', 
    margin: '0 auto',
  },

  // EXPITEMS
  ProjectItemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  // ## TITLE SECTION - EXPITEMS
  titleContainer: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  titleTEXT: {
    color: colors.white,
    display: 'flex',
    justifyContent: 'center',
    textShadow: `8px 8px 2px ${colors.darkGrey}`, 
    ...TextStyles.PageTitle,
  },
  
  // ## IndvEXPItem - EXPITEMS
  IndividualProjectItemContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  // FRONTCARD
  ExpItemContainer: { // Also used in BackCard
    alignItems: 'center',
    backgroundColor: colors.white,
    border: '2px solid black',
    borderRadius: '10px',
    boxShadow: `6px 6px 4px ${colors.darkGrey}`,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '400px',
    minHeight: '350px',
    justifyContent: 'center',
    margin: '20px',
    padding: '1%',
    width: '500px',
  },
  topHalfContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '98%',
    alignItems: 'center',
    marginTop: '2%',
  },
  bottomHalfContainer: {
    display: 'flex',
    padding: '2%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap',
    width: '98%',
    height: 'fit-content',
  },

  // SkillItem
  skillItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    margin: '2%',
    backgroundColor: colors.palette4,
    border: '1px solid black',
    boxShadow: `3px 3px 2px ${colors.darkGrey}`,
  },
  skillItemText: {
    padding: '10px',
    textAlign: 'center',
    ...TextStyles.ExperienceH5,
  },

  // BACKCARD
  experienceSummaryContainer: {
    display: 'flex',
    padding: '2%',
    margin: '1%',    
    overflowY: 'auto',
    flexDirection: 'column',
    width: '95%',
  },
  experienceSummaryText: {
    backgroundColor: colors.palette5,
    boxShadow: ` 3px 3px 4px ${colors.darkGrey}`,
    borderRadius: '3%',
    marginBottom: '3%',
    padding: '2%',
    textAlign: 'center',
    ...TextStyles.ExperienceH5,
  },
  bulletPointItem: {
    textAlign: 'start',
    padding: '1%',
    ...TextStyles.ExperienceH6,
  },

  // ## IMAGE - TOPHALF
  leftSide: {

  },
  outerLogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '1px solid black',
    boxShadow: `3px 3px 4px ${colors.black}`,
  },
  innerLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '100%',
    objectFit: 'fill',
    width: '125px',
    height: '125px',
    overflow: 'hidden',
    boxShadow: `inset 3px 3px 4px ${colors.black}`,
    backgroundColor: colors.palette4,
  },
  logo: {
    objectFit: 'cover',
  },

  // ## INFOTEXT - TOP HALF
  rightSide: {
  },
  infoTextContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    overflowY: 'auto',
  },
  infoTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // textAlign: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap',
    ...TextStyles.ExperienceH2,
  },
  infoCompany: {
    ...TextStyles.ExperienceH3,
  },
  infoTimeWorked: {
    ...TextStyles.ExperienceH4,
  },
}

export default styles;