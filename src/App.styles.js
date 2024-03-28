import { colors } from './styles/colors.js'

const styles = {
  websiteBackgroundContainer: {
    background: `linear-gradient(${colors.pastelBlue}, ${colors.brightBlue}, ${colors.deepIndigo})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '10%',
  },
  multiCards: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  leftCards: {
    flex: 2,
  },
  rightCards: {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
};

export default styles;
