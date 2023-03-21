import React from 'react';
import facebookImg from '../../assets/facebook.png';
import './facebook.scss';

function Facebook() {
  return (
    <div className="facebook">
      <img src={facebookImg} alt="facebook-logo" />
      <span> Facebook으로 로그인</span>
    </div>
  );
}

export default Facebook;
