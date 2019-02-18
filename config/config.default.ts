import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = 'nbook_config_keys';

  // add your egg config in here
  config.middleware = [
  ];

  config.view = {
    mapping: {
      '.ejs': 'ejs',
      '.html': 'ejs',
    },
  };
  config.sequelize = {
    dialect: 'mysql',
    host: process.env.NBOOK_MYSQL_HOST || 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'nbook',
    timestamps: false,
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
