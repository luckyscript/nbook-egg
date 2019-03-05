// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAbout from '../../../app/controller/about';
import ExportAdmin from '../../../app/controller/admin';
import ExportArchive from '../../../app/controller/archive';
import ExportArticle from '../../../app/controller/article';
import ExportHome from '../../../app/controller/home';
import ExportLink from '../../../app/controller/link';
import ExportTag from '../../../app/controller/tag';
import ExportTest from '../../../app/controller/test';
import ExportTweet from '../../../app/controller/tweet';
import ExportUser from '../../../app/controller/user';
import ExportApiArticle from '../../../app/controller/api/article';
import ExportApiUser from '../../../app/controller/api/user';

declare module 'egg' {
  interface IController {
    about: ExportAbout;
    admin: ExportAdmin;
    archive: ExportArchive;
    article: ExportArticle;
    home: ExportHome;
    link: ExportLink;
    tag: ExportTag;
    test: ExportTest;
    tweet: ExportTweet;
    user: ExportUser;
    api: {
      article: ExportApiArticle;
      user: ExportApiUser;
    }
  }
}
