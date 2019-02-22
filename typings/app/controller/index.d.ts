// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAbout from '../../../app/controller/about';
import ExportAdmin from '../../../app/controller/admin';
import ExportArchive from '../../../app/controller/archive';
import ExportArticle from '../../../app/controller/article';
import ExportHome from '../../../app/controller/home';
import ExportLink from '../../../app/controller/link';
import ExportTest from '../../../app/controller/test';
import ExportTweet from '../../../app/controller/tweet';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    about: ExportAbout;
    admin: ExportAdmin;
    archive: ExportArchive;
    article: ExportArticle;
    home: ExportHome;
    link: ExportLink;
    test: ExportTest;
    tweet: ExportTweet;
    user: ExportUser;
  }
}
