import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Header as Heading } from "semantic-ui-react";

import XKCD_COMIC from "Common/assets/password_strength.png";

import withStyles from "Common/components/withStyles";
import stylesGenerator from "./styles";

class AboutView extends PureComponent {
  static propTypes = {
    computedStyles: PropTypes.shape({
      comic: PropTypes.string.isRequired
    }).isRequired,
    history: PropTypes.objectOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    actions: PropTypes.shape({
      emitIsLoading: PropTypes.func.isRequired
    }).isRequired
  };

  contactHandler = () => {
    const { isLoading, actions, history } = this.props;
    actions.emitIsLoading({ isLoading: !isLoading });
    history.push("/contactUs");
  };

  render() {
    const { computedStyles, title } = this.props;

    return (
      <div>
        <Heading as="h1">{title}</Heading>
        <img className={computedStyles.comic} src={XKCD_COMIC} alt="xkcd-936" />
      </div>
    );
  }
}

export default withRouter(withStyles(stylesGenerator)(AboutView));
