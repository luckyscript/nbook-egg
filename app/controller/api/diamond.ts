import { Controller } from 'egg';

class DiamondController extends Controller {
  async get() {
    const { ctx } = this;
    const { key = '' } = ctx.request.body;
    const data = await this.service.diamond.get(key);
    ctx.body = ctx.success(data);
  }

  async set() {
    const { ctx } = this;
    const { key = '', value = '{}' } = ctx.request.body;
    try {
      await this.service.diamond.set(key, value);
      ctx.body = ctx.success('success');
    } catch (err) {
      ctx.body = ctx.error('set diamond fail', 500, err);
    }
  }
}

export default DiamondController;
