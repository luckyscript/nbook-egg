/**
 * markdown trans function
 */

/**
 *
 * @param {string} text
 * @return {string}
 */
export function getBrief(text: string, length: number = 300): string {
  if (text === null) {
    return '';
  }
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
export function markdown(code: string) {
  const marked = require('marked');
  marked.setOptions({
    highlight(code) {
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
          <h${level} id="${slug}" class="articleHeader">
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
