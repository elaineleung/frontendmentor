import mobileImg from '../assets/image-hero-mobile.png'
import desktopImg from '../assets/image-hero-desktop.png'

function Hero() {
  return (
    <div className="hero">
      <img
        srcSet={`${mobileImg} 750w, ${desktopImg} 960w`}
        sizes="(max-width: 960px) 750px, 960px"
        src={`${desktopImg}`}
        alt="A man typing into a laptop computer while standing"
      ></img>
    </div>
  );
}
export default Hero;
