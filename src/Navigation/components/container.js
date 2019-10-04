import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as NavigationActions from "../ducks";
import HomeController from "./controller";

const mapStateToProps = ({ routerReducer }) => ({
  location: routerReducer.location
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(NavigationActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeController);
