import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';
 
const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1%',
    width: '100%',
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
    border: '2px dashed #FFFFFF',
    borderRadius: '6px',
    height: '95%',
    margin: '2%',
    overflow: 'auto',
    paddingHorizontal: '2%', 
    position: 'absolute',
    width: '95%',
  },
  cardTitleContainer: {
    display: 'flex',
    fontFamily: fonts.cardTitle,
    justifyContent: 'center',
    margin: '2.5%',
  },
  cardTitle: {
    color: colors.white,
    fontSize: '40px',
  },
  bulletPointItemsContainer: {
    fontFamily: fonts.cardBulletPointItems,
    marginBottom: '20px',
    marginLeft: '5%',
    marginRight: '5%', 
  },
  question: {
    color: colors.white,
    fontSize: '18px',
  },
  infoExpanded: {
    backgroundColor: colors.expandedInfoBGColor,
    borderRadius: '8px',
    paddingBottom: '1.5%',
    paddingRight: '2%',
    paddingLeft: '2%',
    paddingTop: '1%',
    marginTop: '2%',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  answer: {
    color: colors.lighterBlue,
    fontSize: '18px',
    whiteSpace: 'pre-line',
  },
  arrowIcon: {
    marginLeft: '5px',
  }
};

export default styles;