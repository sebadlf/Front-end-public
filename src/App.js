import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./redux/store";

import ListContainer from "./containers/List";
import RedditContainer from "./containers/Reddit";

import "./App.scss";

const App = () => (
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <div className="App">
        <ListContainer />
        <Route path="/reddit/:id" component={RedditContainer} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
