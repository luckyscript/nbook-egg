// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportArticle from '../../../app/service/article';
import ExportCategory from '../../../app/service/category';
import ExportComment from '../../../app/service/comment';
import ExportCommon from '../../../app/service/common';
import ExportGeetest from '../../../app/service/geetest';
import ExportMail from '../../../app/service/mail';
import ExportTag from '../../../app/service/tag';
import ExportTweet from '../../../app/service/tweet';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    article: ExportArticle;
    category: ExportCategory;
    comment: ExportComment;
    common: ExportCommon;
    geetest: ExportGeetest;
    mail: ExportMail;
    tag: ExportTag;
    tweet: ExportTweet;
    user: ExportUser;
  }
}
