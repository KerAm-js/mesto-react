import React from "react";
import { NavLink } from "react-router-dom";

const AuthForm = ({
  title, 
  submitTitle, 
  onSubmit, 
  email, 
  password, 
  onChangeEmail, 
  onChangePassword
}) => {

  return (
    <div className="auth">
      <h2 className="auth__title">{title}</h2>
      <form className="form form_type_auth">
        <input 
          value={email}
          onChange={onChangeEmail}
          placeholder="Email" 
          type="email" 
          className="form__input form__input_type_auth" 
        />
        <span className="form__error username-error">Заполните это поле</span>
        <input 
          value={password}
          onChange={onChangePassword}
          placeholder="Пароль" 
          type="password" 
          className="form__input form__input_type_auth" 
        />
        <span className="form__error username-error">Заполните это поле</span>
        <button className="form__button form__button_type_auth" onClick={onSubmit}>{submitTitle}</button>
      </form>
      {
        title === 'Регистрация' && <NavLink to="/sign-in" className="link">Уже зарегистрированы? Войти</NavLink>
      }
    </div>
  )
}

export default AuthForm;