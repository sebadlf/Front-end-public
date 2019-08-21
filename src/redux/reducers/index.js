import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

//TODO: Add reducers

export default history =>
  combineReducers({
    router: connectRouter(history)
  });
