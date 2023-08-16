import React from 'react';
import { Link } from 'gatsby';
import { header, heading, links } from './Header.module.scss';

const Header = () => (
  <header className={header}>
    <h1 className={heading}>Kirbee Parsons</h1>
    <ul className={links}>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/resources">Resources</Link>
    </ul>
  </header>
);

export { Header };
