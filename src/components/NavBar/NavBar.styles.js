import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

const styles = {
  outerContainer: {
    backgroundColor: colors.black,
    color: colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    padding: '10px',
    width: '100%',
    ...TextStyles.NavBarItems,
  },
  menuItem: {
    cursor: 'pointer',
    textDecoration: 'none', 
    color: 'inherit',
    ...TextStyles.NavBarItems,
  },
  dropDownArrow: {
    marginLeft: '5px', 
    verticalAlign: 'middle',
  },
  dropdown: {
    backgroundColor: colors.black,
    color: colors.white,
    left: '-35px',
    marginTop: '10px',
    position: 'absolute',
    width: '200px',
    overflow: 'auto',
  },
  dropdownItem: {
    padding: '8px 12px',
    borderBottom: `1px solid ${colors.white}`,
    flexDirect: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dropDownText: {
    ...TextStyles.NavBarItems,
  },
  dropDownIcon: {
  },
};


export default styles;
