import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

const styles = {
  outerContainer: {
    display: 'flex', 
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minWidth: 'fit-content', 
    maxWidth: '1440px',
  },

  // TOP CONTAINER
  topContainer: {
    display: 'flex',
    height: 'max-content',
    minHeight: '550px',
    justifyContent: 'center',
  },

  // LEFT HALF TOP
  leftHalfTOP: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: '4%',
  },
  textBackgroundContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: '10px',
    boxShadow: `8px 8px 6px ${colors.black}`,
    height: '100px',
    textAlign: 'center',
    width: '500px',
  },
  textBackgroundContainerTEXT: {
    alignContent: 'center',
    ...TextStyles.PageTitle,
  },

  // RIGHT HALF TOP
  rightHalfTOP: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: '4%',
  },
  cardContainer: {
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: `5px 5px 4px ${colors.darkGrey}`,
    display: 'flex',
    height: '300px',
    justifyContent: 'center',
    position: 'relative',
    width: '400px',
  },
  cardContainerStitching: {
    border: '3px dashed black',
    borderRadius: '10px',
    height: '92%',
    justifyContent: 'center',
    width: '90%',
  },
  image: {
    display: 'flex',
    flex: 1,
    height: '100%',
    position: 'relative',
    objectFit: 'cover',
    width: '100%',
  },

  // MIDDLE CONTAINER
  midContainer: {
    display: 'flex',
    height: 'max-content',
    minHeight: '550px',
    justifyContent: 'center',
    position: 'relative',
    // flexWrap: 'wrap',
  }, 

  // LEFT HALF MID
  leftHalfMID: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: '25px',
    width: '100%',
    maxWidth: '1000px',
  },

  // RIGHT HALF MID
  rightHalfMID: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    maringLeft: '10px',
    width: '100%',
    maxWidth: '1000px',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  eduInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: '300px',
    width: '500px',
  },
  eduInfo: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    borderRadius: '15px',
    backgroundColor: colors.palette2,
    boxShadow: `inset 3px 3px 4px ${colors.darkGrey}`,
    justifyContent: 'center',
  },
  eduInfoTextLine1: {
    color: colors.white,
    textShadow: `2px 2px 4px ${colors.darkGrey}`, // Add text shadow
    ...TextStyles.ExperienceH1
  },
  eduInfoTextLine2: {
    color: colors.white,
    textShadow: `2px 2px 4px ${colors.darkGrey}`, // Add text shadow
    ...TextStyles.ExperienceH2
  },
  eduInfoTextLine3: {
    color: colors.white,
    textShadow: `2px 2px 4px ${colors.darkGrey}`, // Add text shadow
    ...TextStyles.ExperienceH3
  },

  // BOTTOM CONTAINER
  bottomContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    flexWrap: 'wrap',
    maxWidth: '100%'
  },
  FAQsOuterTitleContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  FAQsTitleContainer: {
    alignContent: 'center',
    backgroundColor: colors.white,
    borderRadius: '10px',
    boxShadow: `8px 8px 6px ${colors.darkGrey}`,
    display: 'flex',
    height: '100px',
    justifyContent: 'center',
    marginTop: '8%',
    width: 'fit-content',
  },
  FAQsTitle: {
    color: colors.black,
    justifyContent: 'center',
    alignContent: 'center',
    ...TextStyles.PageTitle
  },
  outerFAQItemContainer: {
    display: 'flex', 
    justifyContent: 'center',
    alignContent: 'center',
    padding: '2%',
    flexWrap: 'wrap',
    overflowX: 'auto',
  },
  FAQsCardItem: {
    display: 'flex',
    padding: '1%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  FAQsCardContainer: {
    width: '325px',
    height: '200px',
    borderRadius: '20px',
    backgroundColor: colors.white,
    display: 'flex',
    boxShadow: `6px 6px 8px ${colors.darkGrey}`
  },
  FAQsCardContainerStitching: {
    border: '2px dashed black',
    borderRadius: '10px',
    height: '90%',
    alignSelf: 'center',
    alignContent: 'center',
    width: '93%',
    margin: 'auto',
  },
  FAQquestion: {
    margin: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: colors.black,
    ...TextStyles.ExperienceH4,
    maxHeight: '100%',
    overflowY: 'auto',
  },
  FAQanswerContainer: {

  },
  FAQanswer: {
    margin: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: colors.palette1,
    ...TextStyles.ExperienceH5,
    maxHeight: '100%',
    overflowY: 'auto',
  },
}

export default styles;