import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap/dist/css/bootstrap.css';
import { reducer as formReducer } from 'redux-form';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import BlogNav from './components/navbar';
import Dashboard from './components/dashboard';
import StockContainer from './containers/stockcontainer';
import { userReducer } from './reducers/userReducer';

const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware;
const store = createStore(
  combineReducers({
    router: routerReducer,
    userReducer,
    form: formReducer,
  }),
  applyMiddleware(middleware, logger, sagaMiddleware),
);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={BlogNav} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/stocks/" component={StockContainer} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
