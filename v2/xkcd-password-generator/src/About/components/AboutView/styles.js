import { css } from "emotion";

const stylesGenerator = () => ({
  comic: css`
    margin: 20px auto 0 auto;
    width: 100%;
  `,
  messageBody: css`
    margin-top: 15px;
    margin-left: 6px;
  `
});

export default stylesGenerator;
