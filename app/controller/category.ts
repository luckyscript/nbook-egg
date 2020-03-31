import { Controller } from 'egg';

class ArchiveController extends Controller {
  public async index() {
    const { ctx } = this;
    const { name } = ctx.params;
    const articleList = await ctx.service.article.findAllByCategory(name);
    await ctx.render('category.html', {
      title: '专题',
      articleList,
    });
  }
}

export default ArchiveController;
