import { Controller } from 'egg';
class TestController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.app.serlina._injectedPayload);
    const rendered = await ctx.app.serlina.render('/test', { ctx, config: ctx.app.config });
    console.log(ctx.app.serlina._injectedPayload);
    ctx.body = rendered.body;
  }
}

export default TestController;
