import React from "react";
import PropTypes from "prop-types";

import { Header as Heading } from "semantic-ui-react";
import Links from "Navigation/components/Links";
import withStyles from "Common/components/withStyles";
import stylesGenerator from "./styles";

const Header = ({ computedStyles }) => (
  <header className={computedStyles.base}>
    <Heading as="h1" className={computedStyles.headingIcon}>
      <span role="img" aria-label="Password Icon">
        &#128273;
      </span>
    </Heading>
    <Heading as="h2" className={computedStyles.headingTitle}>
      Generate A Password
    </Heading>
    <div className={computedStyles.navContainer}>
      <Links />
    </div>
  </header>
);

Header.propTypes = {
  computedStyles: PropTypes.shape({
    base: PropTypes.string.isRequired,
    headingIcon: PropTypes.string.isRequired,
    headingTitle: PropTypes.string.isRequired,
    navContainer: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(stylesGenerator)(Header);
