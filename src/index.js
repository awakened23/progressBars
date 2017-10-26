import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
import './index.css';
//import ProgressBars from './presenters/ProgressBars';
import ConnectedProgressBars from './connectors/ConnectedProgressBars'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <Switch>
            <Route path="/" component={ConnectedProgressBars} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
