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
    if(text.search('<!--more-->') == -1) {
      return text.substr(0, length);
    } else {
      return text.split('<!--more-->')[0];
    }
  }

  /**
   * markdown 
   * @param code 
   */
  public markdown(code: string): string {
    const marked = require('marked');
    marked.setOptions({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    });
    return marked(code);
  }
}
