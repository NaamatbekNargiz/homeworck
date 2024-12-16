import "./style.css";
import Human from "./../../assets/img/Human.svg";

const Header = () => {
  return (
    <div>
      <header>
        <section>
          <h1>Make the Impossible</h1>
          <p>
            Create and edit content like never before. Your next generation
            creative toolkit — powered by machine learning.
          </p>
          <button className="btn">Try Runway for free</button>
        </section>
        <section>
          <img src={Human} className="mans" alt="man" />
          <button className="btn-header">Sign up</button>
        </section>
      </header>
    </div>
  );
};
export default Header;
