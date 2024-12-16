import "./nav.css";

import Frame from "./../../assets/icons/Frame.svg";
import Vector from "./../../assets/icons/Vector.svg";

const Navbar = () => {
  return (
    <nav className="container-box1">
      <div>
        <img className="icon" src={Frame} alt="frame" />
        <span>
          <a>
            Features
            <img src={Vector} className="arrow" alt="vector" />
          </a>
          <a>Pricing</a>
          <a>
            Resources
            <img src={Vector} className="arrow-1" alt="vector" />
          </a>
          <button className="clik">Log in</button>
          <button className="click">Sign up</button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
