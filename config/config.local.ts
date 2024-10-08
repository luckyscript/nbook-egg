import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.site = 'http://dev.luckyscript.me:7001';
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'nbook_egg',
    timestamps: false,
  };
  // config.redis = {
  //   client: {
  //     port: 6379,
  //     host: 'localhost',
  //     password: 'nbook',
  //     db: 0,
  //   },
  // };
  return config;
};
