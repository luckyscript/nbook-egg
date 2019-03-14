import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;

  // index page
  router.get('/', controller.home.index);
  router.get('/page/:page', middleware.routerControl({ path: '/' }), controller.home.index);

  // article page
  router.get('/article', controller.home.index);
  router.get('/article/id/:id', controller.article.index);
  router.get('/article/:slug', controller.article.index);
  router.get('/random/article', controller.article.random);
  router.get('/search', controller.article.search);
  router.post('/article/comment', controller.article.addComment);

  // archive page
  router.get('/archive', controller.archive.index);

  // link page
  router.get('/link', controller.link.index);
  router.get('/link/page/:page', middleware.routerControl({ path: '/link' }), controller.link.index);
  router.get('/link/add', controller.link.add);
  router.get('/link/to/:uuid', controller.link.to);
  router.post('/link/submit', controller.link.submit);
  router.get('/link/validate', controller.link.validate);

  // tweet page
  router.get('/tweet', controller.tweet.index);
  router.get('/tweet/page/:page', middleware.routerControl({ path: '/tweet' }), controller.tweet.index);

  // about page
  router.get('/about', controller.about.index);

  // user api
  router.post('/login', controller.user.login);
//   router.post('/register', controller.user.register);

  router.get('/test', controller.test.index);
};
