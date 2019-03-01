const handleError = () => {
  const isDEV = process.env.NODE_ENV === 'development';
  return async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      if (isDEV) {
        console.error(e);
      } else {
        ctx.logger.error(e);
      }
      ctx.status = 500;
      ctx.body = ctx.error(e.message);
      return;
    }
  };
};

export default handleError;
