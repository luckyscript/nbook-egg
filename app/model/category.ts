const categoryModel = app => {
  const { STRING, INTEGER, VIRTUAL } = app.Sequelize;

  const Category = app.model.define('category', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    pid: INTEGER,
    name: STRING(20),
    count: INTEGER,
    ename: STRING(20),
    children: VIRTUAL,
  }, {
    timestamps: false,
  });

  Category.findByName = async function (name) {
    const data = await this.findOne({
      where: {
        name,
      },
    });
    return data;
  };

  return Category;
};

export default categoryModel;
