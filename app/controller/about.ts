import { Controller } from 'egg';

class AboutController extends Controller {
  async index() {
    const { ctx } = this;
    const comments = await ctx.model.Comment.findAll({ where: { type: 'about' } }) || [];
    const commentNode = ctx.service.article.generateArticleCommentsNode(comments);
    await ctx.render('about.html', {
      title: 'About',
      commentNode,
    });
  }
  async addComment() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { content, email, site } = params;

    const resultDTO = await ctx.service.comment.addComment(params);
    ctx.body = resultDTO;

    const comment = { content, name, email, site };
    await ctx.service.mail.sendAdminNewComment('about', comment);
  }
}

export default AboutController;
