import React from "react";
import { createStore, combineReducers } from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { ConnectedRouter, routerReducer } from "react-router-redux";
import { createBrowserHistory } from "history";
import { I18nextProvider } from "react-i18next";


import i18n from "./i18n";

import reducer from "./reducer";

import App from './App';

require('dotenv').config();

const store = createStore(
  combineReducers({
    app: reducer,
    routing: routerReducer
  })
);

const history = createBrowserHistory();

const BasicExample = ({ store, history }) => (
    <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
            {/*<Route path="/:locale" component={Navbar} />*/}
            <Route path="/:locale" component={App} />

          <Redirect to="/en" />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </I18nextProvider>


);

render(<BasicExample store={store} history={history} />, document.getElementById('root'));
