// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportArticle from '../../../app/service/article';
import ExportCommon from '../../../app/service/common';
import ExportHome from '../../../app/service/home';
import ExportLogin from '../../../app/service/login';
import ExportTweet from '../../../app/service/tweet';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    article: ExportArticle;
    common: ExportCommon;
    home: ExportHome;
    login: ExportLogin;
    tweet: ExportTweet;
  }
}
