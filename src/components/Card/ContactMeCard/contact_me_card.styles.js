import { fonts } from '../../../styles/fonts.js';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '20px',
    padding: '1%',
  },
  outerCard: {
    alignContent: 'flex-start',
    backgroundColor: 'red',
    borderRadius: '10px',
    display: 'flex', // Add display flex to the outer card
    flexDirection: 'column', // Set flex direction to column
  },
  cardHeader: {
    display: 'flex',
    fontFamily: fonts.cardTitle,
    justifyContent: 'center',
    fontSize: '30px',
    marginBottom: '20px',
    marginTop: '10px',
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
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    marginTop: '5px',
  },
  textareaField: {
    resize: 'none',
    flex: '1',
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    marginTop: '5px',
  },
};

export default styles;
