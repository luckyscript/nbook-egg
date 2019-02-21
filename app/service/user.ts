import { Service } from 'egg';
import { User } from '../../typings/index';

class UserService extends Service {
  async queryUser(name: string): Promise<User> {
    return await this.ctx.model.User.findByName(name);
  }

  async validateUser(name: string, password: string): Promise<boolean> {
    const user = await this.queryUser(name);
    if (!user || !user.uid) {
      // 用户不存在
      return false;
    }
    const md5 = require('md5');
    const { salt, password: passwordDB } = user;
    const algropass = md5(salt + password + 'nbook^' + salt + '$nbook')
    if (password && algropass === passwordDB) {
      return true;
    }
    return false;
  }

  get userInfo() {
    return (async () => {
      return await this.ctx.get('userInfo');
    })();
  }

}

export default UserService;
