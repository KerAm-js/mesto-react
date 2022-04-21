import React from "react";
import AuthForm from "./AuthForm";

const Register = ({
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <div className="register">
      <AuthForm 
        title="Регистрация" 
        submitTitle="Зарегистрироваться"
        email={email}
        onChangeEmail={setEmail}
        password={password}
        onChangePassword={setPassword}
      />
    </div>
  )
}

export default Register;