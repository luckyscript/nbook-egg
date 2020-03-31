import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // redis: {
  //   enable: true,
  //   package: 'egg-redis',
  // },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  session: {
    enable: true,
    package: 'egg-session',
  },
  geetest: {
    enable: true,
    package: 'egg-geetest',
  },
};

export default plugin;
