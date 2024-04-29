import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

const styles = {
  outerContainer: {
    display: 'flex', 
    justifyContent: 'center',
    backgroundColor: colors.palette2,
    minHeight: '100vh',
    overflowY: 'auto',
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

  // Skills
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    overflowY: 'auto',
    paddingBottom: '5%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  // Components
  SkillItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '10px',
    padding: '1%',
    margin: '2%',
    height: 'fit-content',
    width: 'fit-content',
    backgroundColor: 'white',
    boxShadow: `5px 5px 4px ${colors.darkGrey}`,
    ...TextStyles.skillItem,
  },

  icon: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  },
  text: {
    padding: '10px',
  }
}

export default styles;