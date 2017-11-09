import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router';
import Post from './components/post';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import blogApp from './reducers/postReducer';
import BlogNav from './components/navbar';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    blogApp,
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={BlogNav} />
        <Route exact path="/" component={Post} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
