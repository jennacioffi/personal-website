import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '15px',
    paddingTop: '15px', 
  },
  cardBackgroundContainer: {
    alignItems: 'center',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%', 
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'relative',
    width: '100%',
  },
  dashedBorder: {
    border: `2px dashed ${colors.white}`,
    borderRadius: '6px',
    height: '95%',
    margin: '15px',
    width: '95%',
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
    color: colors.black,
    fontSize: '40px',
  },
  bulletPointItemsContainer: {
    fontFamily: fonts.cardBulletPointItems,
    marginBottom: '20px',
    marginLeft: '5%',
    marginRight: '5%', 
  },
  bulletPointItem1: {
    color: colors.black,
    fontSize: '22px',
  },
  bulletPointItem2: {
    color: colors.black,
    fontSize: '18px',
    paddingLeft: '12px',
  },
  bulletPointItem3: {
    color: colors.black,
    fontSize: '14px',
    paddingLeft: '12px',
  },
};

export default styles;
