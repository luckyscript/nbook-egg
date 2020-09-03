// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAbout from '../../../app/controller/about';
import ExportAdmin from '../../../app/controller/admin';
import ExportArchive from '../../../app/controller/archive';
import ExportArticle from '../../../app/controller/article';
import ExportAuth from '../../../app/controller/auth';
import ExportBlog from '../../../app/controller/blog';
import ExportCategory from '../../../app/controller/category';
import ExportHome from '../../../app/controller/home';
import ExportLink from '../../../app/controller/link';
import ExportTag from '../../../app/controller/tag';
import ExportTest from '../../../app/controller/test';
import ExportTweet from '../../../app/controller/tweet';
import ExportUser from '../../../app/controller/user';
import ExportApiArticle from '../../../app/controller/api/article';
import ExportApiCategory from '../../../app/controller/api/category';
import ExportApiComment from '../../../app/controller/api/comment';
import ExportApiCommon from '../../../app/controller/api/common';
import ExportApiConfig from '../../../app/controller/api/config';
import ExportApiDiamond from '../../../app/controller/api/diamond';
import ExportApiFile from '../../../app/controller/api/file';
import ExportApiLink from '../../../app/controller/api/link';
import ExportApiTag from '../../../app/controller/api/tag';
import ExportApiUser from '../../../app/controller/api/user';

declare module 'egg' {
  interface IController {
    about: ExportAbout;
    admin: ExportAdmin;
    archive: ExportArchive;
    article: ExportArticle;
    auth: ExportAuth;
    blog: ExportBlog;
    category: ExportCategory;
    home: ExportHome;
    link: ExportLink;
    tag: ExportTag;
    test: ExportTest;
    tweet: ExportTweet;
    user: ExportUser;
    api: {
      article: ExportApiArticle;
      category: ExportApiCategory;
      comment: ExportApiComment;
      common: ExportApiCommon;
      config: ExportApiConfig;
      diamond: ExportApiDiamond;
      file: ExportApiFile;
      link: ExportApiLink;
      tag: ExportApiTag;
      user: ExportApiUser;
    }
  }
}
