function LoginButton({ name, ...props }) {
  return (
    <li className={`login__item ${props.classname}`} >
      <a href="#">{name}</a>
    </li>
  );
}

export default LoginButton;
