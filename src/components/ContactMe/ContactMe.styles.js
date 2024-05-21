import { colors } from '../../styles/colors';
import { TextStyles } from '../../styles/fonts';

const styles = {
  // Main Contact Me Container
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
    justifyContent: 'center',
  },
  leftHalfInputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  rightHalfInputContainer: {
    display: 'flex',
  },

  // Input Components
  outerFormContainer: {
    maxWidth: '750px',
  },
  InputTitleContainer: {

  },
  InputTitle: {
    display: 'flex',
    paddingBottom: '10px',
    paddingTop: '15px',
    textShadow: `4px 4px 3px ${colors.grey}`,
    color: colors.white, 
    ...TextStyles.H4,
  },

  // Shared Input Styling
  InputContainer: {
    display: 'flex',
  },
  input: {
    width: '100vw',
    maxWidth: '450px',
    height: '40px',
    borderRadius: '10px',
    border: `2px solid ${colors.white}`,
    boxShadow: `0 0 8px ${colors.grey}`,
    ...TextStyles.H6
  },
  inputMOBILE: {
    maxWidth: '375px'
  },


  // EMAIL BUTTON
  button: {
    boxShadow: `0 0 8px ${colors.white}`,
    borderRadius: '10px',
    border: `2px solid ${colors.white}`,
    margin: '2%',
    padding: '10px',
    marginTop: '30px',
    color: colors.white,
    cursor: 'pointer',
    ...TextStyles.H6,
  }
}
export default styles;