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
  public async updateReadNum(article) {
    const { ctx } = this;
    const readCookie = ctx.cookies.get('nbook-readlog');
    if (readCookie) {
      const readArray = readCookie.split(',');
      if (!readArray.includes(`${article.aid}`)) {
        await article.incrementReadNum();
        ctx.cookies.set('nbook-readlog', `${readCookie},${article.aid}`);
      } else {
        return;
      }
    } else {
      await article.incrementReadNum();
      ctx.cookies.set('nbook-readlog', `${article.aid}`);
    }
  }
  public async findAllByCategory(name) {
    const { ctx } = this;
    const category = await ctx.model.Category.findByName(name);
    if (category && category.id) {
      const data = await ctx.model.Article.findAllByWhere({
        categoryId: category.id,
      });
      return data;
    } else {
      return [];
    }
  }
  public async findAllByTag(name) {
    const { ctx } = this;
    const tag = await this.ctx.model.Tag.findByName(name);
    console.log(tag)
    if (tag && tag.id) {
      const data = await ctx.model.Article.findAllByTag(tag.id);
      return data;
    } else {
      return [];
    }
  }
}

export default ArticleService;
