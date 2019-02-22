import { Controller } from 'egg';
class TestController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.getSession('userInfo');
  }
}

export default TestController;
