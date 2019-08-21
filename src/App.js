import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./redux/store";

import List from "./components/List";
import Reddit from "./components/Reddit";

import "./App.scss";

const App = () => (
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <div className="App">
        <List />
        <Route path="/reddit/:id" component={Reddit} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
