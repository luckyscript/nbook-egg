import React from 'react';
import Nav from '../nav';
import Toggle from '../toggle';
import './index.less';

export default function CommonHeader({ nav = [] }) {
  return (
    <header className="common-header">
       <a href="/">
        <span className="site-title">
          Lucky<span>Script</span>
        </span>
      </a>
      <Nav navList={nav} />
      <form action="/search">
        <input id="searchBox" name="keywords" placeholder="请输入关键字" />
        <button>Search</button>
      </form>
      <Toggle />
    </header>
  );
}