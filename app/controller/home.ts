import { Controller } from 'egg';

export default class HomeController extends Controller {
  /**
   * render action
   */
  title = '首页';

  public async index() {
    const { ctx } = this;
    const title = this.title;
    const rendered = await ctx.app.serlina.render('home', {
      title,
    });
    ctx.body = rendered.body;
  }
}
