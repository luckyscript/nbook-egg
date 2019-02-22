import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;
  const routerControl = middleware.routerControl();

  // index page
  router.get('/', controller.home.index);
  router.get('/page/:page', routerControl, controller.home.index);

  // article page
  router.get('/article/id/:id', controller.article.index);
  router.get('/article/:slug', controller.article.index);

  router.get('/archive', controller.archive.index);

  // link page
  router.get('/link', controller.link.index);
  router.get('/link/add', controller.link.add);
  router.get('/link/to/:uuid', controller.link.to);
  router.post('/link/submit', controller.link.submit);
  router.get('/link/validate', controller.link.validate);

  // login api
  router.post('/login', controller.login.login);

  router.get('/test', controller.test.index);
  router.get('/admin/*', controller.admin.index);
};
