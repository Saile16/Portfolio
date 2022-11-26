import { motion } from "framer-motion";
import images from "../constants/images";
import MotionWrap from "../wrapper/MotionWrap";
const skills = [
  {
    title: "React",
    bgColor: "#edf2f8",
    imgUrl: images.react,
  },
  {
    title: "Javascript",
    bgColor: "#edf2f8",
    imgUrl: images.javascript,
  },
  {
    title: "Redux",
    bgColor: "#edf2f8",
    imgUrl: images.redux,
  },
  {
    title: "Python",
    bgColor: "#edf2f8",
    imgUrl: images.python,
  },
  {
    title: "Django",
    bgColor: "#edf2f8",
    imgUrl: images.django,
  },
  {
    title: "Express",
    bgColor: "#edf2f8",
    imgUrl: images.express,
  },
  {
    title: "TailwindCss",
    bgColor: "#edf2f8",
    imgUrl: images.tailwind,
  },
  {
    title: "Git",
    bgColor: "#edf2f8",
    imgUrl: images.git,
  },
  {
    title: "HTML",
    bgColor: "#edf2f8",
    imgUrl: images.html,
  },
  {
    title: "CSS",
    bgColor: "#edf2f8",
    imgUrl: images.css,
  },
];
const Skills2 = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="app__skills-container container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.2 }}
              className="app__skills-item app__flex"
              key={skill.title}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={skill.imgUrl}
                  alt={skill.title}
                  className="skill__icon"
                />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MotionWrap(Skills2);
