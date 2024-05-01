import mobileImg from "../assets/image-hero-mobile.png";
import desktopImg from "../assets/image-hero-desktop.png";

function Hero() {
  return (
    <div className="hero">
      <picture>
        <source media="(min-width: 960px)" srcset={`${desktopImg}`} />
        <img
          src={`${mobileImg}`}
          alt="A man typing into a laptop computer while standing"
        />
      </picture>
    </div>
  );
}
export default Hero;
