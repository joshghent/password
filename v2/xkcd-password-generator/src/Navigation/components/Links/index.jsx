import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { ROUTES } from "Navigation/constants";
import withStyles from "Common/components/withStyles";
import stylesGenerator from "./styles";

const Links = ({ computedStyles }) => (
  <ul className={computedStyles.nav}>
    <li className={computedStyles.navItem}>
      <NavLink to={ROUTES.HOME}>Home</NavLink>
    </li>
    <li className={computedStyles.navItem}>
      <NavLink to={ROUTES.ABOUT}>About Us</NavLink>
    </li>
  </ul>
);

Links.propTypes = {
  computedStyles: PropTypes.shape({
    nav: PropTypes.any,
    navItem: PropTypes.any
  }).isRequired
};

export default withStyles(stylesGenerator)(Links);
