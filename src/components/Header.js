import React from 'react';
import logo from '../images/VectorLogo.svg';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Header = ({loggedIn, email, logout}) => {
  
  const { pathname } = useHistory().location;
  
  let accountInfo;
  
  if (pathname === '/' && loggedIn) {
    accountInfo = (<>
      <p className='header__email'>{email}</p>
      <button onClick={logout} className='header__account-button header__account-button_type_logout'>Выйти</button>
    </>)
  } else if (pathname === '/sign-in') {
    accountInfo = (<NavLink className="header__account-button" to="./sign-up" >Регистрация</NavLink>)
  } else if (pathname === '/sign-up') {
    accountInfo = (<NavLink className="header__account-button" to="./sign-in" >Войти</NavLink>)
  }

  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип"/>
      <div className='header__account-info'>
        {accountInfo}
      </div>
    </header>
  )
}

export default withRouter(Header);