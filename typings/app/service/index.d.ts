// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportArticle from '../../../app/service/article';
import ExportCommon from '../../../app/service/common';
import ExportGeetest from '../../../app/service/geetest';
import ExportTweet from '../../../app/service/tweet';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    article: ExportArticle;
    common: ExportCommon;
    geetest: ExportGeetest;
    tweet: ExportTweet;
    user: ExportUser;
  }
}
