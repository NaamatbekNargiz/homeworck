import "./style.css";
import Balanse from "./../../assets/icons/Balanse.png";
import G from "./../../assets/icons/G.png";
import Oo from "./../../assets/icons/Oo.png";
import Rep from "./../../assets/icons/Rep.png";
import Gg from "./../../assets/icons/Gg.png";
import L from "./../../assets/icons/L.png";
import E from "./../../assets/icons/E.png";
import LBM from "./../../assets/icons/LBM.png";
import Vector from "./../../assets/icons/Vector.png";
import VE from "./../../assets/icons/VE.png";
import Vn from "./../../assets/icons/Vn.png";
import Vt from "./../../assets/icons/Vt.png";
import Va from "./../../assets/icons/Va.png";
import Vg from "./../../assets/icons/Vg.png";
import Vr from "./../../assets/icons/Vr.png";
import Vm from "./../../assets/icons/Vm.png";
import RGA from "./../../assets/icons/RGA.png";
import Facebook from "./../../assets/icons/Facebook.png";

const Main = () => {
  return (
    <div>
      <main>
        <h5>USED BY CREATIVE TEAMS AT:</h5>

        <span className="images">
          <img src={Balanse} alt="icon" />
          <section className="google">
            <img src={G} alt="g" />
            <img src={Oo} alt="o" />
            <img src={Rep} alt="O" />
            <img src={Gg} alt="g" />
            <img src={L} alt="l" />
            <img src={E} alt="e" />
          </section>
          <img src={LBM} alt="icon" />
          <section className="pentagram">
            <img src={Vector} alt="p" />
            <img src={VE} alt="e" />
            <img src={Vn} alt="n" />
            <img src={Vt} alt="t" />
            <img src={Va} alt="a" />
            <img src={Vg} alt="g" />
            <img src={Vr} alt="r" />
            <img src={Va} alt="a" />
            <img src={Vm} alt="m" />
          </section>
          <img src={RGA} alt="icon" />
          <img src={Facebook} alt="F" />
        </span>
      </main>
    </div>
  );
};
export default Main;
