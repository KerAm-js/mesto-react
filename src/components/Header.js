import React from 'react';
import logo from '../images/VectorLogo.svg';

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип"/>
    </header>
  )
}