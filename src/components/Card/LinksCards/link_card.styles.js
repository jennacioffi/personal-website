import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '15px',
    height: '110px',
    width: '100%',
    margin: '1%',
  },
  cardBackgroundContainer: {
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100%',
    position: 'relative',
    width: '100%',
    backgroundColor: colors.white,
  },
  dashedBorder: {
    border: `2px dashed ${colors.black}`,
    borderRadius: '6px',
    width: '95%',
    height: '95%',
    margin: '15px', 
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '2%',
    position: 'absolute',
    width: '90%',
    alignItems: 'center',
  },
  icon: {
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
