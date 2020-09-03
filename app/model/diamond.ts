const DiamondModel = app => {
  const { STRING } = app.Sequelize;

  const Diamond = app.model.define('diamond', {
    key: { type: STRING(20), primaryKey: true, autoIncrement: false },
    value: STRING(4096),
  }, {
    timestamps: true,
  });

  Diamond.findByKey = async function (key) {
    const data = await this.findOne({
      where: {
        key,
      },
    });
    return data;
  };

  return Diamond;
};

export default DiamondModel;
