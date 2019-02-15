import { Controller } from 'egg';

class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const { slug, id: aid } = ctx.params;
    let where:any = { slug, aid };
    const articleRaw = await ctx.model.Article.findByWhere(where);
    const article = ctx.service.article.handleArticle(articleRaw);
    await ctx.render('article.html', {
      article,
      category: [],
      tags: [],
      title: article.title || '文章详情',
    });
  }
};

export default ArticleController;