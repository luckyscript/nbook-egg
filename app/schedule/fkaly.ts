// 由于阿里云和傻逼工信部的政策，备案域名必须要绑定阿里云域名并且达到每天100的访问量，所以每天刷一下访问量
import { Subscription } from 'egg';

class Fkaly extends Subscription {
    static get schedule() {
        return {
            interval: '15m',
            type: 'worker',
        };
    }

    async subscribe() {
        await this.ctx.curl('http://xxxxx.luckyscript.me');
    }
}

export default Fkaly;
