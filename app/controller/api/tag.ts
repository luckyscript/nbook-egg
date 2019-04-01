import { Controller } from 'egg';

class TagController extends Controller {
  async getTagList() {
    const { ctx } = this;
    const resultDTO = await ctx.model.Tag.findAll();
    ctx.body = ctx.success(resultDTO);
  }

  async addTag() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    await ctx.model.Tag.upsert({
      name,
    });
    ctx.body = ctx.success('创建成功');
  }

  async modifyTag() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    await ctx.model.Tag.upsert({
      name,
    });
    ctx.body = ctx.success('创建成功');
  }

  async deleteTag() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    await ctx.model.Tag.destory({ id });
    await ctx.model.TagConfig.destory({ id });
    ctx.body = ctx.success('删除成功');
  }
}

export default TagController;
