import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';

const styles = {
  mainContainer: {
    display: 'flex',
    height: '100px',
    margin: '1%',
    paddingBottom: '15px',
    width: '100%',
  },
  cardBackgroundContainer: {
    alignContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '100%',
    position: 'relative',
    width: '100%',
  },
  dashedBorder: {
    alignItems: 'center',
    border: `2px dashed ${colors.black}`,
    borderRadius: '6px',
    display: 'flex',
    height: '86%',
    justifyContent: 'flex-start',
    overflow: 'auto',
    width: '95%',
  },
  icon: {
    height: '40px',
    padding: '2%',
    width: '40px',
  },
  link: {
    alignText: 'center',
    color: colors.black,
    fontFamily: fonts.cardTitle,
    fontSize: '22px',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '3%',
    textDecoration: 'none',
  },
};

export default styles;
