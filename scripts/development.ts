// 开发的时候需要的一些辅助脚本
import * as path from 'path';
// const env = process.env.NODE_ENV;
export default function() {
  console.log('autoCompiler for postcss start...');
  const autoCompiler = require('autocompiler');
  autoCompiler({
    plugins: [
      require('postcss-easy-import'),
      require('postcss-cssnext'),
      require('cssnano')({
        autoprefixer: false,
        zindex: false,
        preset: [ 'default', {
          discardComments: {
            removeAll: true,
          },
        }],
      }),
    ],
    multiPath: [{
      source: path.resolve(__dirname, '..', 'app', 'public', 'pcss', 'common.pcss'),
      desc: path.resolve(__dirname, '..', 'app', 'public', 'stylesheets', 'common.css'),
    }],
    sourceMap: true,
  });
}
