import { Controller } from 'egg';

class CommentController extends Controller {
  public async getCommentList() {    
    const { ctx } = this;
    const { pageSize = 15, currentPage = 1 } = ctx.request.body;
    const resultDTO = await ctx.model.Comment.findByPageInfo({ pageSize, currentPage });
    const totalSize = await ctx.model.Comment.count();
    const pageInfo = { pageSize, currentPage, totalSize };
    ctx.body = ctx.page(resultDTO, pageInfo);
  }
  
  public deleteComment() {

  }
  
  public updateComment() {

  }

  public async replyComment() {

  }


}

export default CommentController;
