import { Service } from 'egg';

/**
 * Test Service
 */
export default class CommonService extends Service {
  /**
   * 
   * @param {string} text 
   * @return {string}
   */
  public getBrief(text:string, length:number):string {
    if(text.search('<!--more-->') == -1) {
      return text.substr(0, length || 300)
    } else {
      return text.split('<!--more-->')[0];
    }
  }
}
