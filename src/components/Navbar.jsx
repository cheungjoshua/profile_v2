import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [navShow, setNavShow] = useState(false);

  let navClass = navShow ? "navLinks showNav" : "navLinks";

  ////////////////////////
  /// Help ** NOT ** scroll all the way to the top
  /// when using react-router-hash-link
  /////////////////////////
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className="headNav" id="headNav">
      <div className="wrapper">
        <div className="logoContainer">
          <Link to="#home" className="link" smooth>
            <h1 className="myNameLogo">Joshua Cheung</h1>
          </Link>
        </div>
        <nav>
          <div className="mobileMenu" id="hamburger">
            {navShow ? (
              <FontAwesomeIcon
                className="navToggle"
                icon={faXmark}
                onClick={() => {
                  setNavShow(false);
                }}
              />
            ) : (
              <FontAwesomeIcon
                className="navToggle"
                icon={faBars}
                onClick={() => {
                  setNavShow(true);
                }}
              />
            )}
          </div>
          <ul className={navClass} id="navLinks">
            <li>
              <Link
                to="#about"
                className="link"
                smooth
                onClick={() => {
                  setNavShow(false);
                }}
                scroll={scrollWithOffset}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#skills"
                className="link"
                smooth
                onClick={() => {
                  setNavShow(false);
                }}
                scroll={scrollWithOffset}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                className="link"
                smooth
                onClick={() => {
                  setNavShow(false);
                }}
                scroll={scrollWithOffset}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
