import Audiophile from "../assets/client-audiophile.svg";
import Databiz from "../assets/client-databiz.svg";
import Maker from "../assets/client-maker.svg";
import Meet from "../assets/client-meet.svg";

function Clients() {
  return (
    <section className="clients">
      <div className="client">
        {" "}
        <img src={`${Databiz}`} alt="" />
      </div>
      <div className="client">
        {" "}
        <img src={`${Audiophile}`} alt="" />
      </div>
      <div className="client">
        {" "}
        <img src={`${Meet}`} alt="" />
      </div>
      <div className="client">
        {" "}
        <img src={`${Maker}`} alt="" />
      </div>

    </section>
  );
}
export default Clients;
