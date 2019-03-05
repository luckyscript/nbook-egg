const ConfigModel = app => {
  const { INTEGER } = app.Sequelize;
  const { STRING } = app.Sequelize;
  const Config = app.model.define('config', {
    id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
    type: STRING,
    content: STRING,
  }, {
    timestamps: false,
  });

  Config.getFriendLinks = async function() {
    const friendLinks = await this.findOne({
      where: {
        type: 'friendLinks',
      },
    });
    if (friendLinks && friendLinks.content) {
      try {
        return JSON.parse(friendLinks.content);
      } catch (e) {
        app.logger.error(e);
        return [];
      }
    }
    return [];
  };

  return Config;
};

export default ConfigModel;
