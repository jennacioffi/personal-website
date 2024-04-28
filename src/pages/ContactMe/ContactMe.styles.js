import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

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

  // TITLE
  titleContainer: {
    alignContent: 'center',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    height: '150px',
    justifyContent: 'center',
    width: '400px',
  },
  titleTEXT: {
    color: colors.black,
    textShadow: `2px 2px 4px ${colors.darkGrey}`, // Add text shadow
    ...TextStyles.PageTitle,
  },
}

export default styles;