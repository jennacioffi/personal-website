import { colors } from '../styles/colors.js';
import { TextStyles } from '../styles/fonts.js';

const styles = {
  outerContainer: {
    display: 'flex', 
    height: '100%',
    justifyContent: 'center',
  },
  main: {
    height: '100%',
    width: '100%', 
  },

  // TOP CONTAINER
  topContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: '1',
    flexDirection: 'row',
    height: '550px',
    justifyContent: 'center',
  },

  // LEFT HALF TOP
  leftHalfTOP: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    marginRight: '10%',
  },
  textBackgroundContainer: {
    backgroundColor: colors.white,
    borderRadius: '10px',
    boxShadow: `8px 8px ${colors.black}`,
    height: '100px',
    left: '25%',
    textAlign: 'center',
    width: '500px',
  },
  textBackgroundContainerTEXT: {
    ...TextStyles.PageTitle,
  },

  // RIGHT HALF TOP
  rightHalfTOP: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    maringLeft: '10%',
    position: 'relative',
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
    alignItems: 'center',
    display: 'flex',
    flex: '1',
    flexDirection: 'row',
    height: '550px',
    justifyContent: 'center',
    position: 'relative',
  }, 

  // LEFT HALF MID
  leftHalfMID: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: '25px',
    width: '1000px',
  },

  // RIGHT HALF MID
  rightHalfMID: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    maringLeft: '10%',
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
    flexDirection: 'row',
    height: '550px',
    justifyContent: 'center',
    position: 'relative',
  },
}

export default styles;