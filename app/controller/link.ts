import { Controller } from 'egg';
import { PageInfo } from '../../typings/index';

class LinkController extends Controller {
  gtKey = 'linkgt';
  async index() {
    // get list of links
    const { ctx } = this;
    const page = ctx.params.page || 1;
    const pageSize = 15;
    const linksData = await ctx.model.Link.findByPage(page, pageSize);
    const moment = require('moment');
    linksData.forEach(v => {
      v.date = moment(v.date).format('YYYY-MM-DD');
    });
    const pageInfo: PageInfo = {
      totalPage: Math.ceil(15 / 15),
      currentPage: 1,
    };
    await ctx.render('link.html', {
      title: '链接',
      links: {
        data: linksData,
        pageInfo,
      },
    });
  }

  async add() {
    const { ctx } = this;
    const categorys = await ctx.model.Category.findAll();
    await ctx.render('link-add.html', {
      title: '贡献链接',
      categorys,
    });
  }

  async validate() {
    const { ctx } = this;
    const data = await ctx.service.geetest.register();
    await ctx.setSession(this.gtKey, false);
    ctx.body = data;
  }

  async submit() {
    const { ctx } = this;
    const { geetest_challenge, geetest_validate, geetest_seccode } = ctx.request.body;
    const gtSession = await ctx.getSession(this.gtKey);
    try {
      const gtResult = await ctx.service.geetest.twoStepCheck(gtSession, geetest_challenge, geetest_validate, geetest_seccode);
      if (!gtResult) {
        ctx.body = ctx.error('验证失败，请重试');
        return;
      }
    } catch (e) {
      console.error(e);
      ctx.body = ctx.error('验证出错，请重试');
      return;
    }
    // const { url, title, category } = ctx.body;
    // const moment = require('moment');
    // const date = moment().format('YYYY-MM-DD HH:mm:ss');
    // const uuidV4 = require('uuid/v4');
    // const uuid = uuidV4().substring(0, 8);
    // let show = 0;
    // if (ctx.user && ctx.user.name) {
    //   show = 1;
    // }
    // let row = await this.model('links').add({
    //   date,
    //   name: title,
    //   url: url,
    //   categoryId: category,
    //   uuid,
    //   show,
    // });
    ctx.body = ctx.success('提交成功');

  }
  async to() {
    const { ctx } = this;
    const uuid = ctx.params.uuid;
    if (!uuid) {
      ctx.redirect('/link');
    }
    const link = await ctx.model.Link.findByUUID(uuid);
    if (!link || !link.id) {
      ctx.redirect('/link');
    }
    const url = link.url;
    await link.incrementReadNum();
    ctx.redirect(url);
  }
}

export default LinkController;
