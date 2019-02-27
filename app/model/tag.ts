const TagModel = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Tag = app.model.define('tag', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(20),
  }, {
    timestamps: false,
  });

  return Tag;
};

export default TagModel;
