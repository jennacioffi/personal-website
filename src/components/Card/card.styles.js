const styles = {
  mainContainer: { // parent to all children below
    display: "flex",
    justifyContent: "center",
    padding: '20px',
  },
  cardBackgroundContainer: {
    display: "flex", // makes whole card compress with browser window movement
    maxWidth: "100%", // ^
  },
  outerCard: {
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: "8px",
    display: "flex",
    height: "300px",
    justifyContent: "center",
    position: "relative",
    width: "850px",
  },
  innerRectangle: {
    border: "2px dashed #FFFFFF",
    borderRadius: "6px",
    color: "red",
    height: "85%",
    padding: "1%",
    position: "absolute",
    textAlign: "center",
    width: "90%",
  },
  bulletPointTitleContainer: {
    display: "flex",
    margin: "25px", // Add some margin for spacing
    position: "absolute",
  },
  bulletPointTitle: {
    alignContent: "center",
    color: "black",
  },
  bulletPointItemsContainer: { 
    justifyContent: 'flex-start' ,
    margin: '50px', 
    position: "absolute", 
  },
  bulletPointItem: {
    alignContent: "flex-start",
    color: "black",
  },
};

export default styles;
