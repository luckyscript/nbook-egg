import { Service } from 'egg';

export default class ConfigService extends Service {
  /**
   * get config
   * @param key
   * @returns value
   */
  public getConfig(key: string) {
    console.log(key);
  }
}
