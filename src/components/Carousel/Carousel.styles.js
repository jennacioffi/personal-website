import { colors } from '../../styles/colors';
// import { TextStyles } from '../../styles/fonts';

const styles = {
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
  carouselContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrows: {
    backgroundColor: colors.white,
    borderRadius: '100%',
    display: 'flex',
    alignSelf: 'center',
    cursor: 'pointer',
    margin: '20px',
  },
};

export default styles;
