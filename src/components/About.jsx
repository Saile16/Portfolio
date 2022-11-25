import { BiDownload } from "react-icons/bi";
import ImageProfile from "../assets/hero-profile.jpg";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">
        Hello, my name is Alexander. Technology was always something that caught
        my attention, I started being self-taught until I finished a degree in
        Systems Engineering. And now I am constantly learning and growing with
        new technologies.
      </span>

      <div className="about__container container grid">
        <img src={ImageProfile} alt="about image" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Web developer with a lot of experience
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">
                Years <br />
                experience
              </span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br />
                project
              </span>
            </div>

            {/* <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">
                Companies <br />
                worked
              </span>
            </div> */}
          </div>

          <div className="about__buttons">
            <a download="" href="" className="button button--flex">
              Download CV
              <BiDownload className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
