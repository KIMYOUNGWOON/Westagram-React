import React, { useState } from 'react';
import './loginform.scss';

function LoginForm() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const onChangenId = (e) => {
    setIdValue(e.target.value);
  };

  const onChangenPw = (e) => {
    setPwValue(e.target.value);
  };

  const idCheck = idValue.includes('@');
  const pwCheck = pwValue.length >= 5;

  return (
    <form className="loginform">
      <input
        id="id"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={onChangenId}
        value={idValue}
      />
      <input
        id="pw"
        type="password"
        placeholder="비밀번호"
        onChange={onChangenPw}
        value={pwValue}
      />
      <button className={idCheck && pwCheck ? 'possible' : ''}>로그인</button>
    </form>
  );
}

export default LoginForm;
