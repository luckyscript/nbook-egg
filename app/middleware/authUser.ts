const authUser = () => {
  return async (ctx, next) => {
    ctx.locals.userInfo = null;
    ctx.locals.githubUserInfo = null;
    let user = await ctx.getSession('userInfo');
    let githubUser = await ctx.getSession('githubUserInfo');
    if (user) {
      if (typeof user === 'string') {
        user = JSON.parse(user);
      }
      ctx.user = user;
      ctx.locals.userInfo = user;
    }
    if (githubUser) {
      if (typeof githubUser === 'string') {
        githubUser = JSON.parse(githubUser);
      }
      ctx.githubUser = githubUser;
      ctx.locals.githubUserInfo = githubUser;
    }
    await next();
  };
};

export default authUser;
