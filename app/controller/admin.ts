import { Controller } from 'egg';

class AdminController extends Controller {
  public async index() {
    const { ctx } = this;
    const publicPath: string = 'http://localhost:8000/';
    await ctx.render('admin.html', {
      publicPath,
    });
  }
}

export default AdminController;
