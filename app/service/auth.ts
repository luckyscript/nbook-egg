import { Service } from 'egg';

class AuthService extends Service {
  githubClientId = '3dca19e930f2ed5501f9';
  githubClientSecret = 'ab6726827cdc3b635bb6d32cb4af74cf88d38de7';

  async queryAccessToken(params) {
    const { ctx } = this;
    return ctx.remote({
      uri: 'https://github.com/login/oauth/access_token',
      qs: params,
    });
  }

  async queryUserInfo(params) {
    const { ctx } = this;
    return ctx.remote({
      uri: `https://api.github.com/user?${params}`,
      headers: {
        'User-Agent': 'luckyscript',
      },
    });
  }

  async githubAuth(params) {
    const { ctx } = this;
    const { code } = params;
    const accessParams = {
      code,
      client_id: this.githubClientId,
      client_secret: this.githubClientSecret,
    };
    const access_token = await this.queryAccessToken(accessParams);
    const githubUserInfo = await this.queryUserInfo(access_token);
    await ctx.setSession('githubUserInfo', githubUserInfo);
  }
}

export default AuthService;
