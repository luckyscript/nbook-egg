import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const title = '首页';
    const pageSize = 5; // 后面做成配置存到数据库里
    const page: number = ctx.params.page || 1;
    await ctx.renderSome('header.html', {
      title,
    });
    let articleList = await ctx.model.Article.findByPage(pageSize, page);
    articleList = ctx.service.home.handleArticleList(articleList);
    const totalCount = await ctx.model.Article.count();
    await ctx.render('index.html', {
      articleList,
      pageInfo: {
        totalPage: Math.ceil(totalCount / pageSize),
        currentPage: page,
      },
    });
  }

  public async test() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('Test Egg');
  }
}
