import { Service } from 'egg';
import * as path from 'path';
import { readdirSync, statSync } from 'fs';

class FileService extends Service {

  getFileList(dirPath) {
    const files: any = readdirSync(dirPath, { withFileTypes: true });

    const fileList = files.map(v => {
      if (v.isDirectory()) {
        return {
          name: v.name,
          type: 'dir',
          children: this.getFileList(path.join(dirPath, v.name)),
        };
      } else {
        return { name: v.name, type: 'file', ...statSync(path.join(dirPath, v.name)) };
      }
    });
    return fileList;
  }
}

export default FileService;
