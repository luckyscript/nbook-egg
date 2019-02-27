// import ArticleModel from './article';
// import TagModel from './tag';

const TagConfigModel = app => {
  const { INTEGER } = app.Sequelize;
  // const Article = ArticleModel(app);
  // const Tag = TagModel(app);
  const TagConfig = app.model.define('tag_config', {
    tag_id: INTEGER,
    aid: INTEGER,
  }, {
    timestamps: false,
  });

  return TagConfig;
};

export default TagConfigModel;
