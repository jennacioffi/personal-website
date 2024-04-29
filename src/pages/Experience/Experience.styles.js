import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

const styles = {
  outerContainer: {
    display: 'flex', 
    justifyContent: 'center',
    backgroundColor: colors.palette2,
    minHeight: '150vh',
  },
  main: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
  },
  inner: {
    maxWidth: '1440px', 
    margin: '0 auto',
  },

  // TITLE
  titleContainer: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  titleTEXT: {
    color: colors.white,
    display: 'flex',
    justifyContent: 'center',
    textShadow: `8px 8px 2px ${colors.darkGrey}`, 
    ...TextStyles.PageTitle,
  },

  // CS Experience
  csExpContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: '2%',
  },
  expHistory: {
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingBottom: '5%',
  },

  // EXP ITEMS
  ExpItemContainer: {
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '10px',
    margin: '20px',
    height: '350px',
    width: '600px',
    border: '2px solid black',
    boxShadow: `6px 6px 4px ${colors.darkGrey}`,
    ...TextStyles.ExperienceH2,
  },
  topHalf: {
    display: 'flex',
    margin: '2%',
  },
  expImageContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.lightGrey,
    width: '185px',
    height: '150px',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '1px solid black',
    boxShadow: `3px 3px 4px ${colors.black}`,
  },
  compImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignText: 'center',
  },
  expTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...TextStyles.ExperienceH2,
  },
  expCompany: {
    ...TextStyles.ExperienceH3,
  },
  expTimeWorked: {
    ...TextStyles.ExperienceH4,
  },

  bottomHalf: {
    display: 'flex',
  },
  skillListContainer: {
    display: 'flex',
    padding: '2%',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  // Components
  SkillItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    margin: '2%',
    backgroundColor: colors.palette4,
    border: '1px solid black',
    boxShadow: `3px 3px 2px ${colors.darkGrey}`,
    ...TextStyles.ExperienceH5,
  },
  text: {
    padding: '10px',
    textAlign: 'center',
  },

  // BACK HALF
  BACKExpItemContainer: {
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '10px',
    margin: '20px',
    border: '2px solid black',
    boxShadow: `6px 6px 4px ${colors.darkGrey}`,
    ...TextStyles.ExperienceH4,
  },
  backHalfTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto', 
    maxHeight: '95%',
    maxWidth: '95%',
  },
  briefSummary: {
    padding: '1%',
    ...TextStyles.ExperienceH4,
  },
  bulletPtItem: {
    padding: '1%',
    ...TextStyles.ExperienceH4,
  },
}

export default styles;