import * as actionTypes from "./actionTypes";

import { fetchTop } from "../../services/reddit";

export const loadList = () => ({
  type: actionTypes.LOAD_LIST,
  payload: fetchTop()
});

export const dismissReddit = id => ({
  type: actionTypes.DISMISS_REDDIT,
  payload: id
});
