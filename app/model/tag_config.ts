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

  TagConfig.removeAttribute('id');

  TagConfig.findByTagId = async function(tagId) {
    return await this.findAll({
      where: {
        tag_id: tagId,
      },
    });
  };

  return TagConfig;
};

export default TagConfigModel;
