import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Alexander Lucano</h1>
            <span className="footer__subtitle">Full Stack developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" className="footer__link">
                Contact Me
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/alrlucano/"
              className="footer__social"
            >
              <AiOutlineLinkedin />
            </a>
            <a href="https://github.com/Saile16" className="footer__social">
              <FiGithub />
            </a>
            <a href="" className="footer__social"></a>
          </div>
        </div>
        <p className="footer__copy">
          &#169; Alexander Lucano. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
