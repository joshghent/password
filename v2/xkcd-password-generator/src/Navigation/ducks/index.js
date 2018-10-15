import { handleActions /* createAction */ } from "redux-actions";

const initialState = {}; // TODO session stuff?

const handlers = {};

const navigationReducer = handleActions(handlers, initialState);
export default navigationReducer;
