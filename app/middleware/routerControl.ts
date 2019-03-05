const routerControl = options => {
  return async (ctx, next) => {
    if (ctx.params.page && ctx.params.page <= 1) {
      return ctx.redirect(options.path || '/');
    }
    return await next();
  };
};

export default routerControl;
