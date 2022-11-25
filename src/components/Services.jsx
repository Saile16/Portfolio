import { BsGrid1X2 } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineCheckCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BsCode, BsPen } from "react-icons/bs";
import { useState } from "react";
import MotionWrap from "../wrapper/MotionWrap";

const Services = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        {/* <!-- SERVICES  1--> */}
        <div className="services__content">
          <div>
            <BsGrid1X2 className="services__icon" />
            <h3 className="services__title">
              Ui/Ux <br />
              Designer
            </h3>
          </div>
          <span
            onClick={() => toggle(1)}
            className="button button--flex button--small button--link services__button"
          >
            View More <AiOutlineArrowRight className="button__icon" />
          </span>

          <div
            className={`${
              clicked === 1 ? "services__modal active-modal" : "services__modal"
            }`}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Ui/Ux <br />
                Designer
              </h4>
              <FaTimes
                className="services__modal-close"
                onClick={() => setClicked(0)}
              />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>User Interface</p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>Incredible things</p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>User experience</p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>Icredibles thing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- SERVICES 2 --> */}
        <div className="services__content">
          <div>
            <BsCode className="services__icon" />
            <h3 className="services__title">
              Frontend <br />
              Developer
            </h3>
          </div>
          <span
            onClick={() => toggle(2)}
            className="button button--flex button--small button--link services__button"
          >
            View More <AiOutlineArrowRight className="button__icon" />
          </span>

          <div
            className={`${
              clicked === 2 ? "services__modal active-modal" : "services__modal"
            }`}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Frontend <br />
                Developer
              </h4>
              <FaTimes
                className="services__modal-close"
                onClick={() => setClicked(0)}
              />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>User Interface</p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>Incredible things</p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>User experience</p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>Icredibles thing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- SERVICES 3--> */}
        <div className="services__content">
          <div>
            <BsPen className="services__icon" />
            <h3 className="services__title">
              Branding <br />
              Designer
            </h3>
          </div>
          <span
            onClick={() => toggle(3)}
            className="button button--flex button--small button--link services__button"
          >
            View More <AiOutlineArrowRight className="button__icon" />
          </span>

          <div
            className={`${
              clicked === 3 ? "services__modal active-modal" : "services__modal"
            }`}
          >
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Branding <br />
                Designer
              </h4>
              <FaTimes
                className="services__modal-close"
                onClick={() => setClicked(0)}
              />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>User Interface</p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>Incredible things</p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>User experience</p>
                </li>

                <li className="services__modal-service">
                  <AiOutlineCheckCircle className="services__modal-icon" />
                  <p>Icredibles thing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Services);
