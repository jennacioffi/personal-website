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

  // LEFT HALF
  leftHalf: {
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

  // RIGHT HALF
  rightHalf: {
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
    height: '400px',
    justifyContent: 'center',
    position: 'relative',
    width: '300px',
  },
  cardContainerStitching: {
    border: '3px dashed black',
    borderRadius: '10px',
    height: '92%',
    justifyContent: 'center',
    width: '90%',
  },
  profilePic: {
    display: 'flex',
    flex: 1,
    height: '100%',
    position: 'relative',
    width: '100%',
  },

  // MIDDLE CONTAINER
  midContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    height: '500px',
    backgroundColor: colors.palette1,
  }, 

  // BOTTOM CONTAINER
  bottomContainer: {
    flex: 2,
    // backgroundColor: 'green'
  },
}

export default styles;