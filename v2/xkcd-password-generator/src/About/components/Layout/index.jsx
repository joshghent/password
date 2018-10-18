import React from "react";
import PropTypes from "prop-types";

import withStyles from "Common/components/withStyles";
import stylesGenerator from "./styles";

const Layout = ({ aboutView }) => <section>{aboutView}</section>;

Layout.propTypes = {
  // computedStyles: PropTypes.shape({
  //   panel: PropTypes.string.isRequired
  // }).isRequired,
  aboutView: PropTypes.element.isRequired
};

export default withStyles(stylesGenerator)(Layout);
