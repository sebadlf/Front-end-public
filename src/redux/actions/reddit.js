import * as actionTypes from "./actionTypes";

import { fetchReddit } from "../../services/reddit";

export const loadReddit = id => ({
  type: actionTypes.LOAD_REDDIT,
  payload: fetchReddit(id)
});
