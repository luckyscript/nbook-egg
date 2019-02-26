import { Controller } from 'egg';
class TestController extends Controller {
  async index() {
    try {
      await this.ctx.service.mail.sendContent({
        from: 'luckyscript.me<root@luckyscript.me>',
        to: 'mierhuo@163.com',
        subject: '博客邮件',
        html: '<p>Dont worry, 博客邮件</p>',
      });
      this.ctx.body = '发送陈工';
    } catch (e) {
      console.error(e);
      this.ctx.body = e.message;
    }

  }
}

export default TestController;
