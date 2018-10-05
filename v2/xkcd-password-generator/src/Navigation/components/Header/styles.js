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
    top: 0;
    right: 10%;
  `
});

export default stylesGenerator;
