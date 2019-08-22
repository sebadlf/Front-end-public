import * as actionTypes from "../actions/actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_LIST_FULFILLED:
      return action.payload;
    case actionTypes.LOAD_REDDIT_FULFILLED:
      return state.map(item => ({
        ...item,
        readed: item.data.id === action.payload.data.id ? true : item.readed
      }));
    case actionTypes.DISMISS_REDDIT:
      return state.map(item => ({
        ...item,
        dismissed: item.data.id === action.payload ? true : item.dismissed
      }));
    default:
      return state;
  }
};
