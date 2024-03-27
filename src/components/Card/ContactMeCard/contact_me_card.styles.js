import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '20px',
    margin: '1%',
    alignContent: 'flex-start',
    backgroundColor: colors.sapphireBlue,
    borderRadius: '10px',
    flexDirection: 'column',
    width: '100%',
  },
  cardHeader: {
    display: 'flex',
    fontFamily: fonts.cardTitle,
    justifyContent: 'center',
    fontSize: '40px',
    marginBottom: '20px',
    marginTop: '2.5%',
  },
  input: {
    marginBottom: '20px', 
    marginLeft: '5%',
    marginRight: '5%',
    fontFamily: fonts.contactMeInputHeaders,
    fontSize: '18px',
  },
  inputField: {
    display: 'flex',
    width: '100%',
    padding: '2%',
    borderRadius: '5px',
    border: `1px solid ${colors.lightGrey}`,
    boxSizing: 'border-box',
    marginTop: '5px',
  },
  textareaField: {
    resize: 'none',
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: `1px solid ${colors.lightGrey}`,
    boxSizing: 'border-box',
    marginTop: '5px',
  },
};

export default styles;
