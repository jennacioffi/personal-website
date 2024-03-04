const styles = {
  cardContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  outerCard: {
    alignItems: "center",
    backgroundColor: "blue", 
    borderRadius: "8px",
    color: "white", // Text Color
    display: "flex",
    height: "250px",
    justifyContent: "center",
    position: "relative",
    width: "450px",
  },
  innerRectangle: {
    alignItems: "center",
    border: "2px dashed #FFFFFF",
    borderRadius: "6px",
    color: "red",
    height: "10%",
    padding: "22%",
    position: "absolute",
    textAlign: "center",
    width: "50%",
  },
};

export default styles;
