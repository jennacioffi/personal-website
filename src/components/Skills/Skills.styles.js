import { colors } from '../../styles/colors';
import { TextStyles } from '../../styles/fonts';

const styles = {
  outerContainer: {
    backgroundColor: colors.black,
    display: 'flex',
    width: '100vw',
    height: '550px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '25px',
  },
  outerSkillsContainer: {
    display: 'flex',
    width: '95vw',
    height: '500px',
    overflowY: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.BlueAccent,
    borderRadius: '10px',
    width: 'fit-content',
    height: 'fit-content',
    textAlign: 'center',
    margin: '10px',
    padding: '10px',
  },
  iconContainer: {
    display: 'flex',
    margin: '0 auto',
    color: colors.white,
  },
  skillName: {
    color: colors.white,
    marginTop: '5px',
    ...TextStyles.H6,
  },
}

export default styles;