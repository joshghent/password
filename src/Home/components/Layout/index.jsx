import React from "react";
import PropTypes from "prop-types";

import withStyles from "Common/components/withStyles";
import stylesGenerator from "./styles";

const Layout = ({ welcomeView, computedStyles }) => (
  <section className={computedStyles.viewPanel}>{welcomeView}</section>
);

Layout.propTypes = {
  computedStyles: PropTypes.shape({
    viewPanel: PropTypes.string.isRequired
  }).isRequired,
  welcomeView: PropTypes.element.isRequired
};

export default withStyles(stylesGenerator)(Layout);
