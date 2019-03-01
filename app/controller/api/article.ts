import { Controller } from 'egg';

class ArticleApiController extends Controller {
  /**
   * 获取文章列表
   */
  public async getArticleList () {
    const { ctx } = this;
    const { pageSize = 15, page = 1 } = ctx.request.body;
    const { title, category } = ctx.request.body;
    const where = {
      title,
      category,
    };
    const resultDTO = await ctx.service.article.findAllByPage(pageSize, page, where);
    ctx.body = resultDTO;
  }
  /**
   * 获取文章详情
   */
  public async getArticle() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const where = { aid: id };
    const resultDTO = await ctx.model.Article.findByWhere(where);
    ctx.body = resultDTO;
  }
}
export default ArticleApiController;
