import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  const {
    NBOOK_MYSQL_HOST,
    NBOOK_REDIS_HOST,
    NBOOK_REDIS_PORT,
    NBOOK_REDIS_PASSWORD,
  } = process.env;

  config.keys = 'nbook_config_keys';

  // add your egg config in here
  config.middleware = [
    'local',
    'authUser',
  ];

  config.redis = {
    client: {
      port: Number(NBOOK_REDIS_PORT),
      host: NBOOK_REDIS_HOST,
      password: NBOOK_REDIS_PASSWORD,
      db: 0,
    },
  };

  config.view = {
    mapping: {
      '.ejs': 'ejs',
      '.html': 'ejs',
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

  config.session = {
    maxAge: 24 * 3600 * 1000, // ms
    key: 'nbook_SESS',
    httpOnly: true,
    encrypt: true,
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    nav: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Archive',
        url: '/archive',
      },
      {
        name: 'Tweet',
        url: '/tweet',
      },
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Link',
        url: '/link',
      },
    ],
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
