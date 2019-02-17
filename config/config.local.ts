import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'nbook',
    timestamps: false,
  };
  return config;
};
