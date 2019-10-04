/* eslint react/prefer-stateless-function:0 */
import React, { PureComponent } from "react";

/**
 * withStyles Higher Order Component
 * @description @todo Add Description
 * @param {*} stylesGenerator
 */
const withStyles = stylesGenerator => WrappedComponent =>
  class StyledComponent extends PureComponent {
    render() {
      const computedStyles = stylesGenerator(this.props);

      return (
        <WrappedComponent {...this.props} computedStyles={computedStyles} />
      );
    }
  };

export default withStyles;
