import { fonts } from '../../styles/fonts.js';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center', // centers the card in the webpage
    padding: '20px', // adds 20px of padding around all edges from other elements
  },
  cardBackgroundContainer: {
    borderRadius: '8px',
    display: 'flex',
    maxWidth: '100%', // this helps maintain the card when making the webpage smaller
    position: 'relative', // this positions child elements relative to the box itself, rather than the webpage
  },
  dashedBorderContainer: {
    alignItems: 'center', // aligns the dashed edging inside the card
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '850px',
  },
  dashedBorder: {
    border: '2px dashed #FFFFFF',
    borderRadius: '6px',
    color: 'red',
    position: 'absolute',
    textAlign: 'center',
    top: '15px', // 10px from the top edge of the outer container
    left: '15px', // 10px from the left edge of the outer container
    right: '15px', // 10px from the right edge of the outer container
    bottom: '15px', // 10px from the bottom edge of the outer container
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
    // paddingTop: '10px',
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
