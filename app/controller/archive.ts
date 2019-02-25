import { Controller } from 'egg';

class ArchiveController extends Controller {
  public async index() {
    const { ctx } = this;
    // let articleList = await ctx.model.Article.findAll({
    //   where: {
    //     status: 'public',
    //   },
    //   order: ['']
    // })
    const archive = await ctx.service.article.findAllByArchive();
    // this.model('article').where({
    //   status: 'public'
    // }).order('created DESC ,aid DESC').select();
    // articleList.forEach(v => {
    //   delete v.text;
    //   v.link = v.slug || `id/${v.aid}`
    //   v.time = moment(v.created).format('MMM Do')
    // })
    // let archive = _.chain(articleList).groupBy(v => moment(v.created).format('YYYY')).value();
    // let result = [];
    // for(let i in archive) {
    //   result.push({key: i, value: archive[i]})
    //   result.sort((x, y) => y.key - x.key)
    //   this.assign({archive: result});
    // }
    // return this.display(this.theme+'/home/archive');
    console.log(archive);
    ctx.render('/archive', { archive });
  }
}

export default ArchiveController;
