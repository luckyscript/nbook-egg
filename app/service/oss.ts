import { Service } from 'egg';
import * as path from 'path';
import * as fs from 'fs-extra';

class OssService extends Service {
  ossPath = path.join('app', 'public', 'upload');

  /**
   * 新增文件
   * @param filename 文件名
   * @param tmppath 临时路径
   */
  async add(filename:string, tmppath: string) {
    try {
      console.log(tmppath);
      fs.accessSync(tmppath, fs.R_OK);
      fs.accessSync(path.resolve(this.ossPath), fs.R_OK);
    } catch (e) {
      throw new Error(e);
    }
    const filepath = path.resolve(path.join(this.ossPath, filename));
    const readSrc = fs.createReadStream(tmppath);
    const writeDes = fs.createWriteStream(filepath);
    const stream = readSrc.pipe(writeDes);
    return new Promise(resolve => {
      stream.on('finish', () => {
        resolve({
          url: filepath,
        });
      });
    });
  }

  /**
   *  delete file by filename
   * @param {string} filename fileName
   */
  /**
   * 修改文件名称
   * @param filename 旧文件名
   * @param newName 新文件名
   */
  // async put(filename: string, newName: string) {}
}

export default OssService;
