import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createMemoizeMiddleware, { memoize } from 'redux-memoize';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  (createMemoizeMiddleware({ ttl: 200 }), thunk),
);

export default store