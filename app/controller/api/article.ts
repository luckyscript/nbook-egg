import { Controller } from 'egg';

class ArticleApiController extends Controller {
  /**
   * 获取文章列表
   */
  public async getArticleList () {
    const { ctx, app } = this;
    const { pageSize = 15, currentPage = 1 } = ctx.request.body;
    const { title, category } = ctx.request.body;
    const where: any = {};
    if (title) {
      where.title = {
        [app.Sequelize.Op.like]: `%${title}%`
      };
    }
    if (category) {
      where.categoryId = category;
    }
    const resultDTO = await ctx.service.article.findAllByPage(pageSize, currentPage, where);
    const totalSize = await ctx.model.Article.count({ where });
    const pageInfo = { pageSize, currentPage, totalSize };
    ctx.body = ctx.page(resultDTO, pageInfo);
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
