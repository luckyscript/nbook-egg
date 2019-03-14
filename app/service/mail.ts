import { Service } from 'egg';
import { MailData } from '../../typings/index';

class MailService extends Service {
  /**
   * 发邮件
   * @param { MailData } data
   */
  async sendContent(data: MailData) {
    const nodemailer = require('nodemailer');
    const smtpTransport = require('nodemailer-smtp-transport');
    const { config } = this;
    if (!data.to) {
      return;
    }
    const transporter = nodemailer.createTransport(smtpTransport(config.mail_opts));
    // 借鉴cnode的retry方式
    for (let i = 1; i < 6; i++) {
      try {
        await transporter.sendMail(data);
        break;
      } catch (e) {
        throw new Error(e);
      }
    }
  }
  /**
   * 评论回复邮件
   */
  async sendCommentReply(who, article, comment, reply) {
    const { config } = this;
    const from = `Luckyscript's Blog<${config.mail_opts.auth.user}>`;
    const to = who;
    const subject = "Luckyscript's Blog上，您的留言有新的回复";
    const html = `
      <p>您好！</p>
      <p>您在我的博客（${config.site || 'https://www.luckyscript.me'}）上的留言有了新的回复</p>
      <p>留言的文章是: <a href="${config.site || 'https://www.luckyscript.me'}/article/${article.slug || 'id/' + article.aid}">${article.title}</a></p>
      <p>您在${comment.created} 留下了: </p>
      <p>${comment.content}</p>
      <p>收到了一条回复:</p>
      <p>${reply}</p>
      <p>若您没有在我博客上留言过，说明有人滥用了您的电子邮箱，请删除此邮件，我对给您造成的打扰感到抱歉。也欢迎您能够造访我的博客</p>
      <p>ps: 博客留言过滤机制可能不是很成熟，如果该评论违反相关法律法规，不代表博主本人观点，我也愿意配合相关部门对这些评论进行删除</p>
    `;
    await this.sendContent({ from, to, subject, html });
  }
  /**
   * 发给自己的
   * @param type 留言类型 目前有 article、about
   * @param article article detail
   * @param comment comment detail
   * @param who send to who? default to me
   */
  async sendAdminNewComment(type: string, comment, article?: any, who?: string) {
    const { config } = this;
    const from = `Luckyscript's Blog<${config.mail_opts.auth.user}>`;
    const to = who || config.adminInfo.mail;
    let subject, html;
    switch (type) {
      case 'article':
        subject = `博客文章:${article.title}有新的留言啦`;
        html = `
          <p>${config.adminInfo.name}！博客有用户留言啦，快去查看吧！</p>
          <p>${comment.name || '有人'}在文章${article.title}下留言: ${comment.content}</p>
          <p>快速访问点击 ${config.site || 'https://www.luckyscript.me'}/article/id/${article.aid}</p>
        `;
        break;
      default:
        subject = `博客页面: ${type}页有新的留言啦`;
        html = `
        <p>${config.adminInfo.name}！博客有用户留言啦，快去查看吧！</p>
        <p>${comment.name || '有人'}在网页下留言: ${comment.content}</p>
      `;
    }
    await this.sendContent({ from, to, subject, html });
  }
}

export default MailService;
