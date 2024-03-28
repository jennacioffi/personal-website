import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';

const styles = {
  mainContainer: {
    display: 'flex',
    height: '100px',
    margin: '2%',
    marginBottom: '6%',
    width: '100%',
    position: 'relative',
    right: '12%',
    overflow: 'auto',
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
    height: '89%',
    justifyContent: 'flex-start',
    overflow: 'auto',
    width: '97%',
  },
  icon: {
    height: '56px',
    padding: '1%',
    width: '56px',
  },
  link: {
    textAlign: 'center',
    color: colors.black,
    fontFamily: fonts.cardTitle,
    fontSize: '22px',
    overflow: 'auto',
    padding: '5%',
    textDecoration: 'none',
    wordWrap: 'break-word',
  },
};

export default styles;
