import LoginButton from "./elements/LoginButton";

function Login() {
  return (
    <div className="login fs-login">
      <ul className="login__items">
        <LoginButton name="Login" classname="link"/>
        <LoginButton name="Register" classname="cta" />
      </ul>
    </div>
  );
}

export default Login;
