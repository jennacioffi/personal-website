import { fonts } from '../../../styles/fonts.js';
import { colors } from '../../../styles/colors.js';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', 
    width: '100%',
  },
  circle: {
    width: '300px', 
    height: '300px', 
    borderRadius: '50%', 
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%', 
  },
  text: {
    marginTop: '10px',
    fontFamily: fonts.primary,
    color: colors.text, 
  },
};


export default styles;