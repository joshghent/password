import { handleActions, createAction } from "redux-actions";

/**
 * ACTION TYPE CONSTANTS
 */
const EMIT_IS_LOADING = "EMIT_IS_LOADING";

// INITIAL STATE
const initialState = {
  isLoading: false,
  title: "About"
};

/**
 * ACTIONS
 */
export const emitIsLoading = createAction(EMIT_IS_LOADING, payload => payload);

/**
 * HANDLERS
 */
const handlers = {
  [EMIT_IS_LOADING]: (state, { payload }) => ({
    ...state,
    ...payload
  })
};

const aboutReducer = handleActions(handlers, initialState);
export default aboutReducer;
