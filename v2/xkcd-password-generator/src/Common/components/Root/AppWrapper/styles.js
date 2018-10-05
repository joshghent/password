import { css, injectGlobal } from "emotion";

injectGlobal(`
  body,
  html {
    color: #032933;
    margin: 0;
    padding: 0;
    font-family: "Raleway";
  }

  .ui.header {
    font-family: "Raleway";
  }

  .ui.header:first-child {
    margin-top: 0;
  }
`);

const stylesGenerator = () => ({
  container: css`
    margin: 0;
    @media (max-width: 599px) {
      width: 100%;
    }
  `
});

export default stylesGenerator;
