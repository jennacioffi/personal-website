import { TextStyles } from '../../styles/fonts';
import { colors } from '../../styles/colors';

const styles = {
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.black,
  },
  tempText: {
    display: 'flex',
    width: '100vw',
    height: '100vw',
    textAlign: 'center',
    paddingBottom: '50px',
    wordWrap: 'break-word',
    justifyContent: 'center',
    ...TextStyles.tempText,
  },
}

export default styles