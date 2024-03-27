import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';

const styles = {
  mainContainer: {
    alignContent: 'flex-start',
    backgroundColor: colors.sapphireBlue,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: '1%',
    paddingTop: '20px',
    width: '100%',
  },
  cardHeader: {
    display: 'flex',
    fontFamily: fonts.cardTitle,
    fontSize: '40px',
    justifyContent: 'center',
    marginBottom: '20px',
    marginTop: '2.5%',
  },
  input: {
    fontFamily: fonts.contactMeInputHeaders,
    fontSize: '18px',
    marginBottom: '20px', 
    marginLeft: '5%',
    marginRight: '5%',
  },
  inputField: {
    border: `1px solid ${colors.lightGrey}`,
    borderRadius: '5px',
    boxSizing: 'border-box',
    display: 'flex',
    marginTop: '5px',
    padding: '2%',
    width: '100%',
  },
  textareaField: {
    border: `1px solid ${colors.lightGrey}`,
    borderRadius: '5px',
    boxSizing: 'border-box',
    marginTop: '5px',
    padding: '8px',
    resize: 'none',
    width: '100%',
  },
};

export default styles;
