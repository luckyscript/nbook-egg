import { Application } from 'egg';


export default (app: Application) => {
  const { controller, router, middleware } = app;
  const routerControl = middleware.routerControl();

  // index page
  router.get('/', controller.home.index);
  router.get('/page/:page', routerControl, controller.home.index);

  router.get('/test', controller.home.test);
  router.get('/admin/*', controller.admin.index);
};
