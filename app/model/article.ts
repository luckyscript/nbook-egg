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

  Article.findByPage = async function (pageSize, page) {
    const data =  await this.findAll({ 
      limit: pageSize,
      offset: (page-1) * pageSize,
      order: [
        ['created', 'DESC'],
      ],
     });
     return data;
  };

  return Article;
}

export default ArticleModel;