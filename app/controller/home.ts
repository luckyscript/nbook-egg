import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const title = '首页';
    // let page:number = ctx.params.page || 1;
    await ctx.renderSome('header.html', {
      title,
    });
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async test() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('Test Egg');
  }
}
