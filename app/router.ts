import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/admin/*', controller.admin.index);
};
