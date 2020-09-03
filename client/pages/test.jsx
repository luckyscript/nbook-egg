import React, { Component } from 'react';
class HomePage extends Component {

  static async getInitialProps({ ctx, config }) {
    return {
      config,
    }
  }

  render () {
    const { config } = this.props;
    const { nav } = config;
    return (
      <div className="test">

      </div>
    )
  }
}
export default HomePage;