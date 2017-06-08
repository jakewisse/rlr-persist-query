import { combineReducers } from 'redux';
import { reducer } from '../routerComponents';

// Can we not alias in CRA?
const routerReducer = reducer;

export default combineReducers({
  router: routerReducer,
  otherState: (state = { foo: 'bar' }, action) => state
});
