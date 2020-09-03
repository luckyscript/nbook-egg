const local = () => {
  return async (ctx, next) => {
    const nav = ctx.app.config.nav || [];
    ctx.app.serlina.inject({ nav });
    const theme = ctx.cookies.get('theme', { signed: false });
    if (theme) {
      ctx.app.serlina.inject({ theme });
    } else {
      ctx.app.serlina.inject({ nav: 'light' });
    }
    const { url } = ctx.request;
    ctx.app.serlina.inject({ currentUrl: url });
    return await next();
  };
};

export default local;
