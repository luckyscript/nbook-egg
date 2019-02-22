import { Service } from 'egg';
import { Article } from '../../typings/index';
class HomeService extends Service {
  public async findAllByPage(pageSize, page) {
    const { ctx } = this;
    const articleList = await ctx.model.Article.findByPage(pageSize, page);
    const { markdown, getBrief } = this.ctx.service.common;
    articleList.forEach(article => {
      article.link = article.link || `id/${article.aid}`;
      article.text = markdown(getBrief(article.text)).html;
    });
    return articleList;
  }
  public handleArticleList(articleList: Article[]): Article[] {
    const { markdown, getBrief } = this.ctx.service.common;
    articleList.forEach(article => {
      article.link = article.link || `id/${article.aid}`;
      article.text = markdown(getBrief(article.text)).html;
    });
    return articleList;
  }
}

export default HomeService;
