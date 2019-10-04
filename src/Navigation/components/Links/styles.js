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
      font-size: 18px;
      font-weight: 900 !important;
      &:hover {
        color: #2185d0;
      }
    }
  `,
  navItemActive: css`
    a {
      color: #2185d0;
    }
  `
});

export default stylesGenerator;
