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
    borderRadius: '100%', 
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '10px solid transparent', /* adjust the width of the border as needed */
    borderImage: 'linear-gradient(to right, #ff7e5f, #feb47b)', /* define your gradient */
    borderImageSlice: 1
  },
  image: {
    width: '100%', 
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%', 
  },
  text: {
    marginTop: '10px',
    fontFamily: fonts.cardTitle,
    color: colors.text, 
    fontSize: '36px',
  },
};


export default styles;