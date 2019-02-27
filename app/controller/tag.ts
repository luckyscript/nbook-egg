import { Controller } from 'egg';

class TagController extends Controller {
  async index() {
    const { ctx } = this;
    const { tag } = ctx.param;
    if (tag) {
      // TODO search all articles in the tag if tag don't exist redirect to tag-all
      await ctx.render('tag.html');
    } else {
      // TODO get all tags
      await ctx.render('tag-all.html');
    }
  }
}

export default TagController;
