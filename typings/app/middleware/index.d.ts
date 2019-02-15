// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRouterControl from '../../../app/middleware/routerControl';

declare module 'egg' {
  interface IMiddleware {
    routerControl: typeof ExportRouterControl;
  }
}
