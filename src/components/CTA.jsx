import { FiMessageCircle } from "react-icons/fi";
const CTA = () => {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">Get In Touch</h2>
            <p className="project__description">
              Whether you have a question or just want to say hi, I'll get back
              to you!
            </p>
            <a href="#contact" className="button button--flex button--white">
              Contact Me
              <FiMessageCircle className="project__icon button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
