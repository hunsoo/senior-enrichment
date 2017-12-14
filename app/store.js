import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
//import { routerMiddleware } from 'react-router-redux';
//import createHistory from 'history/createBrowserHistory';

//export const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware
      , loggingMiddleware
      //, routerMiddleware(history)
    )
  )
);
