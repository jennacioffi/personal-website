import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';

const styles = {
  mainContainer: {
    display: 'flex',
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
    overflow: 'auto',
    paddingHorizontal: '1%',
    width: '95%',
  },
  cardTitleContainer: {
    display: 'flex',
    fontFamily: fonts.cardTitle,
    justifyContent: 'center',
    margin: '1%',
  },
  cardTitle: {
    color: colors.black,
    fontSize: '40px',
  },
  bulletPointItemsContainer: {
    fontFamily: fonts.cardBulletPointItems,
    marginBottom: '2%',
    marginLeft: '5%',
    marginRight: '5%', 
  },
  paragraph: {
    color: colors.black,
    fontSize: '18px',
    paddingLeft: '12px',
    textAlign: 'center',
  },
};

export default styles;