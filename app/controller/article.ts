import { Controller } from 'egg';

class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const { slug, id: aid } = ctx.params;
    const where: any = { slug, aid, status: 'public' };
    const articleRaw = await ctx.model.Article.findByWhere(where);
    if (!articleRaw) {
      ctx.status = 404;
      return await ctx.render('404.html', {
        title: 'Not Found',
        message: '您找的文章不见了',
      });
    }
    const article = ctx.service.article.handleArticle(articleRaw);
    const commentNode = ctx.service.article.generateArticleCommentsNode(article.comments);
    await ctx.render('article.html', {
      article,
      category: article.category,
      commentNode,
      tags: article.tags,
      title: article.title || '文章详情',
    });
  }
  async random() {
    // const {}
  }
  async search() {
    const { ctx } = this;
    const keyword = ctx.query.keyword;
    const page = ctx.params.page || 1;
    const pageSize = 15;
    const where = {
      status: 'public',
      title: [ 'LIKE', keyword ],
    };
    const articleService = ctx.service.article;
    const articleListRaw = await articleService.findAllByPage(pageSize, page, where);
    const articleList = articleService.handleArticleList(articleListRaw);
    await ctx.render('search.html', {
      title: `${keyword}搜索结果`,
      articleList,
    });
  }
}

export default ArticleController;
