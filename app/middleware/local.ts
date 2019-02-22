const local = () => {
  return async (ctx, next) => {
    const nav = ctx.app.config.nav || [];
    ctx.locals.nav = nav;
    return await next();
  };
};

export default local;
