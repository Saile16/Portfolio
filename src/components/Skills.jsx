import React from "react";
import { VscBracketDot } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa";
import { FiServer } from "react-icons/fi";
import { TbColorSwatch } from "react-icons/tb";
import { useState } from "react";
import images from "../constants/images";

const Skills = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          <div
            className={`${
              clicked === 1
                ? "skills_content skills__open"
                : "skills_content skills__close"
            }`}
            onClick={() => toggle(1)}
          >
            <div className="skills__header">
              <VscBracketDot className="skills__icon" />
              <div>
                <h1 className="skills__titles">Frontend developer</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>
              <FaAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            clicked === 2
              ? "skills_content skills__open"
              : "skills_content skills__close"
          }`}
          onClick={() => toggle(2)}
        >
          <div className="skills__header">
            <FiServer className="skills__icon" />
            <div>
              <h1 className="skills__titles">Backend developer</h1>
              <span className="skills__subtitle">More than 2 years</span>
            </div>
            <FaAngleDown className="skills__arrow" />
          </div>

          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">PHP</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__php"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">node Js</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__node"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">FireBase</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number">55%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__python"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
