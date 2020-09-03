// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportArticle from '../../../app/service/article';
import ExportAuth from '../../../app/service/auth';
import ExportCategory from '../../../app/service/category';
import ExportComment from '../../../app/service/comment';
import ExportCommon from '../../../app/service/common';
import ExportConfig from '../../../app/service/config';
import ExportDiamond from '../../../app/service/diamond';
import ExportFile from '../../../app/service/file';
import ExportGeetest from '../../../app/service/geetest';
import ExportMail from '../../../app/service/mail';
import ExportOss from '../../../app/service/oss';
import ExportTag from '../../../app/service/tag';
import ExportTweet from '../../../app/service/tweet';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    article: ExportArticle;
    auth: ExportAuth;
    category: ExportCategory;
    comment: ExportComment;
    common: ExportCommon;
    config: ExportConfig;
    diamond: ExportDiamond;
    file: ExportFile;
    geetest: ExportGeetest;
    mail: ExportMail;
    oss: ExportOss;
    tag: ExportTag;
    tweet: ExportTweet;
    user: ExportUser;
  }
}
