import { Controller } from 'egg';
import * as path from 'path';
import fs from 'fs-extra';

class CommonController extends Controller {
  async upload() {
    const { ctx } = this;
    const { files } = ctx.request;
    const file = files[0];
    const filename = Date.now() + path.basename(file.filename);
    let resultDTO;
    try {
      resultDTO = await ctx.service.oss.put(filename, file.filepath);
    } finally {
      await fs.unlink(file.filepath);
    }
    ctx.body = ctx.success({
      url: resultDTO.url,
      type: file.mime,
    });
  }
}

export default CommonController;