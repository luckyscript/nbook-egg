import { Service } from 'egg';
import { Article } from '../types/index';
class HomeService extends Service {

  public handleArticleList(articleList: Array<Article>): Array<Article> {
    const { markdown, getBrief } = this.ctx.service.common;
    articleList.forEach(article => {
      article.link = article.link || `id/${article.aid}`;
      article.text = markdown(getBrief(article.text));
    })
    return articleList;
  }
}

export default HomeService;