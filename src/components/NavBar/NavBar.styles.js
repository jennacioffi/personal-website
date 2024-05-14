import { colors } from '../../styles/colors.js';
import { TextStyles } from '../../styles/fonts.js';

const styles = {
  // NavBar
  outerContainer: {
    ...TextStyles.NavBarItems,
    backgroundColor: colors.black,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: '15px',
    paddingBottom: '15px',
    width: '100vw',
  },

  // NameContainer
  nameContainer: {
    ...TextStyles.NavBarItems,
    marginLeft: '25px',
  },
  dropDownArrow: {
    marginLeft: '10px', 
    verticalAlign: 'middle',
  },
  dropdown: {
    backgroundColor: colors.black,
    left: '15px',
    marginTop: '10px',
    overflow: 'auto',
    position: 'absolute',
    width: '200px',
    zIndex: 1000,
  },

  // HamburgerMenu
  hamburgerIcon: {
    alignSelf: 'center',
    display: 'flex',
    height: '35px',
    position: 'absolute',
    right: '25px',
    width: '35px',
  },
  hamburgerDropDown: {
    backgroundColor: colors.black,
    border: `1px solid ${colors.white}`,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 'fit-content',
    position: 'absolute',
    right: '25px',
    textAlign: 'center',
    top: '50px',
    width: 'fit-content',
    zIndex: 1000,
  },
  hamburgerMenuItem: {
    ...TextStyles.NavBarItems,
    borderBottom: `1px solid ${colors.white}`,
    marginLeft: '10px',
    marginRight: '10px',
    padding: '10px',
    textDecoration: 'none', 
  },

  // BarNavItems
  navMenuItemsContainer: {
    marginRight: '25px',
  },
  navMenuItem: {
    ...TextStyles.NavBarItems,
    marginLeft: '10px',
    marginRight: '10px',
    textDecoration: 'none', 
  },

  // DropdownSocials
  dropdownItem: {
    alignItems: 'center',
    borderBottom: `1px solid ${colors.white}`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '8px 12px',
  },
  dropDownText: {
    ...TextStyles.NavBarItems,
  },
};

export default styles;
