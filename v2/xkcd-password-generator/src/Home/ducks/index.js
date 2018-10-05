import { handleActions, createAction } from "redux-actions";

/**
 * ACTION TYPE CONSTANTS
 */
const EMIT_IS_LOADING = "EMIT_IS_LOADING";
const EMIT_SHOW_COPIED_MESSAGE = "EMIT_SHOW_COPIED_MESSAGE";

// INITIAL STATE
const initialState = {
  isLoading: false,
  showCopiedMessage: false,
  numWords: 4,
  mixCase: true,
  includeNumbers: true,
  includeSpecialChars: true
};

/**
 * ACTIONS
 */
export const emitIsLoading = createAction(EMIT_IS_LOADING, payload => payload);
export const emitShowCopiedMessage = createAction(
  EMIT_SHOW_COPIED_MESSAGE,
  payload => payload
);

/**
 * HANDLERS
 */
const handlers = {
  [EMIT_IS_LOADING]: (state, { payload }) => ({
    ...state,
    ...payload
  }),
  [EMIT_SHOW_COPIED_MESSAGE]: (state, { payload }) => ({
    ...state,
    ...payload
  })
};

const homeReducer = handleActions(handlers, initialState);
export default homeReducer;
