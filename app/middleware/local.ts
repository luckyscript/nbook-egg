const local = () => {
  return async (ctx, next) => {
    const nav = ctx.app.config.nav || [];
    ctx.locals.nav = nav;
    const theme = ctx.cookies.get('theme', { signed: false });
    if (theme) {
      ctx.locals.theme = theme;
    } else {
      ctx.locals.theme = 'light';
    }
    const { url } = ctx.request;
    ctx.locals.currentUrl = url;
    return await next();
  };
};

export default local;
