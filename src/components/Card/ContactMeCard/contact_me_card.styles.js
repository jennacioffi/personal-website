import { fonts } from '../../../styles/fonts.js';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '20px',
  },
  outerCard: {
    alignContent: 'flex-start',
    backgroundColor: 'red',
    borderRadius: '10px',
    paddingVertical: '50px',
    width: '100%',
    height: '340px'
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
    marginRight: '5%'
  },
  inputField: {
    display: 'flex',
    width: '90%',
    padding: '2%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    marginTop: '5px',
    // marginLeft: '5%',
    // marginRight: '5%'
  },
  textareaField: {
    width: '90%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    marginTop: '5px',
    // marginRight: '5%',
    // marginLeft: '5%',
  },
};

export default styles;
