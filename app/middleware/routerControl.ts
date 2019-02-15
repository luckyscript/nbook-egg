const routerControl = () => {
  return async (ctx, next) => {
    if (ctx.params.page && ctx.params.page <= 1 || ctx.params.page === 0) {
      ctx.redirect('/');
    }
    await next();
  };
};

export default routerControl;
