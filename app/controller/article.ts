import { Controller } from 'egg';

class ArticleController extends Controller {
  gtKey = 'nbookCommentKey';
  async index() {
    const { ctx } = this;
    const { slug, id: aid } = ctx.params;
    const where: any = { slug, aid };
    const article = await ctx.model.Article.findByWhere(where);
    if (!article) {
      ctx.status = 404;
      return await ctx.render('404.html', {
        title: 'Not Found',
        message: '您找的文章不见了',
      });
    }
    await ctx.service.article.updateReadNum(article);
    const title = article.title || '文章详情';
    const commentNode = ctx.service.article.generateArticleCommentsNode(article.comments);
    const relativeArticle = ctx.service.article.findAllByPage(5, 1, { categoryId: article.category.id });

    await ctx.render('article.html', {
      article,
      category: article.category,
      commentNode,
      relativeArticle,
      tags: article.tags,
      title,
    });
  }

  async addComment() {
    const { ctx, app } = this;
    const params = ctx.request.body;

    const { geetest_challenge, geetest_validate, geetest_seccode } = ctx.request.body;
    const gtSession = await ctx.getSession(this.gtKey);
    try {
      const gtResult = await app.geetest.twoStepCheck(gtSession, geetest_challenge, geetest_validate, geetest_seccode);
      if (!gtResult) {
        ctx.body = ctx.error('验证失败，请重试');
        return;
      }
    } catch (e) {
      app.logger.error(e);
      ctx.body = ctx.error('验证失败，请重试');
      return;
    }

    const { aid, replys, name, content, email, site } = params;

    const resultDTO = await ctx.service.comment.addComment(params);
    ctx.body = resultDTO;
    try {
      const comment = { content, name, email, site };
      const article = await ctx.model.Article.findByWhere({ aid });
      await ctx.service.mail.sendAdminNewComment('article', comment, article);
      if (replys && replys.length) {
        const replyComments = await ctx.model.Comment.findByIds(replys);
        replyComments.forEach(async comment => {
          await ctx.service.mail.sendCommentReply(comment.email, article, comment, content);
        });
      }
    } catch (e) {
      app.logger.error(e);
    }
  }

  async random() {
    // const {}
  }

  async search() {
    const { ctx, app } = this;
    const keywords = ctx.query.keywords;
    const page = ctx.params.page || 1;
    const pageSize = 15;
    const where = {
      status: 'public',
      title: {
        [app.Sequelize.Op.like]: `%${keywords}%`,
      },
    };
    const articleService = ctx.service.article;
    const articleList = await articleService.findAllByPage(pageSize, page, where);
    await ctx.render('search.html', {
      title: `${keywords}搜索结果`,
      articleList,
    });
  }

  async validate() {
    const { ctx, app } = this;
    const data = await app.geetest.registerPromise();
    await ctx.setSession(this.gtKey, false);
    ctx.body = data;
  }
}

export default ArticleController;
