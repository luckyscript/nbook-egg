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
    const from = `Luckyscript's Blog<${config.mail_opts.user}>`;
    const to = who;
    const subject = "Luckyscript's Blog上，您的留言有新的回复";
    const html = `
      <p>您好！</p>
      <p>您在我的博客（https://www.luckyscript.me）上的留言有了新的回复</p>
      <p>留言的文章标题是${article.title}</p>
      <p>您留下了${comment.content}的留言</p>
      <p>收到了一条回复:</p>
      <p>${reply}</p>
      <p>若您没有在我博客上留言过，说明有人滥用了您的电子邮箱，请删除此邮件，我对给您造成的打扰感到抱歉。也欢迎您能够造访我的博客，我的博客是关于编程的一点积累，也有自己生活的一些体验。</p>
      <p>ps: 博客留言过滤机制可能不是很成熟，如果该评论违反相关法律法规，不代表博主本人观点，我也愿意配合相关部门对这些评论进行删除</p>
    `;
    await this.sendContent({ from, to, subject, html });
  }
  async sendNewComment(who, article, content) {
    const { config } = this;
    const from = `Luckyscript's Blog<${config.mail_opts.user}>`;
    const to = who;
    const subject = "Luckyscript's Blog上，您的留言有新的回复";
    const html = `
      <p>您好！</p>
      <p>您在我的博客（https://www.luckyscript.me）上的留言有了新的回复</p>
      <p>留言的文章标题是${article.title}</p>
      <p>您留下了${content}的留言</p>
      <p>若您没有在我博客上留言过，说明有人滥用了您的电子邮箱，请删除此邮件，我对给您造成的打扰感到抱歉。也欢迎您能够造访我的博客，我的博客是关于编程的一点积累，也有自己生活的一些体验。</p>
      <p>ps: 博客留言过滤机制可能不是很成熟，如果该评论违反相关法律法规，不代表博主本人观点，我也愿意配合相关部门对这些评论进行删除</p>
    `;
    await this.sendContent({ from, to, subject, html });
  }
}

export default MailService;
