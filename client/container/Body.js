import React, { Component } from 'react';
import classnames from 'classnames';
import CommonHead from '../common/Head';

export default function Body(ContentComponent) {
  return class Hoc extends Component {
    static async getInitialProps(props) {
      return {
        ...props
      }
    }

    render() {
      const { theme, title } = this.props;
      const containerClass = classnames({
        'container': true,
        [theme]: true,
      });

      return (
        <div className={containerClass}>
          <CommonHead title={title}/>
          <ContentComponent {...this.props}/>
        </div>
      );
    }
  }
}
