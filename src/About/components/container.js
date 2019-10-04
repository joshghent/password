import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as AboutActions from "../ducks";
import AboutController from "./controller";

const mapStateToProps = ({ aboutReducer, routerReducer }) => ({
  isLoading: aboutReducer.isLoading,
  location: routerReducer.location,
  title: aboutReducer.title
});

const mapDispatchToProps = dispatch => {
  const actions = {
    ...AboutActions
  };

  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutController);
