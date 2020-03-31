import { Controller } from 'egg';

class TagController extends Controller {
  async index() {
    const { ctx } = this;
    const { name } = ctx.params;
    if (name) {
      const articleList = await ctx.service.article.findAllByTag(name);
      await ctx.render('category.html', {
        title: '标签',
        articleList,
      });
    } else {
      // TODO get all tags
      await ctx.render('tag-all.html');
    }
  }
}

export default TagController;
