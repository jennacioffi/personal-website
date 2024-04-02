import { colors } from './styles/colors.js'

const styles = {
  websiteBackgroundContainer: {
    background: `linear-gradient(${colors.lighterBlue}, ${colors.blue}, ${colors.darkerIntermediateBlue})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '4%',
    minWidth: '600px',
    overflowX: 'scroll',
  },
  multiCards: {
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    minWidth: '50%',

  },
  leftCards: {
    flex: 2,
  },
  rightCards: {
    minWidth: '45%',
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
};

export default styles;
