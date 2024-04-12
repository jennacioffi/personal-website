import { colors } from './styles/colors.js'

const styles = {
  websiteBackgroundContainer: {
    background: `linear-gradient(${colors.websiteBGGradient1}, ${colors.websiteBGGradient2}, ${colors.websiteBGGradient3})`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowX: 'auto',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    padding: '4%',
    minWidth: '600px',
    // maxWidth: '1000px',
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
