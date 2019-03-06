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
}

export default CategoryController;
