import { colors } from '../../styles/colors.js';
import { fonts, TextStyles } from '../../styles/fonts.js';

const styles = {
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
    paddingTop: '100px',
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
    cursor: 'pointer',
  },
}

export default styles;