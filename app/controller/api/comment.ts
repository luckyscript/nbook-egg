import { Controller } from 'egg';

class CommentController extends Controller {
  public async getCommentList() {
    const { ctx } = this;
    const { pageSize = 15, currentPage = 1 } = ctx.request.body;
    const resultDTO = await ctx.service.comment.findByPageInfo({ pageSize, currentPage });
    const totalSize = await ctx.model.Comment.count();
    const pageInfo = { pageSize, currentPage, totalSize };
    ctx.body = ctx.page(resultDTO, pageInfo);
  }

  public async deleteComment() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    await ctx.model.Comment.destroy({
      where: { id },
    });
    await ctx.model.Comment.destroy({
      where: { pid: id },
    });
    ctx.body = ctx.success('删除成功');
  }

  public updateComment() {

  }

  public async replyComment() {

  }

}

export default CommentController;
