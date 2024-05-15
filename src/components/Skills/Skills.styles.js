import { colors } from '../../styles/colors';
import { TextStyles } from '../../styles/fonts';

const styles = {
  outerContainer: {
    backgroundColor: colors.black,
    display: 'flex',
    width: '100vw',
    height: '600px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '25px',
  },
  outerSkillsContainer: {
    // display: 'flex',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Adjust the min and max width as needed
    gap: '10px',
    width: '100vw',
    height: '500px',
    overflowY: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
    // width: 'max-content',
    // height: 'max-content',
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
    ...TextStyles.H5,
  },
}

export default styles;