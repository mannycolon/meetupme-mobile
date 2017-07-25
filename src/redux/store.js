import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import reducers from './reducers';

const middlewares = [
  promiseMiddleware(),
  thunk,
];

if (__DEV__) { // eslint-disable-line
  middlewares.push(createLogger());
}

// const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// dev tool

export default createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares), autoRehydrate()),
);

