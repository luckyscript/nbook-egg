import { Controller } from 'egg';
import { PageInfo } from '../../typings/index';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const title = '首页';
    const pageSize = 5; // 后面做成配置存到数据库里
    const page: number = ctx.params.page || 1;
    await ctx.renderSome('components/header.ejs', {
      title,
    });

    const articleList = await ctx.service.article.findAllPublicByPage(pageSize, page);

    const totalCount = await ctx.model.Article.count({
      where: {
        status: 'public',
      },
    });
    const pageInfo: PageInfo = {
      totalPage: Math.ceil(totalCount / pageSize),
      currentPage: page,
    };
    await ctx.render('index.html', {
      articleList,
      pageInfo,
    });
  }

  public async test() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('Test Egg');
  }
}
