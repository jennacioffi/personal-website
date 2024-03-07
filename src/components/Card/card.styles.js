import { colors } from '../../styles/colors.js';
import { fonts } from '../../styles/fonts.js';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center', // centers the card in the webpage
    padding: '20px', // adds 20px of padding around all edges from other elements
  },
  cardBackgroundContainer: {
    display: 'flex',
    maxWidth: '100%', // this helps maintain the card when making the webpage smaller
    position: 'relative', // this positions child elements relative to the box itself, rather than the webpage
  },
  outerCard: {
    alignItems: 'center', // aligns the dashed edging inside the card
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '850px',
  },
  innerRectangle: {
    border: '2px dashed #FFFFFF',
    borderRadius: '6px',
    color: 'red',
    height: '80%',
    padding: '1%',
    position: 'absolute',
    textAlign: 'center',
    width: '92%',
  },
  contentContainer: {
    left: '0',
    position: 'absolute',
    width: '100%',
    paddingTop: '25px',
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
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: fonts.cardBulletPointItems,
    marginLeft: '50px',
    padding: '10px',
    paddingTop: '10px',
  },
  bulletPointItem1: {
    color: 'black',
    fontSize: '22px',
  },
  bulletPointItem2: {
    color: 'black',
    fontSize: '18px',
    paddingLeft: '10px',
  },
  bulletPointItem3: {
    color: 'black',
    fontSize: '14px',
    paddingLeft: '10px',
  },
};

export default styles;
