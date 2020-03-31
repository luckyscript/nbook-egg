import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = 'nbook_config_keys';

  // add your egg config in here
  config.middleware = [
    'handleError',
    'local',
    'authUser',
    'apiAuthUser',
  ];

  config.geetest = {
    client: {
      geetest_id: 'f33f6032bd0975aaab21e49e6c76aa3d',
      geetest_key: 'be92a7a4f9901d66df096cbe4cd4320b',
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
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'lukai123',
    database: 'nbook_egg',
    timestamps: false,
  };

  config.mail_opts = {
    host: 'smtp.exmail.qq.com',
    port: 465,
    auth: {
      user: 'root@luckyscript.me',
      pass: '****',
    },
    secure: true,
  };

  config.adminInfo = {
    name: '萧迹',
    mail: 'jsjhlk@qq.com',
  };

  config.multipart = {
    mode: 'file',
    tmpdir: path.join(os.tmpdir(), 'egg-multipart-tmp', appInfo.name),
    cleanSchedule: {
      // run tmpdir clean job on every day 04:30 am
      // cron style see https://github.com/eggjs/egg-schedule#cron-style-scheduling
      cron: '0 30 4 * * *',
    },
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
      {
        name: 'Leetcode',
        url: '/category/leetcode',
      },
    ],
  };

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(__dirname, '../', '/favicon.ico')),
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
