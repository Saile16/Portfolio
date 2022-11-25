import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { BiMap, BiSend } from "react-icons/bi";

const Contactme = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <BsTelephone className="contact__icon" />
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+51 962500068</span>
            </div>
          </div>

          <div className="contact__information">
            <BsEnvelope className="contact__icon" />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">alrlucano@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <BiMap className="contact__icon" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Perú - Lima</span>
            </div>
          </div>
        </div>

        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input type="text" className="contact__input" />
            </div>

            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input type="email" className="contact__input" />
            </div>
          </div>

          <div className="contact__content">
            <label className="contact__label">Project</label>
            <input type="text" className="contact__input" />
          </div>

          <div className="contact__content">
            <label className="contact__label">Message</label>
            <textarea rows="7" className="contact__input"></textarea>
          </div>

          <div>
            <a href="#" className="button button--flex">
              Send Message <BiSend className="button__icon" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactme;
