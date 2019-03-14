import { Controller } from 'egg';
import { PageInfo } from '../../typings/index';

export default class HomeController extends Controller {
  /**
   * render action
   */
  public async index() {
    const { ctx } = this;
    const title = '首页';
    // TODO 后面做成配置存在数据库里面，并且缓存到redis里
    const pageSize = 5; // 后面做成配置存到数据库里
    const page: number = ctx.params.page || 1;
    await ctx.renderSome('components/header.ejs', {
      title,
    });

    const articleList = await ctx.fetchData(`articleList#page${page}`,
      () => ctx.service.article.findAllPublicByPage(pageSize, page), 10 * 60 * 1000);

    const totalCount = await ctx.fetchData('totalCount',
      () => ctx.model.Article.count({ where: { status: 'public' } }));

    const pageInfo: PageInfo = {
      totalPage: Math.ceil(totalCount / pageSize),
      currentPage: page,
    };

    const tags = await ctx.fetchData('tags', () => ctx.model.Tag.findAll());

    const friendLinks = await ctx.fetchData('friendLinks', () => ctx.model.Config.getFriendLinks());

    return await ctx.render('index.html', {
      articleList,
      pageInfo,
      pageLink: '',
      tags,
      friendLinks,
    });
  }
}
