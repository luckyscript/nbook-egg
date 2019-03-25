import { Service } from 'egg';
import * as _ from 'lodash';
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
    return articleList;
  }

  public generateArticleCommentsNode(comments) {
    const { ctx } = this;
    const tree = ctx.service.comment.generateCommentTree(comments);
    return ctx.service.comment.generateCommentNode(tree);
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
    const archive = _.chain(articleList).groupBy(v => moment(v.created).format('YYYY')).value();
    const result = Object.entries(archive).reduce((result: any[], current) => {
      const [ key, value ] = current;
      const single = {
        key,
        value,
      };
      result.unshift(single);
      return result;
    }, []);
    return result;
  }
  public async updateReadNum() {
  }
}

export default ArticleService;
