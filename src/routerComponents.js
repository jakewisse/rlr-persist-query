import { routerForBrowser } from 'redux-little-router';
import routes from './routes';

export const { enhancer, reducer, middleware } = routerForBrowser({
  routes
});
