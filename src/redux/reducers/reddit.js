import * as actionTypes from "../actions/actionTypes";

const initialState = { data: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_REDDIT_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};
