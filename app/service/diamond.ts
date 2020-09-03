import { Service } from 'egg';

class DiamondService extends Service {
  async get(key: string) {
    const { ctx } = this;
    const diamond = await ctx.model.Diamond.findByKey(key);
    if (!diamond) {
      return {};
    }
    const { value = '{}' } = diamond;
    try {
      return JSON.parse(value);
    } catch (err) {
      return {};
    }
  }

  async set(key: string, value = '{}') {
    const { ctx } = this;
    try {
      JSON.parse(value);
    } catch (err) {
      throw err;
    }
    await ctx.model.Diamond.upsert({
      key,
      value,
    });
  }
}

export default DiamondService;
