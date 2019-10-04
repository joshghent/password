import React from "react";
import PropTypes from "prop-types";

import { Header as Heading } from "semantic-ui-react";

import LOGO from "Common/assets/logo_guy.png";
import Links from "Navigation/components/Links";
import withStyles from "Common/components/withStyles";
import stylesGenerator from "./styles";

const Header = ({ computedStyles }) => (
  <header className={computedStyles.base}>
    <div className={computedStyles.logoContainer}>
      <img className={computedStyles.logo} src={LOGO} alt="xkcd-936" />
      <Heading as="h1" className={computedStyles.headingTitle}>
        <span>xkcd</span>
        <span>PASSWORD GENERATOR</span>
      </Heading>
    </div>
    <div className={computedStyles.navContainer}>
      <Links />
    </div>
  </header>
);

Header.propTypes = {
  computedStyles: PropTypes.shape({
    base: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    logoContainer: PropTypes.string.isRequired,
    headingTitle: PropTypes.string.isRequired,
    navContainer: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(stylesGenerator)(Header);
