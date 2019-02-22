import { Controller } from 'egg';

class ArticleApiController extends Controller {
  public async getArticleList () {
    const { ctx } = this;
    const { pageSize = 15, page = 1 } = ctx.request.body;
    const resultDTO = await ctx.service.article.findAllByPage(pageSize, page);
    ctx.body = resultDTO;
  }
  public async getArticle() {
    // const { ctx } = this;
    // const id = ctx.request.body;
    // const resultDTO = await ctx.service.article.find
  }
}
export default ArticleApiController;
