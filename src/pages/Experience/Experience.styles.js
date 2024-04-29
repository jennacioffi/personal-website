import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

const styles = {
  outerContainer: {
    display: 'flex', 
    justifyContent: 'center',
    backgroundColor: colors.palette2,
    minHeight: '100vh',
  },
  main: {
    height: '100%',
    paddingTop: '1%',
  },
  inner: {
    maxWidth: '1440px', 
    margin: '0 auto'
  },

  // TITLE
  titleContainer: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  titleTEXT: {
    color: colors.white,
    display: 'flex',
    justifyContent: 'center',
    textShadow: `8px 8px 4px ${colors.darkGrey}`, 
    ...TextStyles.PageTitle,
  },

  // CS Experience
  csExpContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  // Components
  SkillItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '10px',
    padding: '1%',
    height: '50px',
    width: 'fit-content',
    backgroundColor: 'white',
    ...TextStyles.ExperienceH2,
  },
}

export default styles;