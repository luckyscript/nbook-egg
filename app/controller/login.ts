import { Controller } from 'egg';

class LoginController extends Controller {
  /**
   * login view page
   */
  async index() {
    const { ctx } = this;
    ctx.render('login.html');
  }
  /**
   * login verify action
   */
  async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const resultDTO = await this.service.login.doLogin(params);
    ctx.body = resultDTO;
  }
}

export default LoginController;
