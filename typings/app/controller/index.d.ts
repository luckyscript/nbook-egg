// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    home: ExportHome;
  }
}
