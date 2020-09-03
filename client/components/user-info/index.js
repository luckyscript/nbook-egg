import React, { PureComponent } from 'react';
import './index.less';

class UserInfo extends PureComponent {
  render() {
    return (
      <aside className="user-info">
        <img src="https://tvax3.sinaimg.cn/crop.0.0.568.568.180/005Q8srJly8g113pud0g2j30fs0fsdgv.jpg" className="user-info-avatar"/>
      
        <div>
          <h2>Luckyscript</h2>
          <h5>这里空白太小，我写不下</h5>
        </div>
        <ul>
          <li>
            <i className="fa fa-weibo"></i>
            <a target="_blank" nofollow href="https://weibo.com/luckyscript">weibo</a>
          </li>
          <li>
            <i className="fa fa-github"></i>
            <a target="_blank" nofollow href="https://github.com/luckyscript">github</a>
          </li>
          <li>
            <i className="fa fa-steam"></i>
            <a target="_blank" nofollow href="https://steamcommunity.com/profiles/76561198108666682/">steam</a>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <a target="_blank" nofollow href="mailto:main.lukai@gmail.com">email</a>
          </li>
          <li>
            <i className="fa fa-telegram"></i>
            <a target="_blank" nofollow href="https://t.me/luckyscript">telegram</a>
          </li>
          <li>
            <i className="fa fa-instagram"></i>
            <a target="_blank" nofollow href="https://www.instagram.com/luckyscript/">instagram</a>
          </li>
          <li>
            <i className="fa fa-youtube-play"></i>
            <a target="_blank" nofollow href="https://www.youtube.com/channel/UC2Lqp5xsopa3MMnf9VmY_SQ">Youtube</a>
          </li>
          <li>
            <i className="fa fa-medium"></i>
            <a target="_blank" nofollow href="https://www.youtube.com/channel/UC2Lqp5xsopa3MMnf9VmY_SQ">Medium</a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default UserInfo;