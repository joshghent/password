import { css } from "emotion";

const stylesGenerator = () => ({
  viewPanel: css`
    margin: 5em auto 1.5em;
    width: 66%;
    .form {
      h2.header {
        margin-bottom: 0px;
      }
      h6.header {
        font-size: 11px;
        margin-top: 0px;
        margin-bottom: 30px;
      }
    }
  `
});

export default stylesGenerator;
