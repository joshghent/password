import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Grid, Segment, Header as Heading } from "semantic-ui-react";

// import residential1 from "Common/assets/residential1_web.jpg";

import withStyles from "Common/components/withStyles";
import stylesGenerator from "./styles";

class AboutView extends PureComponent {
  static propTypes = {
    computedStyles: PropTypes.shape({
      heading: PropTypes.string.isRequired
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
      <Grid columns={1}>
        <Grid.Column>
          <Segment>
            <Heading as="h1" className={computedStyles.heading}>
              {title}
            </Heading>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(withStyles(stylesGenerator)(AboutView));
