import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import promiseMiddleware from "redux-promise-middleware";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./reducers";

export const history = createBrowserHistory();

export default function configureStore() {
  const middleware = process.env.IS_PRODUCTION
    ? applyMiddleware(promiseMiddleware, routerMiddleware(history))
    : composeWithDevTools(
        applyMiddleware(promiseMiddleware, routerMiddleware(history))
      );

  const store = createStore(createRootReducer(history), {}, middleware);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
