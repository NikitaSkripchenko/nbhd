import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import rootReduser from "./src/rootReducer";
import Main from "./src/Main";

const devMiddleware = [];   // Loger way be placed here
const middleware = [thunk];

const store = createStore(
  rootReduser,
  applyMiddleware(...middleware, ...devMiddleware)
);

const App = props => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
