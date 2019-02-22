import { Service } from 'egg';
import * as Geetest from 'gt3-sdk';

const click = new Geetest({
    geetest_id: 'f33f6032bd0975aaab21e49e6c76aa3d', // 将xxx替换为您申请的 id
    geetest_key: 'be92a7a4f9901d66df096cbe4cd4320b', // 将xxx替换为您申请的 key
});

const registerPromise = () => {
  return new Promise((resolve, reject) => {
    return click.register(null, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const validatePromise = (gt, gtSec) => {
  return new Promise((resolve, reject) => {
    return click.validate(gt, gtSec, (err, success) => {
      if (err) {
        reject(err);
      }
      if (!success) {
        reject('验证码已过期');
      }
      resolve('success');
    });
  });
};

class GeetestService extends Service {
  async register() {
    return await registerPromise();
  }
  async twoStepCheck(gt, geetest_challenge, geetest_validate, geetest_seccode) {
    return await validatePromise(gt, {
      geetest_challenge,
      geetest_validate,
      geetest_seccode,
    });
  }
}

export default GeetestService;
