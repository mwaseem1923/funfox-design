import React from 'react';
import logo from '../../Images/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" width={"100px"} height={"auto"} alt='Logo' />
    </header>
  );
}
