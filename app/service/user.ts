import { Service } from 'egg';
import { User } from '../../typings/index';

class UserService extends Service {
  async login(params: any) {
    const { ctx } = this;
    const { name, password } = params;
    const userInfo = await this.validateUser(name, password);
    if (userInfo) {
      await ctx.setSession('userInfo', userInfo);
      return ctx.success('登陆成功');
    }
    return ctx.error('用户不存在或密码错误', 1, 'ERROR::User unexist or wrong password');
  }

  async queryUser(name: string): Promise<User> {
    return await this.ctx.model.User.findByName(name);
  }

  async validateUser(name: string, password: string): Promise<any> {
    const user = await this.queryUser(name);
    if (!user || !user.uid) {
      // 用户不存在
      return null;
    }
    const md5 = require('md5');
    const { salt, password: passwordDB } = user;
    const algropass = md5(salt + password + 'nbook^' + salt + '$nbook');
    if (password && algropass === passwordDB) {
      const userInfo = {
        id: user.uid,
        name: user.name,
        mail: user.mail,
        url: user.url,
        screenName: user.screenName,
        group: user.group,
      };
      return userInfo;
    }
    return null;
  }

}

export default UserService;
