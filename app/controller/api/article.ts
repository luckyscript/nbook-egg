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
  public async getArticleDetail() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const where = { aid: id };
    const resultDTO = await ctx.model.Article.findByWhere(where);
    console.log(resultDTO);
    ctx.body = ctx.success(resultDTO);
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
      text,
    } = ctx.request.body;
    if (!slug) {
      ctx.status = 400;
      return ctx.body = ctx.error('slug必填');
    }
    const slugCount = await ctx.model.Article.count({
      where: {
        slug,
      },
    });
    if (slugCount) {
      ctx.status = 400;
      return ctx.body = ctx.error('slug重复，请修改');
    }
    try {
      const { id: authorId } = ctx.user;
      const moment = require('moment');
      const modified = moment().format('YYYY-MM-DD HH:mm:ss');
      const aid = await ctx.model.Article.upsert({
        title,
        created,
        modified,
        slug,
        categoryId,
        status: status ? 'public' : 'private',
        authorId,
        text,
      });
      if (tags && tags.length) {
        const tagsConfig = tags.map(tag_id => ({
          tag_id,
          aid,
        }));
        await ctx.model.TagConfig.bulkCreate(tagsConfig);
      }
      ctx.body = ctx.success('新建成功');
    } catch (e) {
      console.error(e);
      throw(new Error('新建失败'));
    }
  }

  public async deleteArticle() {
    const { ctx } = this;
    const { id: aid } = ctx.request.body;
    await ctx.model.Article.destroy({
      where: {
        aid,
      },
     });
    ctx.body = ctx.success('删除成功');
  }

  public async modifyArticle() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const {
      id: aid,
      title,
      created,
      slug,
      tags,
      categoryId,
      status,
      text,
    } = ctx.request.body;
    if (!slug) {
      ctx.status = 400;
      return ctx.body = ctx.error('slug必填');
    }
    const slugCount = await ctx.model.Article.count({
      where: {
        slug,
        aid: { [Op.ne]: aid },
      },
    });
    if (slugCount) {
      ctx.status = 400;
      return ctx.body = ctx.error('slug重复，请修改');
    }
    try {
      const { id: authorId } = ctx.user;
      const moment = require('moment');
      const modified = moment().format('YYYY-MM-DD HH:mm:ss');
      await ctx.model.Article.upsert({
        aid,
        title,
        created,
        modified,
        slug,
        categoryId,
        status: status ? 'public' : 'private',
        authorId,
        text,
      });
      if (tags && tags.length) {
        const tagsConfig = tags.map(tag_id => ({
          tag_id,
          aid,
        }));
        await ctx.model.TagConfig.destroy({ where: { aid } });
        await ctx.model.TagConfig.bulkCreate(tagsConfig);
      }
      ctx.body = ctx.success('修改成功');
    } catch (e) {
      app.logger.error(e);
      throw(e);
    }
  }
}
export default ArticleApiController;
