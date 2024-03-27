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
  },
};

export default styles;
