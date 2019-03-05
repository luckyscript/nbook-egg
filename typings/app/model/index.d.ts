// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportCategory from '../../../app/model/category';
import ExportCategoryConfig from '../../../app/model/category_config';
import ExportChat from '../../../app/model/chat';
import ExportComment from '../../../app/model/comment';
import ExportConfig from '../../../app/model/config';
import ExportLink from '../../../app/model/link';
import ExportTag from '../../../app/model/tag';
import ExportTagConfig from '../../../app/model/tag_config';
import ExportUser from '../../../app/model/user';

declare module 'sequelize' {
  interface Sequelize {
    Article: ReturnType<typeof ExportArticle>;
    Category: ReturnType<typeof ExportCategory>;
    CategoryConfig: ReturnType<typeof ExportCategoryConfig>;
    Chat: ReturnType<typeof ExportChat>;
    Comment: ReturnType<typeof ExportComment>;
    Config: ReturnType<typeof ExportConfig>;
    Link: ReturnType<typeof ExportLink>;
    Tag: ReturnType<typeof ExportTag>;
    TagConfig: ReturnType<typeof ExportTagConfig>;
    User: ReturnType<typeof ExportUser>;
  }
}
