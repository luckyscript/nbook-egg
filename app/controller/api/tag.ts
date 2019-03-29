import { Controller } from 'egg';

class TagController extends Controller {
  async getTagList() {
    const { ctx } = this;
    const resultDTO = await ctx.model.Tag.findAll();
    ctx.body = ctx.success(resultDTO);
  }

  async addTag() {
    const { ctx } = this;
    const { id, name } = ctx.request.body;
    await ctx.model.Tag.upsert({
      id,
      name,
    });
    ctx.body = ctx.success('创建成功');
  }
}

export default TagController;
