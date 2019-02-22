import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('/api/article/getArticleList', controller.api.article.getArticleList);
  router.get('/admin/*', controller.admin.index);
};
