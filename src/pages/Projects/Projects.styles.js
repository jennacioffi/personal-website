import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

const styles = {
  // MAIN CONTAINER
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.palette2,
    minHeight: '150vh',
  },
  main: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
  },
  inner: {
    maxWidth: '1200px', 
    margin: '0 auto',
  },

  // PROJECTITEMS
  ProjectItemsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: '2%',
  },

  // ## TITLE SECTION - PROJECTITEMS
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

  // INDIVIDUALPROJECTITEM - PROJECTITEMS
  IndividualProjectItemContainer: {
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingBottom: '5%',
  },

  // ## TOP HALF - INDIVIDUALPROJECTITEM
  ExpItemContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    border: '2px solid black',
    borderRadius: '10px',
    boxShadow: `6px 6px 4px ${colors.darkGrey}`,
    display: 'flex',
    flexDirection: 'column',
    height: '400px',
    justifyContent: 'center',
    margin: '20px',
    padding: '1%',
    width: '500px',
    ...TextStyles.ExperienceH2,
  },
  topHalfContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    margin: '20px',
  },
  bottomHalfContainer: {
    display: 'flex',
    padding: '2%',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  // ## IMAGE - TOPHALF
  leftSide: {

  },
  outerLogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    width: '200px',
    height: '200px',
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
    width: '175px',
    height: '175px',
    overflow: 'hidden',
    boxShadow: `inset 3px 3px 4px ${colors.black}`,
    backgroundColor: colors.palette4,
  },
  logo: {
    objectFit: 'cover',
  },
  // ## INFOTEXT - TOPHALF
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

  // TLDRSUMMARY
  TLDRSummaryContainer: {
    height: '110%',
    maxHeight: '150px',
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '10px',
    backgroundColor: colors.palette4,
    border: '1px solid black',
    boxShadow: `3px 3px 2px ${colors.darkGrey}`,
    ...TextStyles.ExperienceH5,
  },
  TLDRSummaryText: {
    paddingTop: '2%',
    paddingRight: '2%',
    textAlign: 'center',
  },
}

export default styles;