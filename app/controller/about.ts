import { Controller } from 'egg';

class AboutController extends Controller {
  gtKey = 'aboutcomment';
  async index() {
    const { ctx } = this;
    const about = await ctx.model.Article.findByWhere({
      slug: 'about',
    });
    const comments = await ctx.model.Comment.findAll({ where: { type: 'about' } }) || [];
    const commentNode = ctx.service.article.generateArticleCommentsNode(comments);
    await ctx.render('about.html', {
      title: 'About',
      about,
      commentNode,
    });
  }
  async addComment() {
    const { ctx, app } = this;
    const params = ctx.request.body;

    const { geetest_challenge, geetest_validate, geetest_seccode } = ctx.request.body;
    const gtSession = await ctx.getSession(this.gtKey);
    try {
      const gtResult = await ctx.service.geetest.twoStepCheck(gtSession, geetest_challenge, geetest_validate, geetest_seccode);
      if (!gtResult) {
        ctx.body = ctx.error('验证失败，请重试');
        return;
      }
    } catch (e) {
      app.logger.error(e);
      ctx.body = ctx.error('验证失败，请重试');
      return;
    }

    const { content, email, site } = params;

    const resultDTO = await ctx.service.comment.addComment(params);
    ctx.body = resultDTO;
    try {
      const comment = { content, name, email, site };
      await ctx.service.mail.sendAdminNewComment('about', comment);
    } catch (e) {
      app.logger.error(e);
    }
  }

  async validate() {
    const { ctx } = this;
    const data = await ctx.service.geetest.register();
    await ctx.setSession(this.gtKey, false);
    ctx.body = data;
  }
}

export default AboutController;
