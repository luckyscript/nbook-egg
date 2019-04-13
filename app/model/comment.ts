import * as Sequelize from 'sequelize';
export interface CommentAttributes {
  created: string;
}
export interface Commentnstance extends Sequelize.Instance<CommentAttributes> {}

const CommentModel = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const moment = require('moment');
  const Comment = app.model.define('comment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: STRING(20),
    content: STRING(600),
    name: STRING(20),
    email: STRING(20),
    pid: INTEGER,
    identity: STRING(50),
    site: STRING(50),
    created: {
      type: STRING(50),
      get(this: Commentnstance) {
        return moment(this.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  }, {
    timestamps: false,
  });

  Comment.findByPage = async function (pageSize, page) {
    const data = await this.findAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
      order: [
        [ 'created', 'DESC' ],
      ],
    });
    return data;
  };

  Comment.findByIds = async function(ids) {
    const Op = app.Sequelize.Op;
    const comments = await this.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });
    return comments;
  };

  Comment.findRecentComments = async function() {
    return await this.findAll({
      limit: 10,
      type: 'article',
      order: [[ 'created', 'DESC' ]],
    });
  };
  return Comment;
};

export default CommentModel;
