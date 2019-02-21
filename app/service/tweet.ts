import { Service } from 'egg';
import rp from 'request-promise';
import TweetEntity from '../entity/tweetEntity';

class TweetService extends Service {
  url = 'https://m.weibo.cn/api/container/getIndex';
  async getTweet(page: number) {
    const options = {
      uri: this.url,
      qs: {
        type: 'uid',
        value: 5351049607,
        containerid: 1076035351049607,
        page,
      },
      headers: {
        Accept: 'application/json, text/plain, */*',
        'MWeibo-Pwa': 1,
        Referer: 'https://m.weibo.cn/u/5351049607',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        'X-Requested-With': 'XMLHttpRequest',
      },
    };
    const data = await rp(options);
    const { total, tweetData } = TweetEntity.Create(data);
    return { data: tweetData, total };
  }
}

export default TweetService;
