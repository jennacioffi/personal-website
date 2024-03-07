import { colors } from '../../styles/colors.js';
import { fonts } from '../../styles/fonts.js';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  cardBackgroundContainer: {
    display: 'flex',
    maxWidth: '100%',
    position: 'relative',
  },
  outerCard: {
    alignItems: 'center',
    backgroundColor: colors.ceruleanBlue,
    borderRadius: '8px',
    display: 'flex',
    height: '300px',
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
    top: '121%',
    transform: 'translateY(-160%)',
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
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '50px',
    padding: '10px',
    fontFamily: fonts.cardBulletPointItems,
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
