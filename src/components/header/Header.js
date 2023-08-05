import React from 'react';
import { header, heading, subheading } from './Header.module.scss';

const Header = () => (
  <header className={header}>
    <h1 className={heading}>Kirbee Parsons</h1>
    <h2 className={subheading}>web developer</h2>
  </header>
);

export { Header };
