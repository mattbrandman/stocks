import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router';
import logger from 'redux-logger';
import Stock from './components/stock';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import stockReducer from './reducers/stockReducer';
import BlogNav from './components/navbar';
import Dashboard from './components/dashboard';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    stockReducer,
    router: routerReducer,
  }),
  applyMiddleware(middleware, logger),
);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={BlogNav} />
        <Route exact path="/" component={Dashboard} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
