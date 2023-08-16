import React from 'react';
import { Link } from 'gatsby';
import { header, nav, heading, links } from './Header.module.scss';

const Header = () => (
  <header className={header}>
    <nav className={nav}>
      <Link to="/" className={heading}>
        <h1>Kirbee Parsons</h1>
      </Link>
      <ul className={links}>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/resources">Resources</Link>
      </ul>
    </nav>
  </header>
);

export { Header };
