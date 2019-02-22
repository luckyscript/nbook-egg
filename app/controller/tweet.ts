import { Controller } from 'egg';
import { PageInfo } from '../../typings/index';

class TweetController extends Controller {
  async index() {
    const { ctx } = this;
    const page: number = ctx.params.page || 1;
    const { data, total } = await ctx.service.tweet.getTweet(page);
    if ((!data || !data.length) && page !== 1) {
      this.ctx.redirect('/tweet');
    }
    const pageInfo: PageInfo = {
      currentPage: page,
      totalPage: Math.ceil(total / 10),
    };
    await ctx.render('tweet.html', {
      title: '微博',
      data,
      pageInfo,
    });
  }
}

export default TweetController;
