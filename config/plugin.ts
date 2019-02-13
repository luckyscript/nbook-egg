import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
};

export default plugin;
