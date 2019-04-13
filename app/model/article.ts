import CommentModel from './comment';
import CategoryModel from './category';
import TagModel from './tag';
import TagConfigModel from './tag_config';
import * as Sequelize from 'sequelize';
import { getBrief, markdown } from '../utils/markdown';

export interface ArticleAttributes {
  aid: number;
  text: string;
  slug: string;
  created: string;
  modified: string;
}
export interface ArticleInstance extends Sequelize.Instance<ArticleAttributes> {
  aid: number;
  text: string;
  slug: string;
}

const ArticleModel = app => {
  const { STRING, INTEGER, VIRTUAL } = app.Sequelize;
  const moment = require('moment');
  const Comment = CommentModel(app);
  const Category = CategoryModel(app);
  const Tag = TagModel(app);
  const TagConfig = TagConfigModel(app);
  const Article = app.model.define('article', {
    aid: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
    title: STRING(200),
    outdate: {
      type: VIRTUAL,
      get(this: ArticleInstance) {
        const originModified = this.getDataValue('modified');
        const now = moment();
        const diff = now.diff(originModified, 'day');
        if (diff > 100) {
          return diff;
        } else {
          return 'false';
        }
      },
    },
    created: {
      type: STRING(20),
      get(this: ArticleInstance) {
        const originCreate = this.getDataValue('created');
        return moment(originCreate).format('YYYY-MM-DD');
      },
    },
    modified: {
      type: STRING(20),
      get(this: ArticleInstance) {
        const originModified = this.getDataValue('modified');
        return moment(originModified).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    text: STRING,
    order: INTEGER(10),
    authorId: INTEGER(10),
    status: STRING(16),
    commentsNum: INTEGER(10),
    allowComment: INTEGER(1),
    categoryId: INTEGER(10),
    slug: STRING(100),
    readnum: INTEGER(11),
    type: STRING(20),
    brief: {
      type: VIRTUAL,
      get(this: ArticleInstance) {
        const { html } = markdown(getBrief(this.getDataValue('text')));
        return html;
      },
    },
    markdown: {
      type: VIRTUAL,
      get(this: ArticleInstance) {
        const md = markdown(this.getDataValue('text'));
        return md;
      },
    },
    link: {
      type: VIRTUAL,
      get(this: ArticleInstance) {
        const link = this.getDataValue('slug') || `id/${this.getDataValue('aid')}`;
        return link;
      },
    },
    contentLength: {
      type: VIRTUAL,
      get(this: ArticleInstance) {
        const text = this.getDataValue('text');
        const len = text && text.length || 0;
        return len;
      },
    },
  }, {
    timestamps: false,
  });

  Article.hasMany(Comment, { foreignKey: 'identity' });
  Article.belongsTo(Category, { foreignKey: 'categoryId' });

  Article.belongsToMany(Tag, {
    through: TagConfig,
    foreignKey: 'aid',
  });

  Article.findByPage = async function (pageSize, page, where?: any) {
    const data = await this.findAll({
      where,
      limit: pageSize,
      offset: (page - 1) * pageSize,
      order: [
        [ 'created', 'DESC' ],
      ],
      include: [ Comment, Category ],
     });
    return data;
  };

  Article.findByWhere = async function (where) {
    Object.keys(where).forEach(w => {
      if (where[w] === undefined) {
        delete where[w];
      }
    });
    const data = await this.findOne({
      where,
      include: [ Comment, Category, Tag ],
    });
    return data;
  };

  Article.prototype.incrementReadNum = async function () {
    return await this.increment('readnum');
  };

  return Article;
};

export default ArticleModel;
