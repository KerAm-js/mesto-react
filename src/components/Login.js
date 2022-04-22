import React from "react";
import AuthForm from "./AuthForm";

const Login = ({email, setEmail, password, setPassword}) => {
  
  return (
    <div className="login">
      <AuthForm 
        title="Вход" 
        submitTitle="Войти"
        email={email}
        onChangeEmail={setEmail}
        password={password}
        onChangePassword={setPassword}
      />
    </div>
  )
}

export default Login;