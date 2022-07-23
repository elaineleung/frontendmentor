import logoSVG from "../assets/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={logoSVG} alt="company logo" />
    </div>
  );
}

export default Logo