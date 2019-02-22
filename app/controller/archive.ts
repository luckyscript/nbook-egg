import { Controller } from 'egg';

class ArchiveController extends Controller {
  public async index() {
    const { ctx } = this;
    const archive = await ctx.service.article.findAllByArchive();
    await ctx.render('/archive', {
      title: '归档',
      archive,
    });
  }
}

export default ArchiveController;
