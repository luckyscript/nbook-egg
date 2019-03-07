import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // user controller
  router.get('/api/currentUser', controller.api.user.getCurrentUser);

  // article controller
  router.post('/api/article/getArticleList', controller.api.article.getArticleList);
  router.post('/api/article/addArticle', controller.api.article.addArticle);

  // category controller
  router.post('/api/category/getCategoryList', controller.api.category.getCategoryList);
  router.post('/api/category/getCategoryTree', controller.api.category.getCategoryTree);

  // render controller( only dev)
  router.get('/admin', controller.admin.index);
  router.get('/admin/*', controller.admin.index);
};
