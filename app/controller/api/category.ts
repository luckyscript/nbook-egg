import { Controller } from 'egg';

class CategoryController extends Controller {
  async getCategoryList() {
    const { ctx } = this;
    const resultDTO = await ctx.service.category.findAllCategorys();
    return ctx.body = ctx.success(resultDTO);
  }

  async getCategoryTree() {
    const { ctx } = this;
    const resultDTO = await ctx.service.category.findCategoryTree();
    return ctx.body = ctx.success(resultDTO);
  }

  async addCategory() {
    const { ctx } = this;
    const { pid, name } = ctx.request.body;
    const moment = require('moment');
    const created = moment().format('YYYY-MM-DD HH:mm:ss');
    await ctx.model.Category.upsert({
      pid,
      name,
      created,
    });
    ctx.body = ctx.success('创建成功');
  }

  async deleteCategory() {
    const { ctx } = this;
    const { id: categoryId } = ctx.request.body;
    const articleCount = await ctx.model.Article.count({ categoryId });
    if (articleCount) {
      return ctx.body = ctx.fail('分类下存在文章，不可删除');
    }
    await ctx.model.Article.destroy({ categoryId });
    return ctx.body = ctx.success('删除成功');
  }

  async modifyCategory() {
    const { ctx } = this;
    const { id, pid, name } = ctx.request.body;
    const moment = require('moment');
    const created = moment().format('YYYY-MM-DD HH:mm:ss');
    await ctx.model.Category.upsert({
      id,
      pid,
      name,
      created,
    });
    ctx.body = ctx.success('创建成功');
  }

}

export default CategoryController;
