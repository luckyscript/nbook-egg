import { Controller } from 'egg';

class UserController extends Controller {
  async getCurrentUser() {
    const md5 = require('md5');
    const { ctx } = this;
    const userInfo = ctx.user;
    const avatar = `https://secure.gravatar.com/avatar/${md5(userInfo.mail)}?s=100&d=mm&r=g`;
    const notifyCount = 12;
    const unreadCount = 11;
    ctx.body = Object.assign({}, userInfo, {
      avatar,
      notifyCount,
      unreadCount,
    });
  }
}

export default UserController;
