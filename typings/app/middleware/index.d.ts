// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthUser from '../../../app/middleware/authUser';
import ExportHandleError from '../../../app/middleware/handleError';
import ExportLocal from '../../../app/middleware/local';
import ExportRouterControl from '../../../app/middleware/routerControl';

declare module 'egg' {
  interface IMiddleware {
    authUser: typeof ExportAuthUser;
    handleError: typeof ExportHandleError;
    local: typeof ExportLocal;
    routerControl: typeof ExportRouterControl;
  }
}
