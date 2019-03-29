import { readFile, writeFileSync } from 'fs';
import { resolve } from 'path';

const build = () => {
  const plugins: any[] = [
    require('postcss-easy-import'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': true,
      },
    }),
    require('cssnano')({
      autoprefixer: false,
      zindex: false,
      preset: [ 'default', {
        discardComments: {
          removeAll: true,
        },
      }],
    }),
  ];
  const src = resolve(__dirname, '..', 'app', 'public', 'pcss', 'common.pcss');
  const desc = resolve(__dirname, '..', 'app', 'public', 'stylesheets', 'common.css');
  readFile(src, (err, css) => {
    if (err) {
      throw new Error(`${err}`);
    }
    const postcss = require('postcss');
    postcss(plugins).process(css, { from: src, to: desc }).then(data => {
      writeFileSync(desc, data.css);
    });
  });
};

build();
