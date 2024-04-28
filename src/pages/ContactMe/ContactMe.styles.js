import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

const styles = {
  outerContainer: {
    display: 'flex', 
    height: '100%',
    justifyContent: 'center',
    backgroundColor: colors.palette2,
    minHeight: '100vh',
  },
  main: {
    height: '100%',
    width: '100%', 
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

  // CONTACT FORM
  outerContactFormContainer: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    padding: '1%',
  },

  outerFormContainer: {
    padding: '1%',
    width: '100%',
    maxWidth: '800px',
  },
  InputTitleContainer: {
    display: 'flex', 
    justifyContent: 'flex-start', 
  },
  InputTitle: {
    padding: '8px',
    textShadow: `4px 4px 3px ${colors.darkGrey}`,
    color: colors.white, 
    ...TextStyles.ExperienceH3,
  },
  InputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    display: 'flex',
    width: '100%',
    height: '40px',
    borderRadius: '10px',
    ...TextStyles.ExperienceH3
  },

  // EMAIL BUTTON
  button: {
    boxShadow: `3px 3px 4px ${colors.darkGrey}`,
    borderRadius: '10px',
    margin: '1%',
    padding: '1%',
    color: colors.white,
    ...TextStyles.ExperienceH4,
  }
}

export default styles;