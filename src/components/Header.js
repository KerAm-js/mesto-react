import React from 'react';
import Logo from '../images/VectorLogo.svg';

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Логотип"/>
    </header>
  )
}