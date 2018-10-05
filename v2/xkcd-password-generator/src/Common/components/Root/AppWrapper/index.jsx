import React from "react";
import PropTypes from "prop-types";

import withStyles from "Common/components/withStyles";
import stylesGenerator from "./styles";

const AppWrapper = ({ computedStyles, children }) => (
  <div className={computedStyles.container}>{children}</div>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  computedStyles: PropTypes.shape({
    container: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(stylesGenerator)(AppWrapper);
