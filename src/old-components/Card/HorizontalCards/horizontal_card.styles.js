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
    border: `2px dashed ${colors.mainStitching}`,
    borderRadius: '6px',
    height: '95%',
    margin: '15px',
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
  expInfo: {
    color: colors.black,
    fontSize: '18px',
    whiteSpace: 'pre-line',
    padding: '2%',
  },
  arrowIcon: {
    paddingLeft: '2%',
    alignContent: 'center',
  },
  infoBulletPoints: {
    color: colors.black,
    fontSize: '16px',
  },
  infoExpanded: {
    backgroundColor: colors.expandedInfoBGColor,
    borderRadius: '8px',
    paddingBottom: '1.5%',
    paddingRight: '2%',
    paddingLeft: '1%',
    marginTop: '1%',
  },
  briefSummary: {
    color: colors.black,
    fontSize: '18px',
    paddingLeft: '8px',
    paddingTop: '2%',
  },
  briefSummaryBPItems: {
    color: colors.black,
    fontSize: '18px',
    paddingLeft: '20px',
    paddingTop: '1%',
  },
};

export default styles;
