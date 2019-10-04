import { css } from "emotion";

const stylesGenerator = () => ({
  base: css`
    border-bottom: 4px solid #161e44;
    width: 100%;
  `,

  logo: css`
    height: 75px;
  `,

  logoContainer: css`
    margin-left: 15%;
  `,

  headingTitle: css`
    display: inline-block;
    position: relative;
    bottom: 20px;
    span {
      display: block;
      font-size: 18px;
      line-height: 1em;
    }
  `,

  navContainer: css`
    position: absolute;
    top: 20px;
    right: 15%;
  `
});

export default stylesGenerator;
