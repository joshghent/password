import React from "react";
import PropTypes from "prop-types";

import Layout from "./Layout";

const NavigationController = ({ children }) => (
  <Layout>
    <div>{children}</div>
  </Layout>
);

NavigationController.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavigationController;
