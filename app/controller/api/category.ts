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
