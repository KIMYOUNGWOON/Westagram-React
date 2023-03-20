import './loginform.scss';

function LoginForm() {
  return (
    <form className="loginform">
      <input id="id" placeholder="전화번호, 사용자 이름 또는 이메일" />
      <input id="pw" type="password" placeholder="비밀번호" />
      <button>로그인</button>
    </form>
  );
}

export default LoginForm;
