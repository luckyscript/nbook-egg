import React, { Component } from 'react';
import Body from '../container/Body';
import CommonHeader from '../components/common-header';
import UserInfo from '../components/user-info';

class HomePage extends Component {
  render () {
    const { nav } = this.props;
    return (
      <div className="home-page">
        <CommonHeader nav={nav}/>
        <main className="main">
        </main>
      </div>
    )
  }
}
export default Body(HomePage);
