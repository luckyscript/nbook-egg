const apiAuthUser = () => {
  return async (ctx, next) => {
    if (!ctx.path.startsWith('/api')) {
      return await next();
    }
    const user = await ctx.getSession('userInfo');
    if (!user) {
      ctx.status = 401;
      return ctx.body = {
        success: false,
        errMsg: 'Need Login',
        data: null,
      };
    }
    ctx.user = user;
    await next();
  };
};

export default apiAuthUser;
