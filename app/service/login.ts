import { Service } from 'egg';

class LoginService extends Service {
  async doLogin(params: any) {
    const { ctx } = this;
    const { name, password } = params;
    const userInfo = await ctx.service.user.validateUser(name, password);
    if (userInfo) {
      await ctx.setSession('userInfo', userInfo);
      return ctx.success('登陆成功');
    }
    return ctx.error('用户不存在或密码错误', 1, 'ERROR::User unexist or wrong password');
  }
}

export default LoginService;
