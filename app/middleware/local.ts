const local = () => {
  return async (ctx, next) => {
    const nav = ctx.app.config.nav || [];
    ctx.locals.nav = nav;
    const theme = ctx.cookies.get('theme', { signed: false });
    console.log('xxxy', theme);
    if (theme) {
      ctx.locals.theme = theme;
    } else {
      ctx.locals.theme = 'light';
    }
    return await next();
  };
};

export default local;
