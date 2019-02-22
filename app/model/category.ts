const categoryModel = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Category = app.model.define('category', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    pid: INTEGER,
    name: STRING(20),
    count: INTEGER,
    ename: STRING(20),
  }, {
    timestamps: false,
  });

  return Category;
};

export default categoryModel;
