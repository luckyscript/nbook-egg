import categoryModel from './category';
import * as Sequelize from 'sequelize';

export interface LinkAttributes {
  created: string;
}
export interface LinkInstance extends Sequelize.Instance<LinkAttributes> {
  created: string;
}

const linkModel = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Category = categoryModel(app);

  const moment = require('moment');
  const Link = app.model.define('link', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    created: {
      type: STRING(20),
      get(this: LinkInstance) {
        const originCreate = this.getDataValue('created');
        return moment(originCreate).format('YYYY-MM-DD');
      },
    },
    name: STRING(50),
    url: STRING(200),
    categoryId: INTEGER,
    readnum: INTEGER,
    uuid: STRING(16),
    show: INTEGER,
  }, {
    timestamps: false,
  });
  Link.belongsTo(Category, { foreignKey: 'categoryId' });

  Link.findByPage = async function(page, pageSize) {
    const data = await this.findAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
      where: {
        show: 1,
      },
      order: [
        [ 'created', 'DESC' ],
      ],
      include: [ Category ],
    });
    return data;
  };

  Link.findByUUID = async function (uuid: string) {
    const data = await this.findOne({
      where: {
        uuid,
        show: 1,
      },
    });
    return data;
  };

  Link.prototype.incrementReadNum = async function () {
    return await this.increment('readnum');
  };

  Link.findByCategory = async function (categoryName: string) {
    return await this.find({
      where: {
        'categorys.name': categoryName,
      },
    });
  };

  Link.findByName = async function(name) {
    return await this.findOne({
      where: {
        name,
      },
    });
  };

  return Link;
};

export default linkModel;
