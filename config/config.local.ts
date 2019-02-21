import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'nbook',
    timestamps: false,
  };
  config.redis = {
    client: {
      port: 6379,
      host: 'localhost',
      password: 'nbook',
      db: 0,
    },
  };
  return config;
};
