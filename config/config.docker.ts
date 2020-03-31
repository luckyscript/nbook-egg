import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  const {
    NBOOK_MYSQL_HOST,
    NBOOK_REDIS_HOST,
    NBOOK_REDIS_PORT,
    NBOOK_REDIS_PASSWORD,
  } = process.env;

  config.redis = {
    client: {
      port: Number(NBOOK_REDIS_PORT),
      host: NBOOK_REDIS_HOST,
      password: NBOOK_REDIS_PASSWORD,
      db: 0,
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: NBOOK_MYSQL_HOST,
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'nbook',
    timestamps: false,
  };

  return config;
};
