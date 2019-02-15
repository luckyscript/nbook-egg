import { Service } from 'egg';

class ArticleService extends Service {
  public handleArticle(articleRaw) {
    const { getBrief, markdown } = this.ctx.service.common;
    const brief = getBrief(articleRaw.text);
    const { html, toc } = markdown(articleRaw.text);
    articleRaw.text = html;
    articleRaw.toc = toc;
    articleRaw.brief = brief;
    return articleRaw;
  }
}

export default ArticleService;
