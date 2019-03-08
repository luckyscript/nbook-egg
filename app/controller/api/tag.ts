import { Controller } from 'egg';

class TagController extends Controller {
  async getTagList() {
    const { ctx } = this;
    const resultDTO = await ctx.model.Tag.findAll();
    ctx.body = ctx.success(resultDTO);
  }
}

export default TagController;