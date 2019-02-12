import { css } from "emotion";

const stylesGenerator = () => ({
  base: css`
    border-bottom: 4px solid #161e44;
    width: 100%;
  `,

  headingIcon: css`
    text-align: center;
    font-size: 54px !important;
  `,

  headingTitle: css`
    text-align: center;
    margin-top: 0 !important;
  `,

  navContainer: css`
    position: absolute;
    top: 5%;
    right: 20%;
  `
});

export default stylesGenerator;
