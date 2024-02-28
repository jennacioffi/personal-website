// colors.js is not supported in regular CSS files. You'll need to define your colors directly in the CSS or use CSS variables.
// import './colors.js'; /* Import colors */

const styles = {
  app: {
    textAlign: "center",
  },
  appLogo: {
    height: "40vmin",
    pointerEvents: "none",
  },
  appHeader: {
    backgroundColor: "var(--blueLapis)", // Use CSS variable directly
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  appLink: {
    color: "#61dafb",
  },
  // You can keep keyframes as they are since they are not dependent on colors.js
  appLogoSpin: {
    "@keyframes": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
  },
};

export default styles;
