import React from 'react';
import Facebook from './facebook';
import Forgotpassword from './forgotpassword';
import LoginForm from './loginform';
import SignUp from './signup';
import Westagram from './westagram';
import './login.scss';

function Login() {
  return (
    <div className="login">
      <div className="fullArea">
        <Westagram />
        <LoginForm />
        <Facebook />
        <Forgotpassword />
      </div>
      <SignUp />
    </div>
  );
}

export default Login;
