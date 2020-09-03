import React from 'react';
import './index.css';

export default function({ navList }) {
  if (!navList || !navList.length) {
    return null;
  }
  return (
    <ul className="nav nav-list">
      {navList.map(item => (
        <li className="nav-list-item">
          <a href={item.url} target="_self" className="nav-list-link">{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
