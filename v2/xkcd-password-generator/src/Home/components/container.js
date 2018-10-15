import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as HomeActions from "../ducks";
import HomeController from "./controller";

const mapStateToProps = ({ homeReducer, routerReducer }) => ({
  isLoading: homeReducer.isLoading,
  password: homeReducer.password,
  showCopiedMessage: homeReducer.showCopiedMessage,
  numWords: homeReducer.numWords,
  mixCase: homeReducer.mixCase,
  includeNumbers: homeReducer.includeNumbers,
  includeSpecialChars: homeReducer.includeSpecialChars,
  location: routerReducer.location
});

const mapDispatchToProps = dispatch => {
  const actions = {
    ...HomeActions
  };

  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeController);
