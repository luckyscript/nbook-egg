import { Service } from 'egg';

class CategoryService extends Service {
  async findAllCategorys() {
    const { ctx } = this;
    const categorys = await ctx.model.Category.findAll();
    return categorys;
  }

  async findCategoryTree() {
    const categorys = await this.findAllCategorys();
    const tree = categorys.filter(v => !v.pid);
    tree.forEach(v => {
      v.children = categorys.filter(c => v.id === c.pid);
    });
    return tree;
  }
}

export default CategoryService;
