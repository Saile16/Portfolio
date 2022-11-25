import { AiOutlineLinkedin } from "react-icons/ai";
import { FiDribbble, FiMessageCircle, FiGithub } from "react-icons/fi";

import Profile from "../assets/hero-profile.png";

import Hero from "../assets/hero-devices.svg";
import { GrContact } from "react-icons/gr";
import { BsMouse } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/alrlucano/"
              className="home__social-icon"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </a>

            <a
              href="https://github.com/Saile16"
              className="home__social-icon"
              target="_blank"
            >
              <FiGithub />
            </a>
          </div>
          <div className="home__img">
            <img src={Hero} className="home__blob-img" />
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi,my name is Alexander</h1>
            <h3 className="home__subtitle">Full Stack Developer</h3>
            <p className="home__description">
              I'm a systems engineer, who enjoys bringing ideas to life with
              code.
            </p>
            <a className="button button-flex" href="#contact">
              Contact Me <FiMessageCircle className="button__icon" />
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <BsMouse className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll down</span>
            <AiOutlineArrowDown className="home__scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
