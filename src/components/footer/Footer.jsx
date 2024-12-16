import "./style.css";
import Fvec from "./../../assets/icons/Fvec.png";
import Fr from "./../../assets/icons/Fr.png";
import Fu from "./../../assets/icons/Fu.png";
import Fn from "./../../assets/icons/Fn.png";
import Fw from "./../../assets/icons/Fw.png";
import Fa from "./../../assets/icons/Fa.png";
import Fy from "./../../assets/icons/Fy.png";
const Footer = () => {
  return (
    <div>
      <footer>
        <span className="block-1">
          <img src={Fvec} className="arr" alt="arrow" />
          <h2>Get Started Now</h2>
        </span>
        <span className="runway">
          <img src={Fr} alt="r" />
          <img src={Fu} alt="u" />
          <img src={Fn} alt="n" />
          <img src={Fw} alt="w" />
          <img src={Fa} alt="a" />
          <img src={Fy} alt="y" />
        </span>

        <section className="block-2">
          <h3>Features</h3>
          <ul>
            <li>Green Screen</li>
            <li>Generative Media</li>
            <li>Face Animation (Soon)</li>
            <li>Model Playground</li>
            <li>Training</li>
            <li>Hosted Models</li>
          </ul>
          <h3>Resources</h3>
          <ul>
            <li>Educators</li>
            <li>Blog</li>
            <li>Learn & Docs</li>
            <li>Support</li>
            <li>Python SDK</li>
            <li>Made With</li>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
          <h3>Runway</h3>
          <ul>
            <li>About</li>
            <li>System Status</li>
            <li>Release Notes</li>
            <li>Join our Slack</li>
            <li>YouTube</li>
            <li>Twitter</li>
            <li>Contact Us</li>
          </ul>
        </section>

        <section className="block-3">
          <a>2021 Runway AI, Inc.</a>
          <a>Code of Conduct</a>
          <a>Privacy Policy</a>
          <a>CCPA</a>
          <a>Terms and Conditions</a>
        </section>
      </footer>
    </div>
  );
};
export default Footer;
