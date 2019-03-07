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
        [app.Sequelize.Op.like]: `%${title}%`,
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
  /**
   * 新建文章
   */
  public async addArticle() {
    const { ctx } = this;
    const {
      title,
      created,
      slug,
      tags,
      categoryId,
      status,
    } = ctx.request.body;
    const slugCount = await ctx.model.Article.count({
      where: {
        slug,
      },
    });
    if (slugCount) {
      return ctx.body = ctx.fail('slug重复，请修改');
    }
    try {
      const { id: authorId } = ctx.user;
      const aid = await ctx.model.Article.upsert({
        title,
        created,
        slug,
        categoryId,
        status: status ? 'public' : 'private',
        authorId,
      });
      const tagsConfig = tags.map(tag_id => ({
        tag_id,
        aid,
      }));
      await ctx.model.TagConfig.blukCreate(tagsConfig);

      ctx.body = ctx.success('新建成功');
    } catch (e) {
      throw(new Error('新建失败'));
    }
  }
}
export default ArticleApiController;
