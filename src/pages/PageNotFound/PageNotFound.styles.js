import { colors } from '../../styles/colors';
import { TextStyles } from '../../styles/fonts';

const styles = {
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.black,
  },
  PageNotFoundText: {
    display: 'flex',
    width: '100vw',
    height: '100vw',
    textAlign: 'center',
    paddingBottom: '50px',
    wordWrap: 'break-word',
    justifyContent: 'center',
    ...TextStyles.PageNotFoundText,
  },
}

export default styles;