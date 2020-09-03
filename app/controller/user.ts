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
    const resultDTO = await this.service.user.login(params);
    ctx.body = resultDTO;
  }

  // async logout() {
  //   const { ctx } = this;
  //   const resultDTO = await this.service.user.logout(params);
  //   ctx.body = resultDTO;
  // }
}

export default LoginController;
