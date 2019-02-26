const CommentModel = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Comment = app.model.define('comment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    content: STRING(600),
    name: STRING(20),
    email: STRING(20),
    pid: INTEGER,
    identity: STRING(50),
    site: STRING(50),
    created: STRING(50),
  }, {
    timestamps: false,
  });

  return Comment;
};

export default CommentModel;
