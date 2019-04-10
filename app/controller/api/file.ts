import { Controller } from 'egg';
import { unlinkSync, renameSync } from 'fs';
import * as path from 'path';

class FileController extends Controller {
  staticFilePath = path.join('app', 'public', 'upload');

  async getFileList() {
    const { ctx } = this;
    const fileList = ctx.service.file.getFileList(this.staticFilePath);
    ctx.body = ctx.success(fileList);
  }

  async deleteFile() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const filepath = path.join(this.staticFilePath, name);
    unlinkSync(filepath);
    ctx.body = ctx.success('删除成功');
  }

  async renameFile() {
    const { ctx } = this;
    const { oldName, newName } = ctx.request.body;
    const oldPath = path.join(this.staticFilePath, oldName);
    const newPath = path.join(this.staticFilePath, newName);
    renameSync(oldPath, newPath);
    ctx.body = ctx.success('修改成功');
  }
}

export default FileController;
