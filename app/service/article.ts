import { Service } from 'egg';
import * as _ from 'lodash';
import { Article } from '../../typings/index';
class ArticleService extends Service {
  public async findAllByPage(pageSize, page, where?: any) {
    const { ctx } = this;
    const articleList = await ctx.model.Article.findByPage(pageSize, page, where);
    return articleList;
  }

  public async findAllPublicByPage(pageSize, page) {
    const articleList = await this.findAllByPage(pageSize, page, {
      status: 'public',
    });
    return this.handleArticleList(articleList);
  }

  public handleArticleList(articleList: Article[]): Article[] {
    const { markdown, getBrief } = this.ctx.service.common;
    articleList.forEach(article => {
      article.link = article.slug || `id/${article.aid}`;
      article.text = markdown(getBrief(article.text)).html;
    });
    return articleList;
  }

  public handleArticle(articleRaw) {
    const { getBrief, markdown } = this.ctx.service.common;
    const brief = getBrief(articleRaw.text);
    const { html, toc } = markdown(articleRaw.text);
    articleRaw.text = html;
    articleRaw.toc = toc;
    articleRaw.brief = brief;
    return articleRaw;
  }

  public async findAllByArchive() {
    const { ctx } = this;
    const articleList = await ctx.model.Article.findAll({
      attributes: [ 'title', 'slug', 'created', 'aid' ],
      where: {
        status: 'public',
      },
      order: [
        [ 'created', 'DESC' ],
      ],
    });
    const moment = require('moment');
    articleList.forEach(v => {
      v.link = v.slug || `id/${v.aid}`;
      v.time = moment(v.created).format('MMM Do');
    });
    const archive = _.chain(articleList).groupBy(v => moment(v.created).format('YYYY')).value();
    const result = Object.entries(archive).reduce((result: any[], current) => {
      const [ key, value ] = current;
      const single = {
        key,
        value,
      };
      result.push(single);
      return result;
    }, []);
    return result;
  }
}

export default ArticleService;
