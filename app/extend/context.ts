const context: any = {
  async renderSome(tpl: string, options: any) {
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
  success(data) {
    return {
      success: true,
      errMsg: '',
      data,
    };
  },
  error(data, errMsg = '') {
    return {
      success: false,
      errMsg,
      data,
    }
  },
};

export default context;
