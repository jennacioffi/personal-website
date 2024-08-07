import { colors } from '../../styles/colors';
import { TextStyles } from '../../styles/fonts';

const styles = {
  outerContainer: {
    backgroundColor: colors.black,
    display: 'flex',
    width: '100vw',
    maxHeight: '600px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '25px',
  },
  scrollableSkills: {
    overflowY: 'auto',
  },
  subTitle: {
    fontSize: '30px',
    color: colors.white,
    textAlign: 'center',
    paddingBottom: '1%',
    ...TextStyles.skillsSubHeader,
  },
  outerSkillsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    width: '100vw',
    overflowY: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: '2%',
  },
  skillContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    textAlign: 'center',
    margin: '10px',
    padding: '10px',
  },
  iconContainer: {
    display: 'flex',
    margin: '0 auto',
    backgroundColor: colors.BlueAccent,
    borderRadius: '100%',
    padding: '15px',
    boxShadow: `
      2px 2px 7px ${colors.white}, /* Top left */
      -2px 2px 7px ${colors.white}, /* Top right */
      2px -2px 7px ${colors.white}, /* Bottom left */
      -2px -2px 7px ${colors.white} /* Bottom right */
    `,
    color: colors.white,
  },
  skillName: {
    color: colors.white,
    marginTop: '5px',
    ...TextStyles.H4,
  },
}

export default styles;