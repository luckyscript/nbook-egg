// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAbout from '../../../app/controller/about';
import ExportAdmin from '../../../app/controller/admin';
import ExportArchive from '../../../app/controller/archive';
import ExportArticle from '../../../app/controller/article';
import ExportHome from '../../../app/controller/home';
import ExportLink from '../../../app/controller/link';
import ExportLogin from '../../../app/controller/login';
import ExportTest from '../../../app/controller/test';
import ExportTweet from '../../../app/controller/tweet';

declare module 'egg' {
  interface IController {
    about: ExportAbout;
    admin: ExportAdmin;
    archive: ExportArchive;
    article: ExportArticle;
    home: ExportHome;
    link: ExportLink;
    login: ExportLogin;
    test: ExportTest;
    tweet: ExportTweet;
  }
}
