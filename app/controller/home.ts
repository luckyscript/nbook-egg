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

    let articleList = await ctx.cache(`articleList#page${page}`);
    if (!articleList || !articleList.length) {
      articleList = await ctx.service.article.findAllPublicByPage(pageSize, page);
      await ctx.cache(`articleList#page${page}`, articleList);
    }
    articleList = await ctx.service.article.handleArticleList(articleList);
    let totalCount = await ctx.cache('totalCount');
    if (!totalCount) {
      totalCount = await ctx.model.Article.count({
        where: {
          status: 'public',
        },
      });
      await ctx.cache('totalCount', totalCount);
    }

    const pageInfo: PageInfo = {
      totalPage: Math.ceil(totalCount / pageSize),
      currentPage: page,
    };

    return await ctx.render('index.html', {
      articleList,
      pageInfo,
    });
  }
}
