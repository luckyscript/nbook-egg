import { Service } from 'egg';
import { User } from '../../typings/index';

class UserService extends Service {
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

  get userInfo() {
    return (async () => {
      return await this.ctx.get('userInfo');
    })();
  }

}

export default UserService;
