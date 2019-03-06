import CommentModel from './comment';
import CategoryModel from './category';
import TagModel from './tag';
import TagConfigModel from './tag_config';

const ArticleModel = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Comment = CommentModel(app);
  const Category = CategoryModel(app);
  const Tag = TagModel(app);
  const TagConfig = TagConfigModel(app);
  const Article = app.model.define('article', {
    aid: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
    title: STRING(200),
    created: STRING(20),
    modified: STRING(20),
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

  return Article;
};

export default ArticleModel;
