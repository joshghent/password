import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Layout from "./Layout";
import WelcomeView from "./WelcomeView";

class HomeController extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    showCopiedMessage: PropTypes.bool.isRequired,
    numWords: PropTypes.number.isRequired,
    mixCase: PropTypes.bool.isRequired,
    includeNumbers: PropTypes.bool.isRequired,
    includeSpecialChars: PropTypes.bool.isRequired
  };

  renderWelcomeView = () => <WelcomeView {...this.props} />;

  render() {
    return <Layout {...this.props} welcomeView={this.renderWelcomeView()} />;
  }
}

export default HomeController;
