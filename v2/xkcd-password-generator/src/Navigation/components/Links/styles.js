import { css } from "emotion";

const stylesGenerator = () => ({
  nav: css`
    list-style: none;
    li {
      display: inline;
      }
    }
  `,
  navItem: css`
    padding: 10px;
    a {
      color: #032933;
      &:hover {
        color: #fff;
      }
    }
  `
});

export default stylesGenerator;
