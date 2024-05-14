import { colors } from '../../styles/colors.js'
import { TextStyles } from '../../styles/fonts.js'

const styles = {
  outerContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '450px',
    justifyContent: 'center',
    width: '900px',
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: '20px',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  SummaryOuterContainer: {
    flex: 1,
    width: '100%',
    height: '100%',    
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  SummaryContainer: {
    position: 'relative',
    width: '400px',
    height: '400px',    
    backgroundColor: colors.BlueAccent,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
    borderRadius: '15px',
    overflowY: 'auto',
  },
  SummaryText: {
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    color: colors.white,
    ...TextStyles.H6,
  },
  SummaryBulletPoints: {
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    color: colors.white,
    ...TextStyles.H7,
  },
  TitleAndSkillsContainer: {
    flex: 1,
    width: '100%',
    height: '100%',    
    backgroundColor: 'blue',
    display: 'flex',
    textAlign: 'center',
  },
};

export default styles;