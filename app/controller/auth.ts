import { Controller } from 'egg';

class AuthController extends Controller {
  githubAuthUrl = 'https://github.com/login/oauth/authorize?client_id=3dca19e930f2ed5501f9';

  async githubLogin() {
    const { ctx } = this;
    const url = this.githubAuthUrl;
    ctx.redirect(url);
  }

  async githubAuth() {
    const { ctx } = this;
    const { code, redirectUrl } = ctx.query;
    const params = { code };
    await this.service.auth.githubAuth(params);
    if (redirectUrl) {
      ctx.redirect(redirectUrl);
    } else {
      ctx.redirect('/');
    }
  }
}

export default AuthController;
