import { colors } from '../../styles/colors.js'
import { TextStyles } from '../../styles/fonts.js'

const styles = {
  // EXP Skills
  EXPSkillsContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EXPSkillsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: colors.mildGrey,
    width: '400px',
    height: '175px',
    borderRadius: '15px',
    overflowX: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
  },
  EXPSkillItemContainer: {
    display: 'flex',
    backgroundColor: colors.BlueAccent,
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: '5px',
    margin: '2%',
    padding: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  EXPSKillItemTEXT: {
    color: colors.white,
    ...TextStyles.H6
  },

  // EXP Card
  outerContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '450px',
    justifyContent: 'center',
    width: '900px',
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
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
    padding: '1%',
    color: colors.white,
    ...TextStyles.H7,
  },

  TitleAndSkillsContainer: {
    flex: 1,
    width: '100%',
    height: '100%',    
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  // EXP History Info
  EXPJobInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    marginLeft: '10px',
    marginRight: '10px',
  },
  expTitle:{

    color: colors.black,
    ...TextStyles.H3,
  },
  expCompanyText: {
    color: colors.black,
    ...TextStyles.H4,
  },
  expTimeWorked: {
    color: colors.black,
    ...TextStyles.H5,
  },

  // Experience Component
  ExpComponentContainer: {
    backgroundColor: colors.black,
    display: 'flex',
    width: '100vw',
    height: 'max-content',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '25px',
  },
  EXPCarouselContainer: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  EXPArrows: {
    backgroundColor: colors.white,
    borderRadius: '100%',
    display: 'flex',
    alignSelf: 'center',
    cursor: 'pointer',
    margin: '20px',
  },

  // Dots for Carousel Navigation
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '20px',
  },
  activeDot: {
    height: '15px',
    width: '15px',
    backgroundColor: colors.BlueAccent,
    borderRadius: '50%',
    display: 'inline-block',
    margin: '0 5px',
    cursor: 'pointer',
  },
  inactiveDot: {
    height: '10px',
    width: '10px',
    backgroundColor: colors.mildGrey,
    borderRadius: '50%',
    display: 'inline-block',
    margin: '0 5px',
    cursor: 'pointer',
  },
};

export default styles;