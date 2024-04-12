import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', 
    width: '100%',
    position: 'relative',
    right: '6%',
  },
  circle: {
    width: '250px', 
    height: '250px', 
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '10px solid transparent', 
    borderImage: `linear-gradient(to bottom, ${colors.profilePicGradient1}, ${colors.profilePicGradient2})`,
    borderImageSlice: 1,
  },
  image: {
    width: '100%', 
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    marginTop: '10px',
    fontFamily: fonts.cardTitle,
    color: colors.text, 
    fontSize: '36px',
    textAlign: 'center',
  },
};


export default styles;