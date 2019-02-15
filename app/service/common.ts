import { Service } from 'egg';

/**
 * Common Service
 */
export default class CommonService extends Service {
  /**
   *
   * @param {string} text
   * @return {string}
   */
  public getBrief(text: string, length: number = 300): string {
    if (text.search('<!--more-->') === -1) {
      return text.substr(0, length);
    } else {
      return text.split('<!--more-->')[0];
    }
  }

  /**
   * markdown
   * @param code
   */
  public markdown(code: string) {
    const marked = require('marked');
    marked.setOptions({
      highlight (code) {
        return require('highlight.js').highlightAuto(code).value;
      },
    });
    const toc: any = [];
    const renderer = new marked.Renderer();
    renderer.heading = (text, level, raw, slugger) => {
      const slug = `${slugger.slug(raw)}`;
      toc.push({
        level,
        slug,
        title: text,
      });
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `
          <h${level} id="${slug}" class="testheader">
            <a name="${escapedText}" class="anchor" href="#${slug}">
              <span class="header-link"></span>
            </a>
            ${text}
          </h${level}>`;
    };
    return {
      html: marked(code, { renderer }),
      toc,
    };
  }
}
