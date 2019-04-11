import { Service } from 'egg';
class CommentService extends Service {

  public async findByPageInfo(pageInfo) {
    const { pageSize, currentPage } = pageInfo;
    const { ctx } = this;
    const commentList = await ctx.model.Comment.findByPage(pageSize, currentPage);
    return commentList;
  }

  /**
   * 生成树结构的评论
   * @param {Array}comments
   */
  generateCommentTree(comments) {
    // 根节点
    const root = comments.filter(v => !v.pid);
    const childs = comments.filter(v => v.pid);
    const groups = childs.reduce((groups, current) => {
      if (!groups[current.pid]) {
        groups[current.pid] = [];
      }
      groups[current.pid].push(current);
      return groups;
    }, {});
    const traverseTree = (arr, groups) => {
      arr.forEach(v => {
        v.children = groups[v.id] || [];
        traverseTree(v.children, groups);
      });
      return arr;
    };
    return traverseTree(root, groups);
  }

  generateCommentNode(tree) {
    const md5 = require('md5');
    return tree.reduce((result, current) => {
      result += `
      <li class="comment-item">
        <div class="avatar">
            <img src="https://secure.gravatar.com/avatar/${md5(current.email)}?s=100&d=mm&r=g">
        </div>
      <div class="comment-detail">
          <p class="comment-title">
              <a href="${current.site}" target="_blank" nofollow>${current.name}</a>
              <time>${current.created}</time>
              <a href="javascript:reply(${current.id}, '${current.name}', '${current.email}')">回复</a>
          </p>
          <p class="comment-meta">
          ${current.content}</p>
      </div>
      `;
      if (current.children && current.children.length) {
        result += `
          <ul class="child-node">
            ${this.generateCommentNode(current.children)}
          </ul>
        `;
      }
      return result;
    }, '');
  }

  public async addComment(params) {
    const { ctx } = this;
    const { pid, aid: identity, type } = params;
    const xssFilter = require('xss');
    const xFilter = require('@luckylab/x-filter');
    let { content, name, email, site } = params;
    email = xssFilter(email);
    site = xssFilter(site);
    name = xssFilter(name);
    content = xFilter(content);

    const moment = require('moment');
    const created = moment().format('YYYY-MM-DD HH:mm:ss');

    await ctx.model.Comment.upsert({
      identity: identity || null,
      pid: pid || null,
      content,
      name,
      email,
      site,
      created,
      type: type || 'article',
    });
    return ctx.success('评论成功');
  }
}

export default CommentService;
