// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportArticle from '../../../app/controller/article';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    article: ExportArticle;
    home: ExportHome;
    login: ExportLogin;
  }
}
