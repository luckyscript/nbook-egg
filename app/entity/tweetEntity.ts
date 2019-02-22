import Entity from '../utils/entity';

class TweetEntity extends Entity {
  constructor(data) {
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        data = {};
      }
    }
    super(data);
  }
  get tweetData() {
    return this.data.data.cards || [];
  }
  get total() {
    return this.data.data.cardlistInfo.total || 0;
  }
}

export default TweetEntity;
