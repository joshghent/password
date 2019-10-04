import { css } from "emotion";

const stylesGenerator = () => ({
  checkbox: css`
    div.ui {
      top: 1.4em;
    }
  `,
  buttonContainer: css`
    margin-right: -22px;
    padding-right: 40px !important;
    text-align: right;
  `
});

export default stylesGenerator;
