import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // user controller
  router.get('/api/currentUser', controller.api.user.getCurrentUser);

  // article controller
  router.post('/api/article/getArticleList', controller.api.article.getArticleList);
  router.post('/api/article/getArticleDetail', controller.api.article.getArticleDetail);
  router.post('/api/article/addArticle', controller.api.article.addArticle);
  router.post('/api/article/deleteArticle', controller.api.article.deleteArticle);
  router.post('/api/article/modifyArticle', controller.api.article.modifyArticle);

  // category controller
  router.post('/api/category/getCategoryList', controller.api.category.getCategoryList);
  router.post('/api/category/getCategoryTree', controller.api.category.getCategoryTree);

  // tag controller
  router.post('/api/tag/getTagList', controller.api.tag.getTagList);

  // common controller
  // upload files
  router.post('/api/upload', controller.api.common.upload);

  // render controller( only dev)
  router.get('/admin', controller.admin.index);
  router.get('/admin/*', controller.admin.index);
};
