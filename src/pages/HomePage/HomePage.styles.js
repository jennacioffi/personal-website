import { colors } from '../../styles/colors.js';
import { fonts, TextStyles } from '../../styles/fonts.js';

const styles = {
  outerContainer: {
    display: 'flex',
    overflowX: 'auto',
  },

  // Intro Component - Outer Container
  introComponentContainer: {
    backgroundColor: colors.black,
    color: colors.white,
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: fonts.kuraleFont,
    fontSize: 30,
    height: '450px',
    justifyContent: 'center',
    width: '100vw',
  },

  // Intro Component - Left Side
  IntroLeftSide: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  IntroImageContainer: {
    width: 300,
    height: 380,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BlueAccent,
    borderRadius: '10px',
  },
  IntroImage: {
    maxWidth: '95%',
    maxHeight: '95%',
    borderRadius: '10px',
  },

  // Intro Component - Right Side
  IntroRightSide: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  HiImName: {
    color: colors.white,
    ...TextStyles.IntroName,
  },
  IntroCareerTitle: {
    color: colors.white,
    ...TextStyles.IntroCareerTitle,
  },
  IntroLinksContainer: {
    display: 'flex',
    margin: '10px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    ...TextStyles.IntroLinksButtonText,
  },
  buttonContainer: {
    alignContent: 'center',
    borderRadius: '10px',
    height: '50px',
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
    width: 'fit-content',
  },
};

export default styles;
