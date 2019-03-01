const context: any = {
  /**
   * render a part of page that can decrease ttfb time
   * current only use in the home page
   * @param tpl ejs template
   * @param options render option
   */
  async renderSome(tpl: string, options: any) {
    this.res.statusCode = 200;
    const firstChunkMinLength: number = 4096;
    let content = await this.renderView(tpl, options);
    // render header and can decrease ttfb time
    if (!this.headerSent) {
      this.type = 'html';
      this.flushHeaders();
      const length = content.length;
      if (length < firstChunkMinLength) {
        content += `<s>${' '.repeat(firstChunkMinLength - length)}</s>`;
      }
    }
    this.res.write(content);
  },
  /**
   * set session
   * @param { string } key
   * @param value
   */
  async setSession(key: string, value) {
    this.session[key] = value;
  },
  /**
   * get session by key
   * @param { string } key
   */
  async getSession(key: string) {
    return this.session[key] || null;
  },
  /**
   * clear session or clear session by key
   * @param key
   */
  async clearSession(key?: string) {
    if (key) {
      delete this.session[key];
    } else {
      this.session = null;
    }
  },
  success(data) {
    return {
      success: true,
      errMsg: '',
      errCode: 0,
      data,
    };
  },
  error(errMsg = '', errCode = 1, data = null) {
    return {
      success: false,
      errCode,
      errMsg,
      data,
    };
  },
  /**
   * set or get key from redis
   * @param {string} key cache key
   * @param {any} value cache value
   */
  async cache(key: string, value?: any) {
    if (!value) {
      const valueString = await this.app.redis.get(key);
      return JSON.parse(valueString);
    } else {
      const valueString = JSON.stringify(value);
      console.log(value);
      await this.app.redis.set(key, valueString);
    }
  },
};

export default context;
