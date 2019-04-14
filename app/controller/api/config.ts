import { Controller } from 'egg';

class ConfigController extends Controller {
  public async getFriendLinks() {
    const { ctx } = this;
    const resultDTO = await ctx.model.Config.getFriendLinks();
    ctx.body = ctx.success(resultDTO);
  }
  public async setFriendLinks() {}
  public async getFootDesc() {}
  public async setFootDesc() {}
}

export default ConfigController;
