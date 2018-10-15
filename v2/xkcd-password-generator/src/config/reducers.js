import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import navigationGuideReducer from "Navigation/ducks";
import homeReducer from "Home/ducks";

export default combineReducers({
  navigationGuideReducer,
  routerReducer,
  homeReducer
});
