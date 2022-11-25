import { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import MotionWrap from "../wrapper/MotionWrap";

import Mibolsillo from "../assets/mibolsillo.png";
import Ecommerce from "../assets/ecommerce.png";
import Projects from "../assets/projects.png";
import Bank from "../assets/bank.png";
const Portfolio = () => {
  const [filterWork, setFilterWork] = useState([
    {
      title: "MiBolsillo",
      description:
        "Developed website from start to finish using PHP, JavaScript and HTML, being fully responsive adapting to cell phones, tablets and desktop.",
      projectLink: "https://mibolsilloapp.com/pe/",
      githubLink: false,
      imgUrl: Mibolsillo,
      tags: ["Wordpress, JS , PHP"],
    },
    {
      title: "Ecommerce",
      description:
        "I developed an ecommerce web page as practice, using django in the backend and react in the frontend, reactboostrap for the styles, registration functionality, login, search, roles as user and administrator.",
      projectLink: "https://github.com/Saile16/Ecomshop/tree/main",
      githubLink: "https://github.com/Saile16/Ecomshop/tree/main",
      imgUrl: Ecommerce,
      tags: ["Django, React, Full Stack"],
    },
    {
      title: "MERN Project",
      description:
        "Using the MERN stack, I developed this application where the user can keep track of their projects and the tasks assigned to them. Authentication functionality and more.",
      projectLink: "https://shiny-sprite-98d398.netlify.app/proyectos",
      githubLink: "https://github.com/Saile16/BugTracker_MERN_frontend",
      imgUrl: Projects,
      tags: ["MERN, Full Stack"],
    },
    {
      title: "BankWeb",
      description: "",
      projectLink: "https://cute-zabaione-11d837.netlify.app/",
      githubLink: "https://github.com/Saile16/BankWeb",
      imgUrl: Bank,
      tags: ["Tailwind Css, HTML"],
    },
  ]);
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Projects I have worked on.</span>
      <div className="app__work-portfolio">
        {filterWork.map((item, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={item.imgUrl} alt="test" />
              <div className="app__work-hover app__flex">
                <a href={item.projectLink} target="_blank" rel="noreferrer">
                  <div className="app__flex portfolio-icon">
                    <AiFillEye className="portfolio-icon" />
                  </div>
                </a>
                {item.githubLink && (
                  <a href={item.githubLink} target="_blank" rel="noreferrer">
                    <div className="app__flex portfolio-icon">
                      <AiFillGithub className="" />
                    </div>
                  </a>
                )}
              </div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="portfolio__title">{item.title}</h4>
              <p className="portfolio__description" style={{ marginTop: 10 }}>
                {item.description}
              </p>
              <div className="app__work-tag app__flex">
                {item.tags.map((tag, index) => (
                  <p className="" key={index}>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MotionWrap(Portfolio);
