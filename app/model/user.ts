const userModel = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    uid: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(32),
    password: STRING(64),
    mail: STRING(200),
    url: STRING(200),
    screenName: STRING(32),
    created: INTEGER(10),
    activated: INTEGER(10),
    logged: INTEGER(10),
    group: STRING(16),
    authCode: STRING(16),
  });

  User.findByLogin = async function(login) {
    return await this.findOne({
      where: {
        login
      },
    });
  }

  return User;
}