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
};

export default context;
