import { createStore, compose } from 'redux';
import reducer from './reducers';

/** @see https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(reducer,
  composeEnhancers()
);
