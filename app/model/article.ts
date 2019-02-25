const ArticleModel = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize;
  const Article = app.model.define('article', {
    aid: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
    title: STRING(200),
    created: DATE,
    modified: DATE,
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

  Article.findByPage = async function (pageSize, page, where?: any) {
    const data = await this.findAll({
      where,
      limit: pageSize,
      offset: (page - 1) * pageSize,
      order: [
        [ 'created', 'DESC' ],
      ],
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
    });
    return data;
  };

  return Article;
};

export default ArticleModel;
