const authUser = () => {
  return async (ctx, next) => {
    ctx.locals.userInfo = null;
    const user = await ctx.getSession('userInfo');
    if (!user) {
      return await next();
    }
    ctx.user = user;
    ctx.locals.userInfo = user;
    await next();
  };
};

export default authUser;
