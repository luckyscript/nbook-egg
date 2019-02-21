import { Service } from 'egg';

class LoginService extends Service {
  async doLogin(params: any) {
    // TODO
    const { ctx } = this;
    const { name, password } = params;
    const validate = await ctx.service.user.validateUser(name, password);
    if (validate) {
      return ctx.success('登陆成功');
    }
    return ctx.error('用户不存在或密码错误', 'ERROR::User unexist or wrong password');
  }
}

export default LoginService;
