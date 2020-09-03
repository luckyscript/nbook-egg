import React, {Component} from 'react';
import Body from '../container/Body';
import CommonHeader from '../components/common-header';

class HomePage extends Component {
  render() {
    const {nav} = this.props;
    return (
      <div className="blog-page">
        <CommonHeader nav={nav}/>
        <main className="main">
        </main>
      </div>
    )
  }
}

export default Body(HomePage);
