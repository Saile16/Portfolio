import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineClose,
} from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { BsBriefcase, BsSun } from "react-icons/bs";
import { BiImage } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  const handleDarkTheme = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      setTheme("light");
    } else {
      document.body.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Alexander Lucano
        </a>
        <div
          className={`${menuOpen ? "show-menu" : ""} nav__menu`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <AiOutlineHome
                  className="nav__icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                />{" "}
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <AiOutlineUser
                  className="nav__icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <AiOutlineFileText
                  className="nav__icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <BsBriefcase
                  className="nav__icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                />{" "}
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <BiImage
                  className="nav__icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                />{" "}
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <GrContact
                  className="nav__icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                />{" "}
                Contact Me
              </a>
            </li>
          </ul>
          <AiOutlineClose
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav__close"
            id="nav-close"
          />
        </div>
        <div className="nav__btns">
          {/* Theme change Button */}
          {theme === "light" ? (
            <FiMoon
              onClick={handleDarkTheme}
              className="change-theme"
              id="theme-button"
            />
          ) : (
            <BsSun
              onClick={handleDarkTheme}
              className="change-theme"
              id="theme-button"
            />
          )}

          <div className="nav__toggle" id="nav-toggle">
            <GiHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
