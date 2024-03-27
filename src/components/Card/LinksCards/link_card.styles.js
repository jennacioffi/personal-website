import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';

const styles = {
  mainContainer: {
    display: 'flex',
    paddingBottom: '15px',
    height: '100px',
    width: '100%',
    margin: '1%',
  },
  cardBackgroundContainer: {
    alignContent: 'space-between',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    position: 'relative',
    width: '100%',
    backgroundColor: colors.white,
  },
  dashedBorder: {
    display: 'flex',
    border: `2px dashed ${colors.black}`,
    borderRadius: '6px',
    width: '95%',
    height: '86%',
    overflow: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    padding: '2%',
    width: '40px',
    height: '40px',
  },
  link: {
    fontFamily: fonts.cardTitle,
    color: colors.black,
    fontSize: '22px',
    textDecoration: 'none',
    alignText: 'center',
    padding: '3%',
  },
};

export default styles;
