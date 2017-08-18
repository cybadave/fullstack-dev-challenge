import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createMemoizeMiddleware from 'redux-memoize';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(createMemoizeMiddleware({ ttl: 2000 }), thunk),
);

export default store