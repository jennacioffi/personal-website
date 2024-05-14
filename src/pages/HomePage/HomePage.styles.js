import { colors } from '../../styles/colors.js';
import { fonts, TextStyles } from '../../styles/fonts.js';

const styles = {
  // General Use
  outerContainer: {
    display: 'flex',
    overflowX: 'auto',
    flexDirection: 'column',
  },
  
  // Title Component
  TitleElement: {
    display: 'flex',
    width: '100vw',
  },
  TitleText: {
    marginTop: '20px',
    marginBottom: '20px',
    alignContent: 'center',
    color: colors.white,
    ...TextStyles.H2,
  },
  lineTitleItem: {
    alignSelf: 'center',
    flex: 1,
    height: '2px',
    margin: '20px',
    backgroundColor: colors.white,
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
    boxShadow: `
      2px 2px 7px ${colors.white}, /* Top left */
      -2px 2px 7px ${colors.white}, /* Top right */
      2px -2px 7px ${colors.white}, /* Bottom left */
      -2px -2px 7px ${colors.white} /* Bottom right */
    `,
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

  // Experience Component
  ExpComponentContainer: {
    backgroundColor: colors.black,
    display: 'flex',
    width: '100vw',
    height: 'max-content',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '25px',
  },
  EXPCarouselContainer: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  EXPArrows: {
    margin: '15px',
    backgroundColor: colors.white,
    borderRadius: '100%',
    display: 'flex',
    alignSelf: 'center',
  },
};

export default styles;
