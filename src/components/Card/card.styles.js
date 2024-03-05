const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  cardBackgroundContainer: {
    display: 'flex',
    maxWidth: '100%',
    position: 'relative',
  },
  outerCard: {
    alignItems: 'center',
    backgroundColor: '#6E8DFF',
    borderRadius: '8px',
    display: 'flex',
    height: '300px',
    justifyContent: 'center',
    position: 'relative',
    width: '850px',
  },
  innerRectangle: {
    border: '2px dashed #FFFFFF',
    borderRadius: '6px',
    color: 'red',
    height: '85%',
    padding: '1%',
    position: 'absolute',
    textAlign: 'center',
    width: '90%',
  },
  contentContainer: {
    left: '0',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-160%)',
    width: '100%',
  },
  bulletPointTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  bulletPointTitle: {
    color: 'black',
  },
  bulletPointItemsContainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '50px',
  },
  bulletPointItem: {
    color: 'black',
  },
};

export default styles;
