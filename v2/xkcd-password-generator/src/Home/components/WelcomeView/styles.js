import { css } from "emotion";

const stylesGenerator = () => ({
  checkbox: css`
    div.ui {
      top: 1.4em;
    }
  `,
  controlContainer: css`
    margin-top: 5em !important;
  `,
  buttonContainer: css`
    padding-right: 50px !important;
    text-align: right;
  `
});

export default stylesGenerator;
