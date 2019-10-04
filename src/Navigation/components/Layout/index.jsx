import React, { Fragment } from "react";
import PropTypes from "prop-types";

import withStyles from "Common/components/withStyles";
import Header from "../Header";
import stylesGenerator from "./styles";

const Layout = ({ computedStyles, children }) => (
  <Fragment>
    <Header />
    <main role="main" className={computedStyles.children}>
      {children}
    </main>
  </Fragment>
);

Layout.propTypes = {
  computedStyles: PropTypes.shape({
    children: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(stylesGenerator)(Layout);
