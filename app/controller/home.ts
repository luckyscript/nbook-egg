import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
  public async test() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('Test Egg');
  }
}
