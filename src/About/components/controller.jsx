import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Layout from "./Layout";
import AboutView from "./AboutView";

class AboutController extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  };

  renderAboutView = () => {
    const { isLoading, title } = this.props;
    return <AboutView {...this.props} isLoading={isLoading} title={title} />;
  };

  render() {
    return <Layout {...this.props} aboutView={this.renderAboutView()} />;
  }
}

export default AboutController;
