import { GiGraduateCap } from "react-icons/gi";
import { BiBriefcase } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";

import MotionWrap from "../wrapper/MotionWrap";
import { useState } from "react";
const Qualification = () => {
  const [clicked, setClicked] = useState(1);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(index);
    }

    setClicked(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`${
              clicked === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }`}
            onClick={() => toggle(1)}
          >
            <GiGraduateCap className="qualification__icon" />
            Education
          </div>
          <div
            className={`${
              clicked === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }`}
            onClick={() => toggle(2)}
          >
            <BiBriefcase className="qualification__icon" />
            Work
          </div>
        </div>

        <div className="qualification__sections">
          {/* <!-- Qualification content 1 --> */}
          <div
            className={`${
              clicked === 1
                ? "qualification__content qualification__active"
                : "qualification__content"
            }`}
            data-content
            id="education"
          >
            {/* QUALIFACTION1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Systems and Computer Engineering
                </h3>
                <span className="qualification__subtitle">
                  Peru - University of Huanuco
                </span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> 2016 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* QUALIFACTION 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Google Project Management: Professional Certificate
                </h3>
                <span className="qualification__subtitle">
                  Grow With Google
                </span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> Apr 2021 - Nov 2021
                </div>
              </div>
            </div>

            {/* QUALIFACTION 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  FrontendMasters Web Development Bootcamp
                </h3>
                <span className="qualification__subtitle">
                  FrontEnd Masters
                </span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> Oct 2020 - Dec 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* <!-- Qualification content 2 --> */}
          <div
            className={`${
              clicked === 2
                ? "qualification__content qualification__active"
                : "qualification__content"
            }`}
            data-content
            id="work"
          >
            {/* QUALIFACTION1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Mibolsillo</span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> 2021 - Set 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* QUALIFACTION 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                  Vidalon & Associates
                </span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> 2020
                </div>
              </div>
            </div>

            {/* QUALIFACTION 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Internship IT Support</h3>
                <span className="qualification__subtitle">
                  Morococha - Peru
                </span>
                <div className="qualification__calendar">
                  <BsCalendar3 /> Jan 2018 - Mar 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Qualification);
