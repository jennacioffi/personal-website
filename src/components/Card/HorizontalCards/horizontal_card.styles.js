import { fonts } from '../../../styles/fonts.js';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px', 
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
    width: '80%',
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
  bulletPointItem1: {
    color: 'black',
    fontSize: '22px',
  },
  bulletPointItem2: {
    color: 'black',
    fontSize: '18px',
    paddingLeft: '12px',
  },
  bulletPointItem3: {
    color: 'black',
    fontSize: '14px',
    paddingLeft: '12px',
  },
};

export default styles;
