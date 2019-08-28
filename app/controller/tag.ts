import { Controller } from 'egg';

class TagController extends Controller {
  async index() {
    const { ctx } = this;
    const { tag } = ctx.param;
    if (tag) {

      await ctx.render('tag.html');
    } else {
      // TODO get all tags
      await ctx.render('tag-all.html');
    }
  }
}

export default TagController;
