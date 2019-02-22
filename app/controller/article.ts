import { Controller } from 'egg';

class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const { slug, id: aid } = ctx.params;
    const where: any = { slug, aid, status: 'public' };
    const articleRaw = await ctx.model.Article.findByWhere(where);
    console.log(articleRaw);
    if (!articleRaw) {
      ctx.status = 404;
      return await ctx.render('404.html', {
        title: 'Not Found',
        message: '您找的文章不见了',
      });
    }
    const article = ctx.service.article.handleArticle(articleRaw);
    await ctx.render('article.html', {
      article,
      category: [],
      tags: [],
      title: article.title || '文章详情',
    });
  }
  async random() {
    // const {}
  }
}

export default ArticleController;
