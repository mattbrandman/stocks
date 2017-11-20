import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router';
import logger from 'redux-logger';
// import { Socket } from 'phoenix-channels';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap/dist/css/bootstrap.css';
import { reducer as formReducer } from 'redux-form';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import BlogNav from './components/navbar';
import UserStockDisplay from './containers/userstockcontainer';
import StockListDisplayContainer from './containers/stocklistdisplaycontainer';
import { userReducer } from './reducers/userReducer';
import LoginContainer from './containers/logincontainer';
import rootSaga from './sagas/login';
import UserList from './components/userList';


const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    router: routerReducer,
    userReducer,
    form: formReducer,
  }),
  applyMiddleware(middleware, logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={BlogNav} />
        <div className="container">
          <div className="row">
            <Route path="/users/:id" component={UserStockDisplay} />
            <Route exact path="/" component={StockListDisplayContainer} />
            <Route path="/" component={UserList} />
          </div>
        </div>
        <Route path="/login/" component={LoginContainer} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
