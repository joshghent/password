import { handleActions, createAction } from "redux-actions";

/**
 * ACTION TYPE CONSTANTS
 */
const EMIT_IS_LOADING = "EMIT_IS_LOADING";
const EMIT_MIX_CASE_CHANGED = "EMIT_MIX_CASE_CHANGED";
const EMIT_NUM_WORDS_CHANGED = "EMIT_NUM_WORDS_CHANGED";
const EMIT_SHOW_COPIED_MESSAGE = "EMIT_SHOW_COPIED_MESSAGE";
const EMIT_SPECIAL_CHARS_CHANGED = "EMIT_SPECIAL_CHARS_CHANGED";
const EMIT_INCLUDE_NUMBERS_CHANGED = "EMIT_INCLUDE_NUMBERS_CHANGED";

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

export const emitNumWordsChanged = createAction(
  EMIT_NUM_WORDS_CHANGED,
  payload => payload
);

export const emitMixCaseChanged = createAction(
  EMIT_MIX_CASE_CHANGED,
  payload => payload
);

export const emitIncludeNumbersChanged = createAction(
  EMIT_INCLUDE_NUMBERS_CHANGED,
  payload => payload
);

export const emitSpecialCharsChanged = createAction(
  EMIT_SPECIAL_CHARS_CHANGED,
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
  }),
  [EMIT_NUM_WORDS_CHANGED]: (state, { payload }) => ({
    ...state,
    ...payload
  }),
  [EMIT_MIX_CASE_CHANGED]: (state, { payload }) => ({
    ...state,
    ...payload
  }),
  [EMIT_INCLUDE_NUMBERS_CHANGED]: (state, { payload }) => ({
    ...state,
    ...payload
  }),
  [EMIT_SPECIAL_CHARS_CHANGED]: (state, { payload }) => ({
    ...state,
    ...payload
  })
};

const homeReducer = handleActions(handlers, initialState);
export default homeReducer;
