import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

const styles = {
  // Title Component
  TitleElement: {
    display: 'flex',
    width: '95vw',
  },
  TitleText: {
    marginTop: '20px',
    marginBottom: '20px',
    alignContent: 'center',
    color: colors.white,
    ...TextStyles.H2,
  },
  lineTitleItem: {
    alignSelf: 'center',
    flex: 1,
    height: '2px',
    margin: '20px',
    backgroundColor: colors.white,
  },
}

export default styles;