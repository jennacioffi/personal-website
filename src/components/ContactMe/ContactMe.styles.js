import { colors } from '../../styles/colors';
import { TextStyles } from '../../styles/fonts';

const styles = {
  outerContainer: {
    backgroundColor: colors.BlueAccent,
    display: 'flex',
    width: '100vw',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '25px',
  },

  outerInputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  leftHalfInputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  rightHalfInputContainer: {},

  outerFormContainer: {
    maxWidth: '750px',
  },

  InputTitleContainer: {},

  InputTitle: {
    display: 'flex',
    paddingBottom: '10px',
    paddingTop: '15px',
    textShadow: `4px 4px 3px ${colors.grey}`,
    color: colors.white, 
    ...TextStyles.H4,
  },

  InputContainer: {
  },

  input: {
    marginRight: '25px',
    width: '400px',
    height: '40px',
    borderRadius: '10px',
    ...TextStyles.H6
  },
  // EMAIL BUTTON
  button: {
    boxShadow: `3px 3px 4px ${colors.grey}`,
    borderRadius: '10px',
    margin: '2%',
    padding: '10px',
    marginTop: '10px',
    color: colors.white,
    ...TextStyles.H6,
  }
}
export default styles;