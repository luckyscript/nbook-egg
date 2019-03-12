import { Controller } from 'egg';
import * as path from 'path';
// import fs from 'fs-extra';

class CommonController extends Controller {
  async upload() {
    const { ctx } = this;
    const { files } = ctx.request;
    const file = files[0];
    const filename = Date.now() + path.basename(file.filename);
    let resultDTO;
    try {
      resultDTO = await ctx.service.oss.add(filename, file.filepath);
    } finally {
      // await fs.unlink(file.filepath);
    }
    ctx.body = ctx.success({
      url: resultDTO.url,
      type: file.mime,
    });
  }

  async uploadByStream() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const name = Date.now() + path.basename(stream.filename);
    let resultDTO;
    try {
      resultDTO = await ctx.service.oss.addByStream(name, stream);
    } catch (err) {
      const sendToWormhole = require('stream-wormhole');
      await sendToWormhole(stream);
      throw err;
    }
    ctx.body = {
      url: resultDTO.url,
    };
  }
}

export default CommonController;
