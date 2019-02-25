import { Application } from 'egg';
import apiRouter from './router/api';
import webRouter from './router/web';

export default (app: Application) => {
  webRouter(app);
  apiRouter(app);
};
