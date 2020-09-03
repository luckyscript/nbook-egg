import React from 'react';
import Head from 'serlina/head';

import '../styles/common.less';

export default function CommonHead(props) {
  const {
    title
  } = props;
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
