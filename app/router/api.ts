import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // user controller
  router.get('/api/currentUser', controller.api.user.getCurrentUser);

  // article controller
  router.post('/api/article/getArticleList', controller.api.article.getArticleList);

  // category controller
  router.post('/api/category/getCategoryList', controller.api.category.getCategoryList);

  // render controller( only dev)
  router.get('/admin', controller.admin.index);
  router.get('/admin/*', controller.admin.index);
};
