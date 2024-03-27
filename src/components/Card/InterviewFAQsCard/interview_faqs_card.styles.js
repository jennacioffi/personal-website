import { fonts } from '../../../styles/fonts.js';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '1%',
  },
  cardBackgroundContainer: {
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100%', 
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'relative',
    width: '100%',
  },
  dashedBorder: {
    border: '2px dashed #FFFFFF',
    borderRadius: '6px',
    width: '95%',
    height: '95%',
    margin: '15px',
  },
  contentContainer: {
    paddingTop: '2%', 
    position: 'absolute',
    width: '100%', 
  },
  cardTitleContainer: {
    display: 'flex',
    fontFamily: fonts.cardTitle,
    justifyContent: 'center',
    margin: '2.5%',
  },
  cardTitle: {
    color: 'black',
    fontSize: '40px',
  },
  bulletPointItemsContainer: {
    fontFamily: fonts.cardBulletPointItems,
    marginBottom: '20px',
    marginLeft: '5%',
    marginRight: '5%', 
  },
  question: {
    color: 'white',
    fontSize: '18px',
  },
  answer: {
    color: 'white',
    fontSize: '18px',
    paddingLeft: '12px',
  },
  arrowIcon: {
    marginLeft: '5px', // Adjust the margin as needed
  }
};

export default styles;
