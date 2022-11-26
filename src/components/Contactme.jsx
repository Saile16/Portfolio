import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { BiMap, BiSend } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contactme = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE}`,
        `${import.meta.env.VITE_TEMPLATE_EMAIL}`,
        e.target,
        `${import.meta.env.VITE_API_KEY}`
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    setName("");
    setEmail("");
    setMessage("");
  };
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

        <form className="contact__form grid" onSubmit={sendEmail}>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input
                type="text"
                className="contact__input"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input
                type="email"
                className="contact__input"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="contact__content">
            <label className="contact__label">Message</label>
            <textarea
              rows="7"
              className="contact__input"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div>
            <button className="button button--flex">
              Send Message <BiSend className="button__icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactme;
